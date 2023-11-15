import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Input } from "@material-tailwind/react";
import show from "../../assets/password/show.svg"
import hide from "../../assets/password/hide.svg"

class LoginInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            showPassword: false,
        };
    }

    onUsernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    onPasswordChangeHandler = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    validateForm = () => {
        const { username, password } = this.state;
        if (!username || !password) {
            alert("Silakan isi semua field.");
            return false;
        }
        return true;
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        
        if (this.validateForm()) {
            this.props.login({
                username: this.state.username,
                password: this.state.password,
            });
        }
    }

    toggleShowPassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

    render() {
        const { showPassword } = this.state;

        return (
            <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400 min-h-screen flex flex-col justify-center items-center'>
                <section>
                    <div className='container'>
                        <div className='flex flex-wrap justify-center items-center'>

                            <div className='w-full self-center px-4 lg:w-1/2 text-center hidden lg:block'>
                                <h1 className='text-4xl font-semibold mb-3 leading-10 text-sky-900'>
                                    Solusi Mudah <br/><span>Untuk mendeteksi penyakit tomat</span>
                                </h1>
                                <p className='text-2xl leading-relaxed text-gray-800'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores liber veritatis? Dicta facilis sint aliquid ipsumatque?
                                </p>
                            </div>

                            <div className='w-full self-end px-10 lg:px-6 md:px-10 sm:px-10 lg:w-1/2 backdrop-blur-2xl bg-white/30 rounded-xl shadow-lg hover:bg-white/40 hover:shadow-xl transition duration-200 ease-in-out'>
                                <div className='mt-10'>
                                    <form onSubmit={this.onSubmitHandler}>

                                        <div className='text-center text-2xl mt-4 mb-3 font-semibold text-sky-900'>
                                            <h1>Login</h1>
                                        </div>

                                        <div className='mx-auto mb-5 '>
                                            <Input type='text' variant="standard" label="Username" size="lg" value={this.state.username} onChange={this.onUsernameChangeHandler}/>
                                        </div>

                                        <div className='mx-auto mb-5 relative'>
                                            <Input  type={showPassword ? "text" : "password"} variant="standard" label="Password" value={this.state.password} onChange={this.onPasswordChangeHandler}/>
                                            <span onClick={this.toggleShowPassword} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
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

                                        <div className="text-center mb-4 lg:text-lg sm:text-sm text-sm">
                                            <p className='text-sky-900'>Belum punya akun..? <Link to="/register"><span className='text-blue-500'>Register Disini</span></Link></p>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;
