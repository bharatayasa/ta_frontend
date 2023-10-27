import React, {useState, useEffect} from 'react';
import { updateuser } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import EditButton from './EditButton';

import { getuserbyid } from '../../utils/api';

function EditUser() {
    const navigate = useNavigate();

    async function onEditUserHandler(user) {
        await updateuser(user);
        navigate('/');
        // window.location.reload();
    }

    const [user,setUser] = useState(null);
    
    useEffect(() => {
        async function fetchUser() {
            const userData = await getuserbyid(27);
            setUser(userData);
        }
        fetchUser();
    }, []);
    
    return (
        <div>
            <EditButton user={user} username={user.username} updateuser={onEditUserHandler}/>
        </div> 
    )
}

export default EditUser;
