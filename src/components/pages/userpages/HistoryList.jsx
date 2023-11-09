import {React, Fragment} from "react";
import PropTypes from "prop-types";
import DeleteButton from "../../DeleteButton";
import moment from "moment";
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

function HistoryList({ savepredict, onDelete }) {
    return (
        <div className="">
        {savepredict.map((predict) => (
        <div className="">
            <div className="mx-auto rounded-xl bg-white/40 hover:bg-white/60 transition duration-200 ease-in-out backdrop-blur-lg mb-3">
                <Disclosure>
                {({ open }) => (
                    <div>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-emerald-300 px-2 py-4 font-medium hover:bg-emerald-500 focus:outline-none transition duration-300 ease-in-out shadow-md hover:shadow-xl">
                        <span>Tanggal : {moment(predict.created_at).format('DD MMMM YYYY')}</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 to-black font-semibold`}
                        />
                    </Disclosure.Button>
                    <Transition as={Fragment}
                            enter="transition ease-out duration-300"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                        <Disclosure.Panel className="px-4 pt-4 pb-2">
                            <div>
                                <p className="mb-2"><b>Jenis penyakit : </b>{predict.kelas}</p>
                                <p className="mb-2"><b>Confidence : </b>{predict.confidence}</p>
                                <p className="mb-2 text-justify"><b>Deskripsi : </b>{predict.description}</p>
                                <p className="mb-2 text-justify"><b>Penanganan :  </b>{predict.prevention}</p>
                            </div>
                            <div className="text-center mb-2 mt-3">
                                <DeleteButton id={predict.id} onDelete={onDelete}/>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                    </div>
                )}
                </Disclosure>
            </div>
        </div>
        ))}
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
            created_at: PropTypes.instanceOf(Date).isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default HistoryList;
