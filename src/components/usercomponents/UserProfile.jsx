import React, { useState, useRef, useEffect } from 'react';
import { Tab } from '@headlessui/react';
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
                <button onClick={handleShow} className="text-l text-white bg-sky-400 px-2 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md lg:mr-2 sm:mr-0 sm:mb-2 lg:mb-0">
                    My Profile
                </button>
            </div>

            {show && (
                <div className="fixed inset-0 mt-16" onClick={handleClose}>
                    <div className="text-center pb-10">
                        <div ref={modalRef} className="inline-block rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white/40 backdrop-blur-sm pt-4 sm:p-6 sm:pb-4">
                                <div className='w-full max-w-md px-2 sm:px-0'>
                                <Tab.Group>
                                    <Tab.List className="flex space-x-1 rounded-lg bg-emerald-900/20 p-1">
                                        <Tab
                                            className={`w-full text-sky-900 rounded-lg py-2.5 text-sm font-medium ${
                                                selectedTab === 0
                                                    ? 'bg-emerald-400 shadow font-semibold'
                                                    : 'hover:bg-emerald-400 hover:text-white font-semibold'
                                            }`}
                                            onClick={() => setSelectedTab(0)}
                                        >
                                            Bio Data
                                        </Tab>
                                        <Tab
                                            className={`w-full text-sky-900 rounded-lg py-2.5 text-sm font-medium ${
                                                selectedTab === 1
                                                    ? 'bg-emerald-400 shadow font-semibold'
                                                    : 'hover:bg-emerald-400 hover:text-white font-semibold'
                                            }`}
                                            onClick={() => setSelectedTab(1)}
                                        >
                                            Ubah Biodata
                                        </Tab>
                                        <Tab
                                            className={`w-full text-sky-900 rounded-lg py-2.5 text-sm font-medium ${
                                                selectedTab === 2
                                                    ? 'bg-emerald-400 shadow font-semibold'
                                                    : 'hover:bg-emerald-400 hover:text-white font-semibold'
                                            }`}
                                            onClick={() => setSelectedTab(2)}
                                        >
                                            Ubah Password
                                        </Tab>
                                    </Tab.List>
                                    <Tab.Panels>
                                        <Tab.Panel>
                                            <BioDataModal />
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            <EditProfile />
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            <ChangePassword />
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
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
