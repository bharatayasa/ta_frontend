import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
return (
    <div className="py-5 bg-gradient-to-br from-white via-white to-emerald-200">
        <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <h3 className="text-xl mb-3 font-semibold">Tomatify</h3>
                    <p className="text-sm text-sky-900 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem cum tempora tempore? Distinctio, ab tempore a officiis explicabo velit iusto praesentium quidem, recusandae, ipsa architecto.</p>
                    <div className="flex items-center mt-4 font-semibold">
                    <Link to="https://api.whatsapp.com/send?phone=6281999934616" className="flex items-center text-sky-900 hover:text-emerald-500 transition duration-200 ease-in-out" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                        <p className="ml-2">+6281999934616</p>
                    </Link>
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
                    <div className='font-semibold'>
                        <Link to="/" className="block text-sky-900 mb-2 hover:text-emerald-500 transition duration-200 ease-in-out">Home</Link>
                        <Link to="/predict" className="block text-sky-900 mb-2 hover:text-emerald-500 transition duration-200 ease-in-out">Predict</Link>
                        <Link to="/history" className="block text-sky-900 mb-2 hover:text-emerald-500 transition duration-200 ease-in-out">History</Link>
                        <Link to="/about" className="block text-sky-900 mb-2 hover:text-emerald-500 transition duration-200 ease-in-out">About</Link>
                    </div>
                </div>

                <div className="col-span-1 text-center">
                    <h1 className="text-xl font-bold">Find me</h1>
                    <div className="mt-5 text-sky-900">
                        <Link to={'https://www.instagram.com/bharatayasa/'} target="_blank" rel="noopener noreferrer">
                            <div className="fab fa-instagram fa-2xl px-2 py-2 hover:text-emerald-500 transition duration-200 ease-in-out"></div>
                        </Link>
                        <Link to={'https://www.tiktok.com/@sadahnyem?is_from_webapp=1&sender_device=pc'} target="_blank" rel="noopener noreferrer">
                            <div className="fab fa-tiktok fa-2xl px-2 py-2 hover:text-emerald-500 transition duration-200 ease-in-out"></div>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/wayan-bharata-897a20261/'} target="_blank" rel="noopener noreferrer">
                            <div className="fab fa-linkedin fa-2xl px-2 py-2 hover:text-emerald-500 transition duration-200 ease-in-out"></div>
                        </Link>
                        <Link to={'https://github.com/bharatayasa'} target="_blank" rel="noopener noreferrer">
                            <div className="fab fa-github fa-2xl px-2 py-2 hover:text-emerald-500 transition duration-200 ease-in-out"></div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6">
            <p className="text-gray-600">&copy; copyright {new Date().getFullYear()} by <span className="font-bold">Bharata,</span>  All rights reserved</p>
            </div>
        </div>
    </div>
);
};

export default FooterComponent;
