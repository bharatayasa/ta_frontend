import React, { useState, useRef, useEffect } from 'react';
import BioDataModal from './BioData.jsx';
import EditProfile from './EditProfile.jsx';
import ChangePassword from './ChangePassword.jsx';

const UserProfile = () => {
    const [show, setShow] = useState(false);
    const modalRef = useRef();

    const handleShow = () => {
        setShow(true);
        document.body.style.overflow = 'hidden';
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
                <button
                    onClick={handleShow}
                    className="text-lg text-white bg-sky-400 px-2 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md lg:mr-2 sm:mr-0 sm:mb-2 lg:mb-0">
                    My Profile
                </button>
            </div>

            {show && (
                <div className="fixed inset-0 mt-20" onClick={handleClose}>
                    <div className="text-center pb-10">
                        <div ref={modalRef} className="inline-block rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full bg-emerald-500/25">
                            <div className="pt-4 sm:p-6 sm:pb-4">
                                <div className="w-full max-w-md px-2 sm:px-0">
                                    <div className="flex space-x-1 rounded-lg">
                                        <button
                                            className={`w-full text-sky-900 rounded-lg py-2.5 text-sm font-medium ${
                                                selectedTab === 0
                                                    ? 'bg-emerald-400 shadow font-semibold'
                                                    : 'hover:bg-emerald-400 hover:text-white font-semibold'
                                            }`}
                                            onClick={() => setSelectedTab(0)}
                                        >
                                            Bio Data
                                        </button>
                                        <button
                                            className={`w-full text-sky-900 rounded-lg py-2.5 text-sm font-medium ${
                                                selectedTab === 1
                                                    ? 'bg-emerald-400 shadow font-semibold'
                                                    : 'hover:bg-emerald-400 hover:text-white font-semibold'
                                            }`}
                                            onClick={() => setSelectedTab(1)}
                                        >
                                            Ubah Biodata
                                        </button>
                                        <button
                                            className={`w-full text-sky-900 rounded-lg py-2.5 text-sm font-medium ${
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
