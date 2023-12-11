import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';
import { Input } from "@material-tailwind/react";
import show from "../../assets/password/show.svg";
import hide from "../../assets/password/hide.svg";

const RegisterInput = ({ register }) => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const modalRef = useRef();

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setModalOpen(false);
        }
    };

    const onUsernameChange = (event) => {
        setFormData({
            ...formData,
            username: event.target.value,
        });
    }

    const onNameChange = (event) => {
        setFormData({
            ...formData,
            name: event.target.value,
        });
    }

    const onEmailChange = (event) => {
        setFormData({
            ...formData,
            email: event.target.value,
        });
    }

    const onPasswordChange = (event) => {
        setFormData({
            ...formData,
            password: event.target.value,
        });
    }

    const onConfirmPasswordChange = (event) => {
        setFormData({
            ...formData,
            confirmPassword: event.target.value,
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!formData.username || !formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            alert('Silakan isi semua field.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Password dan Confirm Password harus sama");
            return;
        }
        if (formData.username || formData.name || formData.email || formData.password || formData.confirmPassword) {
            alert("register berhasil, silahkan cek E-mail anda untuk melakukan verifikasi");
        }
        register({
            username: formData.username,
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });
        setModalOpen(false);
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3">
                Register
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 lg:mt-36" onClick={handleOutsideClick}>
                    <div className="flex items-center justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-slate-600/30 backdrop-blur-sm"></div>
                        </div>

                        <div ref={modalRef} className="inline-block align-bottom text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white/40 rounded-lg backdrop-blur-md" data-aos="zoom-in">
                            <form onSubmit={onSubmitHandler} className=" lg:px-5 px-10 pb-4 sm:p-6 sm:pb-4 animate__animated animate__fadeIn">
                                <div className='text-center text-2xl mb-3 font-semibold text-sky-900'>
                                    <h1>Register</h1>
                                </div>

                                <div className='mx-auto mb-5'>
                                    <Input type="text" variant="standard" label="Username" size="lg" value={formData.username} onChange={onUsernameChange}/>
                                </div>

                                <div className='mx-auto mb-5 relative'>
                                    <Input type="text" variant="standard" label="Name" size="lg" value={formData.name} onChange={onNameChange}/>
                                </div>

                                <div className='mx-auto mb-5 relative'>
                                    <Input type="email" variant="standard" label="E-Mail" size="lg" value={formData.email} onChange={onEmailChange}/>
                                </div>

                                <div className='mx-auto mb-5 relative'>
                                    <Input  type={showPassword ? "text" : "password"} variant="standard" label="Password" value={formData.password} onChange={onPasswordChange}/>
                                    <span onClick={toggleShowPassword} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
                                        {showPassword ?
                                            <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                            <img src={hide} alt="Hide Password" className="h-5 w-5" />
                                        }
                                    </span>
                                </div>

                                <div className='mx-auto mb-5 relative'>
                                    <Input  type={showPassword2 ? "text" : "password"} variant="standard" label="Confirm Password" value={formData.confirmPassword} onChange={onConfirmPasswordChange}/>
                                    <span onClick={toggleShowPassword2} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
                                        {showPassword2 ?
                                            <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                            <img src={hide} alt="Hide Password" className="h-5 w-5" />
                                        }
                                    </span>
                                </div>

                                <div className='text-center'>
                                    <button type="submit" className='lg:text-xl text-white bg-emerald-400 lg:px-5 lg:py-2 px-4 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-3 transition duration-300 ease-in-out shadow-md'>
                                        Register
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
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
