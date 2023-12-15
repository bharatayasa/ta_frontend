import React from 'react'
import { Link } from "react-scroll";
import { contents } from '../../../utils/content';

function FooterLandingPage() {
    return (
        <div className="py-5 bg-gradient-to-br from-white via-white to-emerald-200">
        <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <h3 className="text-xl mb-3 font-semibold text-center">Tomatify</h3>
                    <p className="text-sm text-sky-900 text-justify">
                        {contents[2].footerContent}
                    </p>
                    <div className="flex items-center mt-4 font-semibold">
                    <a href="https://api.whatsapp.com/send?phone=6281999934616" className="flex items-center text-sky-900 hover:text-emerald-500 transition duration-200 ease-in-out" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                        <p className="ml-2">+6281999934616</p>
                    </a>
                    </div>
                    <div className="flex items-center mt-2 font-semibold ">
                    <Link to="#" className="flex items-center text-sky-900 hover:text-emerald-500 transition duration-200 ease-in-out">
                        <i className="far fa-envelope"></i>
                        <p className="ml-2">bharatayasa40@gmail.com</p>
                    </Link>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-1 text-center">
                    <h5 className="font-bold text-xl mb-3">Menu</h5>
                    <div className='font-semibold flex justify-center gap-5'>
                        <Link activeClass="active" smooth spy to="/about" className="block text-sky-900 mb-2 hover:text-emerald-500 transition duration-200 ease-in-out cursor-pointer transform hover:scale-105">About</Link>
                        <Link activeClass="active" smooth spy to="/dataset" className="block text-sky-900 mb-2 hover:text-emerald-500 transition duration-200 ease-in-out cursor-pointer transform hover:scale-105">Dataset</Link>
                        <Link activeClass="active" smooth spy to="/algoritma" className="block text-sky-900 mb-2 hover:text-emerald-500 transition duration-200 ease-in-out cursor-pointer transform hover:scale-105">Algoritma</Link>
                        <Link activeClass="active" smooth spy to="/deployment" className="block text-sky-900 mb-2 hover:text-emerald-500 transition duration-200 ease-in-out cursor-pointer transform hover:scale-105">Deployment</Link>
                    </div>

                </div>
                <div className="col-span-1 text-center">
                    <h1 className="text-xl font-bold">Find me</h1>
                    <div className="mt-5 text-sky-900">
                        <a href={'https://www.instagram.com/bharatayasa/'} target="_blank" rel="noopener noreferrer">
                            <div className="fab fa-instagram fa-2xl px-2 py-2 hover:text-emerald-500 transition duration-200 ease-in-out"></div>
                        </a>
                        <a href={'https://www.tiktok.com/@sadahnyem?is_from_webapp=1&sender_device=pc'} target="_blank" rel="noopener noreferrer">
                            <div className="fab fa-tiktok fa-2xl px-2 py-2 hover:text-emerald-500 transition duration-200 ease-in-out"></div>
                        </a>
                        <a href={'https://www.linkedin.com/in/wayan-bharata-897a20261/'} target="_blank" rel="noopener noreferrer">
                            <div className="fab fa-linkedin fa-2xl px-2 py-2 hover:text-emerald-500 transition duration-200 ease-in-out"></div>
                        </a>
                        <a href={'https://github.com/bharatayasa'} target="_blank" rel="noopener noreferrer">
                            <div className="fab fa-github fa-2xl px-2 py-2 hover:text-emerald-500 transition duration-200 ease-in-out"></div>
                        </a>
                    </div>

                </div>
            </div>

            <div className="text-center mt-6 text-sm">
                <p className="text-gray-600">&copy; copyright {new Date().getFullYear()} by <span className="font-bold">Bharata,</span>  All rights reserved</p>
            </div>
        </div>
    </div>
    )
}

export default FooterLandingPage
