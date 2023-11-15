import { React, Fragment, useState } from "react";
import PropTypes from "prop-types";
import DeleteButton from "../../DeleteButton.jsx";
import moment from "moment";
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

function HistoryList({ savepredict, onDelete }) {
    const [visibleItems, setVisibleItems] = useState(5);

    const handleLoadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
    };

    const sortedSavepredict = savepredict.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });

    return (
        <div className="px-6 lg:px-0">
            {sortedSavepredict.slice(0, visibleItems).map((predict) => (
                <div key={predict.id}>
                    <div className="container mx-auto rounded-lg bg-white/40 hover:bg-white/60 transition duration-200 ease-in-out backdrop-blur-lg mb-3">
                        <Disclosure>
                            {({ open }) => (
                                <div>
                                    <div>
                                <Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-emerald-400 px-2 py-4 font-medium hover:bg-emerald-500 focus:outline-none transition duration-300 ease-in-out shadow-md hover:shadow-xl">
                                    <span>Tanggal : {moment(predict.created_at).format('DD MMMM YYYY')}</span>
                                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 to-black font-semibold transition duration-300 ease-in-out`} />
                                </Disclosure.Button>

                                <Transition as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in-out duration-300 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 transform origin-center">
                                        <div>
                                            <p className="mb-2"><b className="text-sky-900">Jenis penyakit : </b>{predict.kelas}</p>
                                            <p className="mb-2"><b className="text-sky-900">Confidence : </b>{predict.confidence}</p>
                                            <p className="mb-2 text-justify leading-relaxed font"><b className="text-sky-900">Deskripsi : </b><br />{predict.description}</p>
                                            <p className="mb-2 text-justify leading-relaxed"><b className="text-sky-900">Penanganan :  </b><br />{predict.prevention}</p>
                                        </div>
                                        <div className="text-center mb-2 mt-3">
                                            <DeleteButton id={predict.id} onDelete={onDelete} />
                                        </div>
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                                </div>
                            )}
                        </Disclosure>
                    </div>
                </div>
            ))}
            {sortedSavepredict.length > visibleItems && (
                <div className="text-center py-5">
                    <button className="text-lg text-white bg-sky-400 px-4 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-lg" onClick={handleLoadMore}>
                        <div className="flex">
                            <div className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                Load More
                            </div>
                            <div className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}

HistoryList.propTypes = {
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

export default HistoryList;
