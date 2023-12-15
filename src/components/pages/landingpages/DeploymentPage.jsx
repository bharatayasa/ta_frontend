import React, { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import layananGCP from '../../../utils/layananGCP';
import prosespredict from '../../../assets/img/proses/proses.png';

function DeploymentPage() {
    const LayananGCPList = () => {
        return (
        <div className='bg-gradient-to-br from-red-300 via-yellow-200 to-emerald-400'>
            <div className='lg:flex container lg:mx-auto gap-10'>
                <div className='container lg:mx-auto lg:min-h-screen'>
                    <div className='mx-7 py-32'>
                    <h1 className='text-center text-2xl font-semibold text-sky-900 py-5' data-aos="zoom-in">Deployment</h1>
                    <p className='mb-4 text-lg text-sky-900 lg:text-center text-justify' data-aos="zoom-in">
                        Proses deployment menggunakan layanan cloud computing yang disediakan oleh Google Cloud Platform
                    </p>
                    {layananGCP.map((layanan) => (
                        <div key={layanan.id} className='mb-3'>
                        <Disclosure>
                            {({ open }) => (
                            <div data-aos="zoom-in">
                                <div className='container mx-auto rounded-lg bg-white/30 hover:bg-white/40 transition duration-200 ease-in-out backdrop-blur-lg mb-5'>
                                <Disclosure.Button className='flex w-full justify-between rounded-t-lg bg-emerald-400/40 px-2 py-4 font-medium hover:bg-emerald-500/40 focus:outline-none transition duration-300 ease-in-out shadow-md hover:shadow-xl \'>
                                    <div className='text-lg font-semibold text-sky-900 '>
                                        <span>{layanan.layanan}</span>
                                    </div>
                                    <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 to-black font-semibold transition duration-300 ease-in-out`} />
                                </Disclosure.Button>
                                <Transition as={Fragment} enter='transition ease-in-out duration-300 transform' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='transition ease-in-out duration-300 transform' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                                    <Disclosure.Panel className='px-4 pt-4 pb-2 transform origin-center'>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <img className="w-20 h-auto py-4" src={layanan.gambar} alt={layanan.layanan} />
                                        </div>
                                        <div className='text-justify'>
                                            <p>{layanan.deskripsi}</p>
                                        </div>
                                    </div>
                                    </Disclosure.Panel>
                                </Transition>
                                </div>
                            </div>
                            )}
                        </Disclosure>
                        </div>
                    ))}
                    </div>
                </div>

                <div className='container lg:mx-auto min-h-screen'>
                    <div className='mx-7 py-32'>
                        <h1 className='text-center text-2xl font-semibold text-sky-900 py-5' data-aos="zoom-in">Proses Prediksi</h1>
                        <p className='mb-4 text-lg text-sky-900 lg:text-center text-justify ' data-aos="zoom-in">Proses melakukan prediksi penyakit tanaman tomat di sistem ini, dapat dilihat pada gambar berikut:</p>
                        <div className='bg-gradient-to-tr from-emerald-300/30 to-red-300/20 backdrop-blur-md rounded-lg shadow-lg ' data-aos="zoom-in">
                            <img className='px-5 py-5' src={prosespredict} alt='Proses Prediksi' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    };

    return <LayananGCPList />;
}

export default DeploymentPage;
