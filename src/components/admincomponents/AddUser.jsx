import React from 'react';
import { adduser } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import AddUserInput from './AddUserInput.jsx';

function AddUser() {
    const navigate = useNavigate();

    async function onAddUserHandler(user) {
        await adduser(user);
        navigate('/');
        window.location.reload();
    }
    
    return (
        <AddUserInput adduser={onAddUserHandler}/>
    )
}

export default AddUser;
