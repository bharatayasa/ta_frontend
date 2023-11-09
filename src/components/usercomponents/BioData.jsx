import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { getUserLogged } from '../../utils/api';

export default function BioDataModal() {
    const [isOpen, setIsOpen] = useState(false);
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

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

return (
    <div>
        <div className="flex items-center justify-center">
            <button type="button" onClick={openModal} className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                Data Diri
            </button>
        </div>

        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                <div className="min-h-screen px-4 text-center mt-20">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="inline-block align-middle p-6 my-8 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div>
                        <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                            Data Diri
                        </Dialog.Title>
                        <div className="mt-4">
                            <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Username:
                            </label>
                            <span className="text-lg font-semibold text-gray-900 ml-2">
                                {userData.username}
                            </span>
                            </div>
                            <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Name:
                            </label>
                            <span className="text-lg font-semibold text-gray-900 ml-2">
                                {userData.name}
                            </span>
                            </div>
                            <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email:
                            </label>
                            <span className="text-lg font-semibold text-gray-900 ml-2">
                                {userData.email}
                            </span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={closeModal} >
                                Tutup
                            </button>
                        </div>
                        </div>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </div>
    </div>
);
}
