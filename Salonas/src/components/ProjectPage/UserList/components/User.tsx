import React, { useCallback } from 'react'
import { useUsers } from '../hooks/useUsers'
import { useAuth } from "../../../../hooks/useAuth";

export const User = ({ user, isAdminOrOwner }) => {

    const auth = useAuth();
    const { DeletePWorker, UpdatePWorker, FetchUsers } = useUsers();

    const RemoveUser = useCallback(async () => {
        if (user.role === "owner") {
            // TODO Make good error dispalay
            alert("Cannot remove owner of the project");
        }

        const pWorker = {
            user_id: user.user_id,
            project_id: user.project_id
        }
        const [status] = await DeletePWorker(pWorker);
        if (status === 200) {
            FetchUsers();
        }
        else {
            // TODO Make good error dispalay
            alert("Error occured on the server");
        }

    }, [user]);


    const UpdateUserRole = useCallback(async () => {

        const updatePWorker = async (pWorker) => {
            const [status] = await UpdatePWorker(pWorker);
            if (status === 200) {
                FetchUsers();
            }
            else {
                // TODO Make good error dispalay
                alert("Error occured");
            }
        }

        switch (user.role) {
            case "admin": {
                const pWorker = {
                    role: "user",
                    user_id: user.user_id,
                    project_id: user.project_id
                }
                await updatePWorker(pWorker);
                break;
            }
            case "user": {
                const pWorker = {
                    role: "admin",
                    user_id: user.user_id,
                    project_id: user.project_id
                }
                await updatePWorker(pWorker);
                break;
            }
        }

    }, [user]);

    return (
        <tr >
            <td title={user.username}>
                {user.username}
            </td>
            <td title={user.role}>
                {user.role}
            </td>

            <td title="actions">
                {
                    isAdminOrOwner && user.role !== "owner" ?
                        <button className='action-button ' onClick={UpdateUserRole}>
                            {user.role === "user" ?
                                <>Promote</> : <>Demote</>}
                        </button> :
                        <></>
                }
                {
                    isAdminOrOwner && auth.user.username !== user.username ?
                        <button className='action-button 2' onClick={RemoveUser}>Pašalinti</button> : <></>
                }
                {
                    auth.user.username === user.username && user.role !== "owner" ?
                        <button className='action-button 3' onClick={RemoveUser}>Išeiti</button> : <></>
                }
            </td>

        </tr>
    )
}
