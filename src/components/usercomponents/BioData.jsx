import React, { useState, useEffect } from 'react';
import { getUserLogged } from '../../utils/api';

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
            <h1 className='text-xl font-semibold text-sky-900 text-center'>Biodata</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-bold mb-2 text-sky-900">Username:</label>
                    <input type="text" id="username" value={userData.username} className="block w-full border border-gray-300 rounded py-2 px-3" readOnly />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2 text-sky-900">Name:</label>
                    <input type="text" id="name" value={userData.name} className="block w-full border border-gray-300 rounded py-2 px-3" readOnly />
                </div>
                <div className="mb-16">
                    <label htmlFor="email" className="block text-sm font-bold mb-2 text-sky-900">Email:</label>
                    <input type="email" id="email" value={userData.email} className="block w-full border border-gray-300 rounded py-2 px-3" readOnly />
                </div>
            </form>
        </div>
    );
}
