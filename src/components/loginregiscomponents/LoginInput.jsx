import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
            <div className='bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-h-screen flex flex-col justify-center items-center'>
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

                            <div className='w-full self-end px-2 lg:w-1/2 backdrop-blur-2xl bg-white/30 rounded-xl shadow-sm'>
                                <div className='mt-10'>
                                    <form onSubmit={this.onSubmitHandler}>
                                        <div className='text-center text-2xl mt-4 mb-3 font-semibold text-sky-900'>
                                            <h1>Login</h1>
                                        </div>
                                        
                                        <div className='mr-3 ml-3 mb-3'>
                                            <label htmlFor="username" className="block mb-1 text-sky-900 font-semibold">Username</label>
                                            <input type="text" placeholder="Username" value={this.state.username} onChange={this.onUsernameChangeHandler} className="w-full border-2 rounded-md py-2 px-3 focus:outline-none focus:border-sky-900" autoComplete="none"/>
                                        </div>

                                        <div className='mr-3 ml-3 mb-5 relative'>
                                            <label htmlFor="username" className="block mb-1 text-sky-900 font-semibold">Password</label>
                                            <input type={showPassword ? "text" : "password"} placeholder="Password" value={this.state.password} onChange={this.onPasswordChangeHandler} className="w-full border-2 rounded-md py-2 px-3 focus:outline-none focus:border-sky-900" autoComplete="none"/>
                                            <span onClick={this.toggleShowPassword} className="absolute mt-4 transform -translate-y-1 right-3 cursor-pointer text-blue-500">
                                                {showPassword ? "Hide" : "Show"}
                                            </span>
                                        </div>

                                        <div className='text-center'>
                                            <button type="submit" className='text-xl text-white bg-emerald-400 px-5 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-3 transition duration-300 ease-in-out shadow-md'>
                                                Login
                                            </button>
                                        </div>

                                        <div className="text-center mb-4 lg:text-lg sm:text-xs">
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
