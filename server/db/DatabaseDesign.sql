
CREATE TYPE ROLE AS ENUM ('user', 'admin'); 

CREATE TABLE users ( 
    id SERIAL PRIMARY KEY, 
    username VARCHAR(255) NOT NULL UNIQUE, 
    password VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE, 
   
    role ROLE NOT NULL DEFAULT 'user',
    registered_on DATE NOT NULL 
);

CREATE TYPE STATUS AS ENUM ('in progress', 'done');
-

CREATE TABLE projects (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status STATUS NOT NULL DEFAULT 'in progress'

);

CREATE TABLE project_workers(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    project_id INT NOT NULL,

    CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT fk_project FOREIGN KEY(project_id) REFERENCES projects(id)
);

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,

    status STATUS NOT NULL DEFAULT 'in progress',

    project_id INT NOT NULL,

    CONSTRAINT fk_projects FOREIGN KEY(project_id) REFERENCES projects(id)
);

ALTER TYPE ROLE ADD VALUE 'super_user';

ALTER TABLE project_workers
ADD role ROLE NOT NULL DEFAULT 'user';

ALTER TABLE tasks
ADD worker_id INT,
ADD CONSTRAINT fk_users FOREIGN KEY(worker_id) REFERENCES users(id);

ALTER TYPE STATUS RENAME TO TASK_STATUS;
ALTER TYPE TASK_STATUS ADD VALUE 'to do';

CREATE TYPE PROJECT_STATUS AS ENUM ('ongoing', 'done');

ALTER TABLE projects
DROP status,
ADD status PROJECT_STATUS NOT NULL DEFAULT 'ongoing';

ALTER TABLE users
DROP role;

ALTER TABLE project_workers
DROP role;

DROP TYPE ROLE;

CREATE TYPE ROLE AS ENUM ('user', 'admin');

ALTER TABLE project_workers
ADD role ROLE NOT NULL DEFAULT 'user';

ALTER TYPE ROLE ADD VALUE 'owner';

ALTER TABLE tasks
ADD created_on DATE NOT NULL,
ADD planned_end_date DATE NOT NULL,
DROP status,
ADD status TASK_STATUS NOT NULL DEFAULT 'to do';

ALTER TABLE project_workers
DROP id,
ADD CONSTRAINT project_workers_pKey PRIMARY KEY (user_id, project_id);
