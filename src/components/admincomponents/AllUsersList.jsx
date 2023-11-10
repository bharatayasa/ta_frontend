import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DeleteButton from "../DeleteButton";
import EditUser from "./EditUser";
import moment from "moment";

const AllUsersList = ({ users, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastIndex, setLastIndex] = useState(0);
    const usersPerPage = 10;

    useEffect(() => {
        setLastIndex((currentPage - 1) * usersPerPage);
    }, [currentPage, usersPerPage]);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    {/* Your table header */}
                                    <tr className="text-center">
                                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                            Id
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                            Username
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                            Role
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                            Created at
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                            Updated at
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currentUsers.map((user, index) => (
                                        <tr key={user.id} className="hover:bg-slate-100 hover:shadow-md transition duration-200 ease-in-out">
                                        <td className="text-center">
                                            <b>{lastIndex + index + 1}</b>
                                        </td>
            
                                        <td className="text-center">
                                            {user.id}
                                        </td>
            
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className=" font-medium text-gray-900">{user.username}</div>
                                                    <div className=" text-gray-500">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
            
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <div className="text-gray-900">{user.name}</div>
                                    </td>
            
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <div className="text-gray-900">{user.role}</div>
                                    </td>
            
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-center">
                                        {moment(user.created_at).format('DD MMMM YYYY')}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-center">
                                        {moment(user.updated_at).format('DD MMMM YYYY')}
                                    </td>
                                    <td className="whitespace-nowrap font-medium text-center">
                                        <div className="flex justify-evenly">
                                            <div>
                                                <EditUser user={user}/>
                                            </div>
                                            <div>
                                                <DeleteButton id={user.id} onDelete={onDelete} />
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div>
                    {users.length > usersPerPage && (
                        <div className="mt-4 flex justify-center">
                            <button onClick={handlePrevPage} disabled={currentPage === 1} className='text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3 mr-2'>
                                Sebelumnya
                            </button>
                            <button onClick={handleNextPage} disabled={currentUsers.length < usersPerPage} className='text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3 ml-2'>
                                Berikutnya
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

AllUsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired,
            updated_at: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AllUsersList;
