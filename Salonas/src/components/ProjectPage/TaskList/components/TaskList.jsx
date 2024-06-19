import { Task } from "./Task";
import { EditTask } from "./EditTaskForm";
import { EditTaskStatus } from "./EditTaskStatusForm";
import { CreateTask } from "./CreateTaskForm";
import { ViewTask } from "./ViewTaskForm";
import '../../../css/Table.css';
import { useTasks } from "../hooks/useTasks";

export const TaskList = ({ isAdminOrOwner }) => {

    const { tasks, showCreateForm, showUpdateForm, showUpdateStatusForm, showViewForm, OpenCreateForm } = useTasks();

    return <div>
        {showUpdateForm && <EditTask />}
        {showUpdateStatusForm && <EditTaskStatus />}
        {showCreateForm && <CreateTask />}
        {showViewForm && <ViewTask />}

        <div>
            <h1 className="table-header">Procedūros</h1>
        </div>

        <table className="table">
            <thead>
                <tr>
                    <th>Vardas</th>
                    <th>Pavardė</th>
                    <th>Vartotojas</th>
                    <th className="expand">Procedūra</th>

                    <th>Būsena</th>
                    <th>Pageidaujamas laikas</th>
                    <th>Laikas</th>

                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody className='table-column'>
                {tasks.map((value) => <Task task={value} isAdminOrOwner={isAdminOrOwner} key={value.id} />)}
            </tbody>
            {isAdminOrOwner && <button className="btn btn-new-task" onClick={OpenCreateForm}>Registruoti vizitą</button>}
        </table>

        
    </div>;
}