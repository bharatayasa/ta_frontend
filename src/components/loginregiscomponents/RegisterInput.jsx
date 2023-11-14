import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Tomatigirl from '../../assets/img/tomatigirl.png';

class RegisterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            registrationSuccess: false,
            showPassword: false,
            showPassword2: false,
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

    onConfirmPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value,
        });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const { username, name, email, password, confirmPassword } = this.state;
        if (!username || !name || !email || !password || !confirmPassword) {
            alert('Silakan isi semua field.');
            return;
        }
        if (password !== confirmPassword) {
            alert("Password dan Confirm Password harus sama");
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
    
    toggleShowPassword2 = () => {
        this.setState((prevState) => ({
            showPassword2: !prevState.showPassword2,
        }));
    }

    render() {
        const { showPassword, showPassword2 } = this.state;

        return (
            <div className='bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-h-screen flex flex-col justify-center items-center'>
                <section>
                    <div className='container'>
                        <div className='flex flex-wrap justify-center items-center'>
                            <div className='w-full self-center px-9 lg:w-1/2'>
                                <img className="hidden lg:block" style={{ width: '80%' }} src={Tomatigirl} alt="Tomatigirl" />
                            </div>
                            <div className='w-full self-end px-2 lg:w-1/2 backdrop-blur-2xl bg-white/30 rounded-xl shadow-sm'>
                                <div className='mt-10'>
                                    <form onSubmit={this.onSubmitHandler}>
                                        <div className='text-center text-2xl mt-4 mb-3 font-semibold text-sky-900'>
                                            <h1>Register</h1>
                                        </div>

                                        <div className='mr-3 ml-3 mb-3 '>
                                            <label htmlFor="username" className="block mb-1 text-sky-900 font-semibold">Username</label>
                                            <input type="text" id="username" placeholder="Username" value={this.state.username} onChange={this.onUsernameChange} className="w-full border-2 rounded-md py-2 px-3 focus:outline-none focus:border-sky-900" autoComplete="none"/>
                                        </div>

                                        <div className='mr-3 ml-3 mb-3 '>
                                            <label htmlFor="name" className="block mb-1 text-sky-900 font-semibold">Name</label>
                                            <input type="text" id="name" placeholder="Name" value={this.state.name} onChange={this.onNameChange} className="w-full border-2 rounded-md py-2 px-3 focus:outline-none focus:border-sky-900"  autoComplete="none" />
                                        </div>

                                        <div className='mr-3 ml-3 mb-3 '>
                                            <label htmlFor="email" className="block mb-1 text-sky-900 font-semibold">E-mail</label>
                                            <input type="email" id="email" placeholder="E-Mail" value={this.state.email} onChange={this.onEmailChange} className="w-full border-2 rounded-md py-2 px-3 focus:outline-none focus:border-sky-900"  autoComplete="none"/>
                                        </div>

                                        <div className='mr-3 ml-3 mb-3  relative'>
                                            <label htmlFor="password" className="block mb-1 text-sky-900 font-semibold">Password</label>
                                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} autoComplete="off" className="w-full border-2 rounded-md py-2 px-3 focus:outline-none focus:border-sky-900" />
                                            <span onClick={this.toggleShowPassword} className="absolute mt-4 transform -translate-y-1 right-3 cursor-pointer text-blue-500">
                                                {showPassword ? "Hide" : "Show"}
                                            </span>
                                        </div>

                                        <div className='mr-3 ml-3 mb-5  relative'>
                                            <label htmlFor="confirmPassword" className="block mb-1 text-sky-900 font-semibold">Confirm Password</label>
                                            <input type={showPassword2 ? "text" : "password"} id="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} autoComplete="off" className="w-full border-2 rounded-md py-2 px-3 focus:outline-none focus:border-sky-900" />
                                            <span onClick={this.toggleShowPassword2} className="absolute mt-4 transform -translate-y-1 right-3 cursor-pointer text-blue-500">
                                                {showPassword2 ? "Hide" : "Show"}
                                            </span>
                                        </div>

                                        <div className='text-center'>
                                            <button type="submit" className='text-xl text-white bg-emerald-400 px-5 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-3 transition duration-300 ease-in-out shadow-md'>
                                                Register
                                            </button>
                                        </div>

                                        <p className="text-center mb-4 lg:text-lg sm:text-xs text-sky-900">
                                            Kembali ke <span className="text-blue-500"><Link to="/">Login</Link></span>
                                        </p>
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

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
