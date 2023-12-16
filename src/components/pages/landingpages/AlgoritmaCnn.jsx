import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import gambar1 from '../../../assets/cnn/1.png'
import gambar2 from '../../../assets/cnn/2.png'
import gambar3 from '../../../assets/cnn/3.png'
import gambar4 from '../../../assets/cnn/4.png'
import gambar5 from '../../../assets/cnn/5.png'
import gambar6 from '../../../assets/cnn/6.png'
import gambar7 from '../../../assets/cnn/7.png'
import gambar8 from '../../../assets/cnn/8.png'
import gambar9 from '../../../assets/cnn/9.png'
import gambar10 from '../../../assets/cnn/10.png'
import '../../../style/style2.css'
import { descCNN } from '../../../utils/descCNN'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

function AlgoritmaCnn() {
    return (
        <div>
            <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400'>
            <div className='items-center lg:pt-0 pt-16'>
                <div className='container mx-auto lg:flex gap-20 lg:items-center'>
                
                    <div className='lg:w-1/2'>
                        <div className='py-8 px-8 lg:px-0'>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-sky-900" data-aos="zoom-in-up">
                                Algoritma CNN
                            </h1>
                            <h1 className="text-xl lg:text-2xl font-bold text-sky-900 mt-5" data-aos="zoom-in-up">
                                Convolotional Neural Network
                            </h1>
                            <p className='text-justify text-slate-600' data-aos="zoom-in-up">
                                Convolutional Neural Network (CNN) adalah jenis arsitektur jaringan saraf tiruan yang dirancang khusus untuk memproses dan menganalisis data spasial, terutama gambar. CNN memiliki kemampuan untuk mengenali pola lokal dalam data dan mempertahankan struktur spasialnya
                            </p>
                        </div>
                    </div>

                    <div className='lg:min-h-screen lg:w-1/2 lg:mb-0 lg:px-0 px-8'>
                        <div data-aos="zoom-in-up">
                        <div>
                            <Swiper
                                slidesPerView={1}
                                centeredSlides={false}
                                slidesPerGroupSkip={1}
                                grabCursor={true}
                                keyboard={{
                                enabled: true,
                                }}
                                breakpoints={{
                                769: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                }}
                                scrollbar={false}
                                navigation={true}
                                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <div>
                                            <img src={gambar1} />
                                        </div>
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[0].description1}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar2} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[1].description2}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar3} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[2].description3}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar4} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[3].description4}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar5} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[4].description5}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar6} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[5].description6}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar7} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[6].description7}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar8} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[7].description8}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar9} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[8].description9}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='bg-gradient-to-br from-emerald-300/30 to-red-300/30 backdrop-blur-md rounded-lg mx-3 shadow-lg'>
                                        <img src={gambar10} />
                                    </div>
                                    <div className='mb-20'>
                                        <details className='mt-2 bg-white/40 rounded-lg py-4 px-4 mx-4 shadow-lg'>
                                            <div>
                                                <div className='px-4 py-4 overflow-auto max-h-40'>
                                                    <p className='text-justify text-sky-900'>
                                                        {descCNN[9].description10}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default AlgoritmaCnn
