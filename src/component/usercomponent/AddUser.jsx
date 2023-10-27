import React from 'react';
import { adduser } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import AddUserModal from './AddUserModal';

function AddUser() {
    const navigate = useNavigate();

    async function onAddUserHandler(user) {
        await adduser(user);
        navigate('/');
        window.location.reload();
    }
    
    return (
        <AddUserModal adduser={onAddUserHandler}/>
    )
}

export default AddUser;
