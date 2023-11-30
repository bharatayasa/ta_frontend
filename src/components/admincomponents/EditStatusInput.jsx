import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const EditStatusInput = (props) => {
	const [show, setShow] = useState(false);
	const [predictsData, setStatus] = useState({
		id: props.id || '',
        status: props.status || ''
    });
    
	const modalRef = useRef();

	const handleShow = () => {
		setShow(true);
	};

	const handleClose = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
		setShow(false);
		}
	};

	const handleFieldChange = (field, value) => {
        setStatus({ ...predictsData, [field]: value });
    };    

	const onSubmitEventHandler = (e) => {
		e.preventDefault();
		props.updateStatus(predictsData);
		setShow(false);
	};

	return (
		<div>
    <button onClick={handleShow} className="text-l text-white bg-emerald-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 transition duration-300 ease-in-out shadow-md">
        <div className='flex'>
            <div>
                Status
            </div>
            <div className='ml-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
            </div>
        </div>
    </button>

    {show && (
        <div className="fixed inset-0 mt-20" onClick={handleClose}>
            <div className="text-center pb-10">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-slate-600/30 backdrop-blur-sm"></div>
                </div>

                <div ref={modalRef} className="inline-block rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white/40 backdrop-blur-sm pt-4 sm:px-6 sm:pb-4 px-10 py-6">
                        <h3 className="text-center lg:text-2xl md:text-xl text-md font-semibold text-sky-900 mb-5">Ubah Status Prediksi</h3>
                        <form onSubmit={onSubmitEventHandler} className="space-y-5">

						<div className="flex items-center justify-center space-x-4">
							<label className="cursor-pointer flex items-center space-x-2">
								<input type="radio" name="status" value="aktif" checked={predictsData.status === 'aktif'} onChange={(e) => handleFieldChange('status', e.target.value)} className="w-6 h-6 text-emerald-400 focus:ring-emerald-500"/>
								<span className="text-lg text-emerald-400">Aktif</span>
							</label>

							<label className="cursor-pointer flex items-center space-x-2">
								<input type="radio" name="status" value="nonaktif" checked={predictsData.status === 'nonaktif'} onChange={(e) => handleFieldChange('status', e.target.value)} className="w-6 h-6 text-pink-400 focus:ring-pink-500"/>
								<span className="text-lg text-pink-400">Nonaktif</span>
							</label>
						</div>

                            <div className="text-center">
                                <button type="submit" className="text-l text-white bg-emerald-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 transition duration-300 ease-in-out shadow-md">
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>

	);
};

EditStatusInput.propTypes = {
    updateStatus: PropTypes.func.isRequired,
};

export default EditStatusInput;
