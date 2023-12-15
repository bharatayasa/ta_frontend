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
import '../../../style/style2.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

function AlgoritmaCnn() {
    return (
        <div>
            <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400'>
                <div className='items-center'>
                <div className='container mx-auto lg:flex gap-20 lg:items-center'>
                
                <div className='lg:w-1/2'>
                        <div className='py-8 px-8 lg:px-0'>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-sky-900" data-aos="zoom-in-up">
                                Algoritma CNN
                            </h1>
                            <h1 className="text-xl lg:text-2xl font-bold text-sky-900 mt-5" data-aos="zoom-in-up">
                                Convolotional Neural Network
                            </h1>
                            <p className='text-justify text-slate-600' data-aos="zoom-in-up">Convolutional Neural Network (CNN) adalah jenis arsitektur jaringan saraf tiruan yang dirancang khusus untuk memproses dan menganalisis data spasial, terutama gambar. CNN memiliki kemampuan untuk mengenali pola lokal dalam data dan mempertahankan struktur spasialnya</p>
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
                                scrollbar={true}
                                navigation={true}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                <SwiperSlide>
                                    <img src={gambar1} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={gambar2} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={gambar3} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={gambar4} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={gambar5} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={gambar6} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={gambar7} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={gambar8} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={gambar9} />
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
