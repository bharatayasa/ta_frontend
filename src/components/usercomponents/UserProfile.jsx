import React, { useState, useRef, useEffect } from 'react';
import BioDataModal from './BioData.jsx';
import EditProfile from './EditProfile.jsx';
import ChangePassword from './ChangePassword.jsx';

const UserProfile = () => {
    const [show, setShow] = useState(false);
    const modalRef = useRef();

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setShow(false);
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div>
            <div>
                <button onClick={handleShow} className="text-lg text-white bg-sky-400 px-3 py-3 rounded-full hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md lg:mr-2 md:mr-2 sm:mr-2 sm:mb-2 lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {show && (
                <div className="fixed inset-0 mt-20" onClick={handleClose}>

                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 backdrop-blur-sm"></div>
                        </div>

                    <div className="text-center pb-10">
                        <div ref={modalRef} className="inline-block rounded-lg text-left overflow-auto shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full bg-white/40 backdrop-blur-sm hover:backdrop-blur-md transition duration-200 ease-in-out">
                            <div className="pt-4 sm:p-6 sm:pb-4">
                                <div className="w-full max-w-md px-2">

                                    <div className="flex justify-between rounded-lg bg-sky-400/30">
                                        <button
                                            className={`w-full text-sky-900 rounded-md py-2 px-5 text-xs font-medium m-1 transition duration-300 ease-in-out ${
                                                selectedTab === 0
                                                    ? 'bg-emerald-400 shadow font-semibold'
                                                    : 'hover:bg-emerald-400 hover:text-white font-semibold'
                                            }`}
                                            onClick={() => setSelectedTab(0)}
                                        >
                                            Bio Data
                                        </button>
                                        <button
                                            className={`w-full text-sky-900 rounded-md py-2 px-3 text-xs font-medium m-1 transition duration-300 ease-in-out ${
                                                selectedTab === 1
                                                    ? 'bg-emerald-400 shadow font-semibold'
                                                    : 'hover:bg-emerald-400 hover:text-white font-semibold'
                                            }`}
                                            onClick={() => setSelectedTab(1)}
                                        >
                                            Ubah Biodata
                                        </button>
                                        <button
                                            className={`lg:w-full text-sky-900 rounded-md py-2 px-2 text-xs font-medium m-1 transition duration-300 ease-in-out ${
                                                selectedTab === 2
                                                    ? 'bg-emerald-400 shadow font-semibold'
                                                    : 'hover:bg-emerald-400 hover:text-white font-semibold'
                                            }`}
                                            onClick={() => setSelectedTab(2)}
                                        >
                                            Ubah Password
                                        </button>
                                    </div>

                                    <div>
                                        {selectedTab === 0 && <BioDataModal />}
                                        {selectedTab === 1 && <EditProfile />}
                                        {selectedTab === 2 && <ChangePassword />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
