import React from 'react';
import PropTypes from 'prop-types';

function UpdateStatus({ id, onUpdateStatus }) {
    const handleUpdate = () => {
            const isConfirmed = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (isConfirmed) {
            onUpdateStatus(id);
        }
    };

    return (
        <div>
            <button className='text-l text-white bg-pink-600 px-3 py-2 rounded-md hover:shadow-xl hover:bg-pink-700 transition duration-300 ease-in-out shadow-md' onClick={handleUpdate}>
                <div className='flex'>
                    <div>
                        Hapus
                    </div>
                    <div className='ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </button>
        </div>
    );
}

UpdateStatus.propTypes = {
    id: PropTypes.number.isRequired,
    onUpdateStatus: PropTypes.func.isRequired,
};

export default UpdateStatus;
