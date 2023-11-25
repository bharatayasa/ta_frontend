import React from 'react'
import { contents } from '../../../utils/content'
import tomato_garden_1 from '../../../assets/img/tomato_1.png'
import tomatto_garden_2 from '../../../assets/img/tomato-2.png'

function LandingPage() {
    return (
        <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400'>
            <div className='justify-center items-center flex flex-col min-h-screen'>
                <section className='lg:flex py-10 container mx-auto'>

                    <div className='w-1/2  px-5 py-5 rounded-lg'>
                        <div className='mt-24'>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-sky-900">
                                Solusi Mudah <br/><span>Untuk mendeteksi <br/> penyakit tomat</span>
                            </h1>
                            <p className='text-justify text-slate-600'>
                                {contents[0].loginContent}
                            </p>
                            <div className='text-center mt-5 font-semibold text-lg text-sky-900'>
                                <button className='px-6 py-3 bg-emerald-400 rounded-md shadow-lg hover:bg-emerald-500 transition duration-200 ease-in-out hover:text-white'>Login</button>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2 '>
                        <div className='w-ful'>
                            <img src={tomatto_garden_2} alt="tomato"/>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default LandingPage
