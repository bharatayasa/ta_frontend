import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from "@material-tailwind/react";
import show from "../../assets/password/show.svg";
import hide from "../../assets/password/hide.svg";

const LoginInput = ({ login }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const modalRef = useRef();

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setModalOpen(false);
        }
    };

    const onUsernameChangeHandler = (event) => {
        setFormData({
            ...formData,
            username: event.target.value,
        });
    }

    const onPasswordChangeHandler = (event) => {
        setFormData({
            ...formData,
            password: event.target.value,
        });
    }

    const validateForm = () => {
        const { username, password } = formData;
        if (!username || !password) {
            alert("Silakan isi semua field.");
            return false;
        }
        return true;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (validateForm()) {
            login(formData);
            setModalOpen(false);
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="text-l text-white bg-sky-400 px-6 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3">
                Login
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 mt-36 " onClick={handleOutsideClick}>
                    <div className="text-center pb-10">

                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-slate-600/30 backdrop-blur-sm"></div>
                        </div>

                        <section>
                        <div ref={modalRef} className="inline-block rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white/40 backdrop-blur-md pt-4 sm:px-6 sm:pb-4 px-10 py-6">
                                <h3 className="text-center lg:text-2xl md:text-xl text-md text-sky-900 font-semibold">Login</h3>

                                <form onSubmit={onSubmitHandler}>
                                    <div className='mx-auto mb-5 '>
                                        <Input type='text' variant="standard" label="Username" size="lg" value={formData.username} onChange={onUsernameChangeHandler} />
                                    </div>

                                    <div className='mx-auto mb-5 relative'>
                                        <Input type={showPassword ? "text" : "password"} variant="standard" label="Password" value={formData.password} onChange={onPasswordChangeHandler} />
                                        <span onClick={toggleShowPassword} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
                                            {showPassword ?
                                                <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                                            }
                                        </span>
                                    </div>

                                    <div className='text-center'>
                                        <button type="submit" className='lg:text-xl text-white bg-emerald-400 lg:px-5 lg:py-2 px-4 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-3 transition duration-300 ease-in-out shadow-md'>
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;
