import React, { useState, useEffect } from 'react';
import { getUserLogged } from '../../utils/api';
import { List } from "@material-tailwind/react";

export default function BioDataModal() {
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getUserLogged();
                setUserData({
                    username: data.username || '',
                    name: data.name || '',
                    email: data.email || '',
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mt-4'>
            <h1 className='text-xl font-semibold text-sky-900 text-center'>My Biodata</h1>
            <form>
                <div className='mx-auto mb-5'>
                    <List>
                        <span className='text-sm -mb-7 font-semibold opacity-70'>username : </span>
                        <div className='pt-5 pb-1 text-xl font-semibold text-sky-900'>{userData.username}</div>
                        <hr/>
                        <span className='text-sm -mb-7 font-semibold opacity-70'>name : </span>
                        <div className='pt-5 pb-1 text-xl font-semibold text-sky-900'>{userData.name}</div>
                        <hr />
                        <span className='text-sm -mb-7 font-semibold opacity-70'>e-mail : </span>
                        <div className='pt-5 pb-1 text-xl font-semibold text-sky-900 mb-1'>{userData.email}</div>
                    </List>
                </div>
            </form>
        </div>
    );
}
