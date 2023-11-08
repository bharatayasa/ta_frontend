import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
                                <p className='text-2xl leading-relaxed text-slate-900'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores liber veritatis? Dicta facilis sint aliquid ipsumatque?
                                </p>
                            </div>

                            <div className='w-full self-end px-4 lg:w-1/2 backdrop-blur-2xl bg-white/30 rounded-xl shadow-sm'>
                            <div className='mt-10'>
                                <Form onSubmit={this.onSubmitHandler}>
                                <div className='text-center text-2xl mt-4 mb-3 font-semibold text-sky-900'>
                                    <h1>Login</h1>
                                </div>
                                
                                <div className='mr-3 ml-3 mb-3 shadow-sm'>
                                    <FloatingLabel controlId="floatingInput" label="Username">
                                    <Form.Control type="text" placeholder="Username" autoComplete="off" value={this.state.username} onChange={this.onUsernameChangeHandler} />
                                    </FloatingLabel>
                                </div>

                                <div className='mr-3 ml-3 mb-5 shadow-sm'>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" value={this.state.password} onChange={this.onPasswordChangeHandler} />
                                    <Link onClick={this.toggleShowPassword} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} >
                                        {showPassword ? "Hide" : "Show"}
                                    </Link>
                                    </FloatingLabel>
                                </div>

                                <div className='text-center'>
                                    <button type="submit" className='text-xl text-white bg-emerald-400 px-5 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-3 transition duration-300 ease-in-out shadow-md'>
                                    Login
                                    </button>
                                </div>
                                <div className="text-center mb-4">
                                    <p className='text-sky-900'>Belum punya akun..? <Link to="/register"><span className='text-blue-500'>Register Disini</span></Link></p>
                                </div>
                                </Form>
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
