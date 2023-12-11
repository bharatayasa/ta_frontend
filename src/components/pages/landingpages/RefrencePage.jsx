import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { contents } from '../../../utils/content';
import image1 from '../../../assets/dtaset/image1-removebg-preview.png'
import image2 from '../../../assets/dtaset/image2-removebg-preview.png'
import image3 from '../../../assets/dtaset/image4-removebg-preview.png'
import image4 from '../../../assets/dtaset/image6-removebg-preview.png'
import image5 from '../../../assets/dtaset/image7-removebg-preview.png'
import image6 from '../../../assets/dtaset/image8-removebg-preview.png'

function RefrencePage() {
    return (
        <div>
            <div className='bg-gradient-to-br from-red-300 via-yellow-200 to-emerald-400'>
                <div className='items-center'>
                <div className='container mx-auto lg:flex gap-20 lg:items-center'>

                    <div className='lg:min-h-screen lg:w-1/2 mb-10 lg:mb-0'>
                        <div data-aos="zoom-in-up">
                            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,}} pagination={true} modules={[EffectCoverflow, Pagination]} className="mySwiper">
                                <div>
                                    <SwiperSlide className='bg-gradient-to-tr from-emerald-300/30 to-red-300/30  backdrop-blur-md rounded-lg shadow-lg'>
                                        <img src={image1}/>
                                    </SwiperSlide>
                                    <SwiperSlide className='bg-gradient-to-tr from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg shadow-lg'>
                                        <img src={image2}/>
                                    </SwiperSlide>
                                    <SwiperSlide className='bg-gradient-to-tr from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg shadow-lg'>
                                        <img src={image3}/>
                                    </SwiperSlide>
                                    <SwiperSlide className='bg-gradient-to-tr from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg shadow-lg'>
                                        <img src={image4}/>
                                    </SwiperSlide>
                                    <SwiperSlide className='bg-gradient-to-tr from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg shadow-lg'>
                                        <img src={image5}/>
                                    </SwiperSlide>
                                    <SwiperSlide className='bg-gradient-to-tr from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg shadow-lg'>
                                        <img src={image6}/>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>

                    <div className='lg:w-1/2 mx-7'>
                        <div data-aos="zoom-in-up">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-sky-900">
                                Dataset <br /><span>Diperoleh Dari<br />Kagle.com</span>
                            </h1>
                            <p className='text-justify text-slate-600'>
                                {contents[4].machineLearning}
                            </p>
                            <h1 className="text-xl lg:text-2xl font-bold text-sky-900 mt-5">
                                16.000+ Dataset
                            </h1>
                            <p className='text-justify text-slate-600'>model dilatih dengan total 16.000 lebih dataset yang di peroleh dari kagle</p>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
}

export default RefrencePage
