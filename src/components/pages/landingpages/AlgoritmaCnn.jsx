import React from 'react';
import konvolusi from '../../../assets/cnn/1.2.png'

function AlgoritmaCnn() {
    return (
        <div>
            <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400'>
                <div className='container lg:mx-auto'>
                    <div className='py-32'>
                        <div className='flex justify-center mb-5'>
                            <h1 className='bg-white lg:w-1/2 text-center'>yang sebelah sini belum selesai. masih proses desain struktur algoritma CNN supaya lebih menarik</h1>
                        </div>
                        <div className='flex justify-center mb-5'>
                            {/* <img src={konvolusi} /> */}
                        </div>

                        <div className='flex gap-5'>
                            <div className='min-h-screen w-1/2'>
                                <div className='bg-white text-center'>
                                    <h1>Kiri</h1>
                                </div>
                            </div>
                            <div className='min-h-screen w-1/2 text-center'>
                                <div className='bg-white'>
                                    <h1>Kanan</h1>
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
