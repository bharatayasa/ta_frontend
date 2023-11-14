import React from 'react';
import HeroImage from '../../../assets/img/kebun_tomat.png';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-h-screen flex justify-center items-center">
            <div className="container mx-auto py-10 mt-5 lg:mt-0">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="lg:w-1/2 lg:text-left lg:pl-12">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            <span className='text-sky-900'>Ketahui</span><br /> <span className="text-emerald-900">Penyakit Tomatmu</span> <br /><span className='text-sky-900'>bersama kami</span>
                        </h1>
                        <p className="mb-4 text-lg text-sky-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quibusdam nam cumque excepturi qui dicta!</p>
                        <div className="flex flex-col lg:flex-row">
                            <button className="text-lg lg:text-xl text-white bg-sky-400 px-6 py-3 rounded-lg mb-3 lg:mb-0 lg:mr-3 transition duration-300 hover:bg-sky-500 shadow-md">Tutorial Prediksi</button>
                            <button className="text-lg lg:text-xl text-white bg-emerald-400 px-6 py-3 rounded-lg mb-3 lg:mb-0 lg:mr-3 transition duration-300 hover:bg-emerald-500 shadow-md"><Link to="/predict"><span>Prediksi Sekarang</span></Link></button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 pt-5 lg:pt-0">
                        <img className="w-full" src={HeroImage} alt="Hero" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
