import React from 'react'
import { useUsers } from '../hooks/useUsers'
import { User } from './User';
import { CreateUserForm } from "./CreateUserForm"

export const UserList = ({ isAdminOrOwner, project_id }) => {

    const { users, OpenCreatePWorkerForm, showCreatePWorkerForm } = useUsers();

    return (
        <div>
            {
                showCreatePWorkerForm && isAdminOrOwner &&
                < CreateUserForm project_id={project_id} />
            }
            <div>
            <h1 className="table-header">Klientai</h1>
        </div>
            <table className='table'>

                <thead>
                    <tr >
                        <th>Vardas</th>
                        <th>Vartotojas</th>
                        <th>Laikas</th>
                    </tr>
                </thead>
                <tbody className='table-column'>
                    {users.map((value) => <User key={value.user_id} user={value} isAdminOrOwner={isAdminOrOwner}></User>)}
                </tbody>
                <div>{
                isAdminOrOwner &&
                <button  className='btn btn-new-task' onClick={OpenCreatePWorkerForm}>Naujas klientas</button>
            }</div>
            </table>

            

        </div>
    )
}
