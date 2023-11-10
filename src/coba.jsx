import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DeleteButton from "../DeleteButton";
import moment from 'moment';

function AllPredictList({ savepredict, onDelete }) {
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
        {/*  */}
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg table-fixed">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr className="text-center">
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            No
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            User Id
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            Kelas
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            Confidence
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            Prevention
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            Created at
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                            Aksi
                        </th>
                    </tr>
                    </thead>
                    
                    <tbody className=" bg-white divide-y divide-gray-200">
                    {savepredict.map((predict, index) => (
                        <tr key={predict.id} className="hover:bg-slate-100 hover:shadow-md transition duration-200 ease-in-out">
                        <td className="text-center">
                            <b>{lastIndex + index + 1}</b>
                        </td>

						<td className="text-center">
							{predict.id}
						</td>

                        <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className=" text-gray-900">{predict.userId}</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className=" text-gray-900">{predict.kelas}</div>
                        </td>

						<td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className=" text-gray-900">{predict.confidence}</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 text-center table-fixed">
                            <button>
                                <details className="border rounded-lg px-6 py-3 shadow-sm transition duration-300 ease-in-out">
                                    <p className="overflow-x-hidden whitespace-normal text-justify">
                                        {predict.description}
                                    </p>
                                </details>
                            </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900 text-center">
                            <button>
                                <details className="border rounded-lg px-6 py-3 shadow-sm">
                                    <p className="overflow-x-hidden whitespace-normal text-justify">
                                        {predict.prevention}
                                    </p>
                                </details>
                            </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-center">
                            {moment(predict.created_at).format('DD MMMM YYYY')}
                        </td>
                        <td className="whitespace-nowrap font-medium text-center">
							<div className="flex justify-evenly">
								<div>
                                    <DeleteButton id={predict.id} onDelete={onDelete} />
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
            {savepredict.length > usersPerPage && (
                                <div className="mt-4 flex justify-center">
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                        className='text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3 mr-2'
                                    >
                                        Sebelumnya
                                    </button>
                                    <button
                                        onClick={handleNextPage}
                                        disabled={currentPredict.length < usersPerPage}
                                        className='text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3 ml-2'
                                    >
                                        Berikutnya
                                    </button>
                                </div>
                            )}
            </div>
        </div>
        {/*  */}
        </div>
    );
}

AllPredictList.propTypes = {
    savepredict: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        kelas: PropTypes.string.isRequired,
        confidence: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        prevention: PropTypes.string.isRequired,
        userId: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AllPredictList;
