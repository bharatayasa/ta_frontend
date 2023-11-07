import React from "react";
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Tomatigirl from '../../assets/img/tomatigirl.png'

class RegisterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            registrationSuccess: false,
            showPassword: false,
        };
    }

    onUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const { username, name, email, password } = this.state;
        if (!username || !name || !email || !password) {
            alert('Silakan isi semua field.');
            return;
        }
        this.props.register({
            username: this.state.username,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        });
        this.setState({ registrationSuccess: true });
    }

    toggleShowPassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

    render() {
        const { showPassword } = this.state;

        return (
            <div className='bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 h-screen flex flex-col justify-center items-center'>
            <section>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='w-full self-center px-9 lg:w-1/2'>
                        <img className="hidden lg:block" style={{ width: '80%' }} src={Tomatigirl} alt="Tomatigirl" />
                    </div>

                    <div className='w-full self-end px-4 lg:w-1/2 backdrop-blur-2xl bg-white/30 rounded-xl shadow-sm'>
                    <div className='mt-10'>
                        <form onSubmit={this.onSubmitHandler} className="mb-3">
                        <div className='text-center text-2xl mt-4 mb-3 font-semibold'>
                            <h1>Register</h1>
                        </div>

                        <div className='mr-3 ml-3 mb-3 shadow-sm'>
                            <FloatingLabel controlId="floatingInput" label="Username">
                            <Form.Control type="text" placeholder="Username" autoComplete="off" value={this.state.username} onChange={this.onUsernameChange} />
                            </FloatingLabel>
                        </div>

                        <div className='mr-3 ml-3 mb-3 shadow-sm'>
                            <FloatingLabel controlId="floatingInput" label="Name">
                            <Form.Control type="text" placeholder="Name" autoComplete="off" value={this.state.name} onChange={this.onNameChange} />
                            </FloatingLabel>
                        </div>

                        <div className='mr-3 ml-3 mb-3 shadow-sm'>
                            <FloatingLabel controlId="floatingInput" label="E-mail">
                            <Form.Control type="email" placeholder="E-Mail" autoComplete="off" value={this.state.email} onChange={this.onEmailChange} />
                            </FloatingLabel>
                        </div>

                        <div className='mr-3 ml-3 mb-5 shadow-sm'>
                            <FloatingLabel controlId="password" label="Password">
                            <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} autoComplete="off" />
                            <Link variant="btn" onClick={this.toggleShowPassword} className="absolute top-1/2 right-4 transform -translate-y-1/2" >
                                {showPassword ? "Hide" : "Show"}
                            </Link>
                            </FloatingLabel>
                        </div>

                        <div className='text-center'>
                            <button type="submit" className='text-xl text-white bg-emerald-400 px-5 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-3 transition duration-300 ease-in-out shadow-md'>
                            Register
                            </button>
                        </div>
                        <p className='text-center mb-4'>
                            Kembali ke <span className="text-blue-500"><Link to="/">Login</Link></span>
                        </p>
                        </form>
                    </div>
                    </div>

                </div>
            </section>
            </div>

        );
    }
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
