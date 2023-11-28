import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import showing from "../../assets/password/show.svg"
import hide from "../../assets/password/hide.svg"
import { Input } from "@material-tailwind/react";

const AddUserInput = ({ adduser }) => {
    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    });

    const modalRef = useRef();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert("Password dan Confirm Password harus sama");
            return;
        }
        adduser(userData);
        handleClose();
    };

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowPassword2 = () => setShowPassword2(!showPassword2);

    return (
        <div>
            <button onClick={handleShow} className="text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3">
                <div className='flex justify-between'>
                    <div className='mr-2'>
                        Tambah User
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                    </svg>
                    </div>
                </div>
            </button>

            {show && (
                <div className="fixed inset-0 mt-20 " onClick={handleOutsideClick}>
                    <div className="text-center pb-10">

                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-slate-600/30 backdrop-blur-sm"></div>
                        </div>

                        <div ref={modalRef} className="inline-block rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white/40 backdrop-blur-sm pt-4 sm:px-6 sm:pb-4 px-10 py-6">
                                <h3 className="text-center lg:text-2xl md:text-xl text-md font-semibold text-sky-900">Tambah Data User</h3>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                                    <div>
                                        <Input label="Username" name="username" type='text' id="username" value={userData.username} onChange={handleChange} autoComplete="off" className='bg-white/25 backdrop-blur-xl shadow-lg'/>
                                    </div>

                                    <div>
                                        <Input label="Name" name="name" type='text' id="name" value={userData.name} onChange={handleChange} autoComplete="off" className='bg-white/25 backdrop-blur-xl shadow-lg'/>
                                    </div>

                                    <div>
                                        <Input label="E-Mail" name="email" type='enail' id="emial" value={userData.email} onChange={handleChange} autoComplete="off" className='bg-white/25 backdrop-blur-xl shadow-lg'/>
                                    </div>

                                    <div style={{ position: 'relative' }}>
                                        <Input label="Password" type={showPassword ? 'text' : 'password'} name="password" id="password" value={userData.password} onChange={handleChange} autoComplete="off" className='bg-white/25 backdrop-blur-xl shadow-lg'/>
                                        <button type="button" onClick={toggleShowPassword} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} className='text-sm text-blue-400' >
                                            {showPassword ?
                                                <img src={showing} alt="Show Password" className="h-5 w-5" /> :
                                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                                            }
                                        </button>
                                    </div>

                                    <div style={{ marginTop: '20px', position: 'relative' }}>
                                        <Input label='Confirm Password' type={showPassword2 ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" value={userData.confirmPassword} onChange={handleChange} autoComplete="off" className='bg-white/25 backdrop-blur-xl shadow-lg'/>
                                        <button type="button" onClick={toggleShowPassword2} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} className='text-sm text-blue-400' >
                                            {showPassword2 ?
                                                <img src={showing} alt="Show Password" className="h-5 w-5" /> :
                                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                                            }
                                        </button>
                                    </div>

                                    <div>
                                        <select id="role" name="role" value={userData.role} onChange={handleChange} autoComplete="off" className='bg-white/25 backdrop-blur-xl shadow-lg w-full rounded-lg py-2 px-3'>
                                            <option value="">Pilih Role</option>
                                            <option value="admin">Admin</option>
                                            <option value="petani">Petani</option>
                                        </select>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button type="submit" className="text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md">
                                            Simpan
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

AddUserInput.propTypes = {
    adduser: PropTypes.func.isRequired,
};

export default AddUserInput;
