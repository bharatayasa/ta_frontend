import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../DeleteButton';
import EditStatus from './EditStatus';
import moment from 'moment';

const AllPredictList = ({ savepredict, onDelete, onUpdateStatus }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastIndex, setLastIndex] = useState(0);
    const predictsPerPage = 10;

    useEffect(() => {
        setLastIndex((currentPage - 1) * predictsPerPage);
    }, [currentPage, predictsPerPage]);

    const indexOfLastPredict = currentPage * predictsPerPage;
    const indexOfFirstPredict = indexOfLastPredict - predictsPerPage;
    const currentPredict = savepredict.slice(indexOfFirstPredict, indexOfLastPredict);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-10">
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
                                        Kelas & Confidence
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                        Prevention
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                        Prediced at
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider" >
                                        Aksi
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currentPredict.map((predict, index) => (
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

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className=" text-gray-900">{predict.kelas}</div>
                                            <div className=" text-gray-600">{predict.confidence}</div>
                                        </td>

                                        <td className="px-2 py-4 whitespace-nowrap text-gray-900 text-center table-fixed">
                                            <button>
                                                <details className="border rounded-lg px-3 py-3 shadow-sm transition duration-300 ease-in-out">
                                                    <p className="overflow-x-hidden whitespace-normal text-justify">
                                                        {predict.description}
                                                    </p>
                                                </details>
                                            </button>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-gray-900 text-center">
                                            <button>
                                                <details className="border rounded-lg px-3 py-3 shadow-sm">
                                                    <p className="overflow-x-hidden whitespace-normal text-justify">
                                                        {predict.prevention}
                                                    </p>
                                                </details>
                                            </button>
                                        </td>
                                        <td className={`px-6 py-4 whitespace-nowrap text-center font-semibold ${predict.status === 'aktif' ? 'text-emerald-500' : 'text-pink-500'}`}>
                                            <p className="overflow-x-hidden whitespace-normal text-justify">
                                                {predict.status}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-center">
                                            {moment(predict.created_at).format('DD MMMM YYYY')}
                                        </td>
                                        <td className="whitespace-nowrap font-medium">
                                            <div className="flex justify-evenly gap-2">
                                                <div>
                                                    <EditStatus id={predict} onUpdateStatus={onUpdateStatus}/>
                                                </div>
                                                <div>
                                                    <DeleteButton id={predict.id} onDelete={onDelete}/>
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
                    {savepredict.length > predictsPerPage && (
                        <div className="mt-4 flex justify-center">
                            <button onClick={handlePrevPage} disabled={currentPage === 1} className='text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3 mr-2'>
                                <div className="flex">
                                    <div className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                                        </svg>
                                    </div>
                                    <div>
                                        Sebelumnya
                                    </div>
                                </div>
                            </button>
                            <button onClick={handleNextPage} disabled={currentPredict.length < predictsPerPage} className='text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3 ml-2' >
                                <div className="flex">
                                    <div className="mr-2">
                                        Berikutnya
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

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
    onUpdateStatus: PropTypes.func.isRequired,
};

export default AllPredictList;
