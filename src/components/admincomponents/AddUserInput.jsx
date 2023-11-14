import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

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
                Tambah User
            </button>
            {show && (
                <div className="fixed inset-0 mt-20 " onClick={handleOutsideClick}>
                    <div className="text-center pb-10">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-slate-600 opacity-40"></div>
                        </div>

                        <div ref={modalRef} className="inline-block rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white/40 backdrop-blur-sm pt-4 sm:p-6 sm:pb-4">
                                <h3 className="text-center text-2xl font-semibold text-sky-900">Tambah Data User</h3>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <div>
                                        <label htmlFor="username" className="block text-lg text-sky-900 font-semibold">
                                            Username
                                        </label>
                                        <input type="text" name="username" id="username" value={userData.username} onChange={handleChange} className="w-full py-2 rounded-lg shadow-lg px-3 border-sky-900" placeholder="username" autoComplete="off" />
                                    </div>

                                    <div>
                                        <label htmlFor="name" className="block text-lg text-sky-900 font-semibold">
                                            Name
                                        </label>
                                        <input type="text" name="name" id="name" value={userData.name} onChange={handleChange} className="w-full py-2 rounded-lg shadow-lg px-3 border-sky-900" placeholder="name" autoComplete="off" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-lg text-sky-900 font-semibold">
                                            E-Mail
                                        </label>
                                        <input type="email" name="email" id="email" value={userData.email} onChange={handleChange} className="w-full py-2 rounded-lg shadow-lg px-3 border-sky-900" placeholder="e-mail" autoComplete="off" />
                                    </div>

                                    <div style={{ position: 'relative' }}>
                                        <label htmlFor="password" className="block text-lg text-sky-900 font-semibold">
                                            Password
                                        </label>
                                        <input type={showPassword ? 'text' : 'password'} name="password" id="password" value={userData.password} onChange={handleChange} className="w-full py-2 rounded-lg shadow-lg px-3 border-sky-900" placeholder="Password" autoComplete="off"/>
                                        <button type="button" onClick={toggleShowPassword} style={{ position: 'absolute', top: '70%', right: '10px', transform: 'translateY(-50%)' }} >
                                            {showPassword ? 'Hide' : 'Show'}
                                        </button>
                                    </div>

                                    <div style={{ marginTop: '20px', position: 'relative' }}>
                                        <label htmlFor="confirmPassword" className="block text-lg text-sky-900 font-semibold">
                                            Confirm Password
                                        </label>
                                        <input type={showPassword2 ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" value={userData.confirmPassword} onChange={handleChange} className="w-full py-2 rounded-lg shadow-lg px-3 border-sky-900" placeholder="Confirm Password" autoComplete="off" />
                                        <button type="button" onClick={toggleShowPassword2} style={{ position: 'absolute', top: '70%', right: '10px', transform: 'translateY(-50%)' }} >
                                            {showPassword2 ? 'Hide' : 'Show'}
                                        </button>
                                    </div>

                                    <div>
                                        <label htmlFor="role" className="block text-lg text-sky-900 font-semibold">Role</label>
                                        <select id="role" name="role" value={userData.role} onChange={handleChange} autoComplete="off" className="w-full py-2 rounded-lg shadow-lg px-3 border-sky-900" >
                                            <option value="">Pilih Role</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
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
