import React, { useState } from "react";

export default function CustomAlert({ message, isSuccess }) {
    const [show, setShow] = useState(true);

    return (
        <div>
        {show && (
            <div className={`p-4 rounded-md shadow-md ${isSuccess ? 'bg-emerald-100 text-emerald-800 mt-3 mb-3' : 'bg-pink-100 text-pink-800'}`}>
                <div className="text-center font-semibold">
                    <p className="text-sky-900">{message}</p>
                </div>
                <div className="text-center mt-2">
                    <button className="px-4 py-2 bg-emerald-500 shadow-md hover:shadow-xl hover:bg-emerald-500 aniamtion duration-200 ease-in-out rounded-md text-white"  onClick={() => setShow(false)}>Tutup</button>
                </div>
            </div>
        )}
        </div>
    );
}
