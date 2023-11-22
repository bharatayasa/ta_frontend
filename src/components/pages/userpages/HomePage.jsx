import React from 'react';
import HeroImage from '../../../assets/img/kebun_tomat.png';
import { Link } from 'react-router-dom';
import TutorialPredict from '../../usercomponents/TutorialPredict';
import UserProfile from '../../usercomponents/UserProfile';
import { contents } from '../../../utils/content';

function HomePage() {
    return (
        <div className="bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400 min-h-screen flex justify-center items-center">
            <div className="container mx-auto py-10 mt-5 sm:mt-10 lg:mt-0">
                <div className="flex flex-col lg:flex-row items-center justify-center">

                    <div className="lg:w-1/2 lg:text-left lg:pl-12 mt-5">
                        <div className='px-5 lg:px-0'>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                                <span className='text-sky-900'>Ketahui<br />Penyakit Tomatmu<br />bersama kami</span>
                            </h1>
                            <p className="mb-4 text-lg text-sky-900">
                                {contents[1].homeContent}
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row px-10 lg:px-0 text-center">
                            <div className='mb-3'>
                                <UserProfile />
                            </div>
                            <div>
                                <button className="text-lg lg:text-xl text-white bg-emerald-400 px-6 py-3 rounded-lg mb-3 lg:mb-0 lg:mr-3 transition duration-300 hover:bg-emerald-500 shadow-lg"><Link to="/predict"><span>Prediksi Sekarang</span></Link></button>
                            </div>
                            <div>
                                <TutorialPredict />
                            </div>
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
