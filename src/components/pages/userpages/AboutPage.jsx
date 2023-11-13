import React from "react";

function AboutPage() {
    return(
        <div className='bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-h-screen flex flex-col justify-center items-center'>
            <div className="py-5 min-vh-100 container mx-auto">
                <h1>ini halaman About</h1>
                <p>website ini dibangun dengan menggunakan teknologi machine learning dengan dataset yang di proleh dari kagle</p>
                <p>dengan akurasi dari machine learning model yang mencapai 92%</p>
            </div>
        </div>
    )
}

export default AboutPage;
