import React from 'react';
import { contents } from '../../../utils/content';
import tomatto_garden_2 from '../../../assets/img/tomat_landingpage.png';
import RefrencePage from '../landingpages/RefrencePage';
import AlgoritmaCnn from '../landingpages/AlgoritmaCnn';

function AboutPage() {
	return (
		<div>
			<div>
                <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400'>
                    <div className='justify-center items-center flex flex-col min-h-screen'>
                        <section className='lg:flex py-10 container mx-auto gap-20 '>
                            <div className='w-1/2 py-5 rounded-lg'>
                                <div className='mt-24'>
                                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-left">
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
            </div>
		</div>
	)
}

export default AboutPage
