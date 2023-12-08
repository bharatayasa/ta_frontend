import React from 'react';
import { contents } from '../../../utils/content';
import tomatto_garden_2 from '../../../assets/img/tomat_landingpage.png';
import RefrencePage from '../landingpages/RefrencePage';
import AlgoritmaCnn from '../landingpages/AlgoritmaCnn';
import DeploymentPage from '../landingpages/DeploymentPage';

function AboutPage() {
	return (
        <div>
            <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400'>
                <div className='items-center flex min-h-screen'>                        <section className='lg:flex lg:py-10 container lg:px-0 lg:mx-auto lg:gap-20 px-10'>

                    <div className='lg:w-1/2 py-5 rounded-lg'>
                        <div className='mt-24 items-center'>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:text-left">
                                <span className='text-sky-900'>Ketahui<br />Penyakit Tomatmu<br />Bersama Tomatify</span>
                            </h1>
                            <p className='text-justify text-slate-600'>
                                {contents[0].loginContent}
                            </p>
                        </div>
                    </div>

                            <div>
                                <div className='w-full'>
                                    <img src={tomatto_garden_2} alt="tomato" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div><RefrencePage /></div>
                <div><AlgoritmaCnn /></div>
                <div><DeploymentPage /></div>
            </div>
	)
}

export default AboutPage
