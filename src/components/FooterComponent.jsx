import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
return (
    <div className="py-5 bg-gray-200">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                <h3 className="font-bold text-2xl mb-3">Tomatify</h3>
                <p className="text-sm text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem cum tempora tempore? Distinctio, ab tempore a officiis explicabo velit iusto praesentium quidem, recusandae, ipsa architecto.</p>
                <div className="flex items-center mt-4">
                <Link to="#" className="flex items-center text-blue-500">
                    <i className="fab fa-whatsapp"></i>
                    <p className="ml-2">+6281999934616</p>
                </Link>
                </div>
                <div className="flex items-center mt-2">
                <Link to="#" className="flex items-center text-blue-500">
                    <i className="far fa-envelope"></i>
                    <p className="ml-2">bharatayasa40@gmail.com</p>
                </Link>
                </div>
            </div>

            <div className="col-span-1 lg:col-span-1">
                <h5 className="font-bold text-lg mb-3">Menu</h5>
                <Link to="/" className="block text-blue-500 mb-2">Home</Link>
                <Link to="/predict" className="block text-blue-500 mb-2">Predict</Link>
                <Link to="/history" className="block text-blue-500 mb-2">History</Link>
                <Link to="/about" className="block text-blue-500 mb-2">About</Link>
            </div>

            <div className="col-span-1 lg:col-span-1">
                <h1 className="text-xl font-bold mb-2">Find me</h1>   
                <div className="mt-4 lg:mt-0">
                <div className="flex gap-2">
                    <i className="fab fa-facebook text-blue-500"></i>
                    <i className="fab fa-instagram text-blue-500"></i>
                    <i className="fab fa-twitter text-blue-500"></i>
                    <i className="fab fa-linkedin text-blue-500"></i>
                    <i className="fab fa-youtube text-blue-500"></i>
                </div>
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
