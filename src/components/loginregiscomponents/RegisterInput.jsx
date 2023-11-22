import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Tomatigirl from '../../assets/img/tomatigirl.png';
import { Input } from "@material-tailwind/react";
import show from "../../assets/password/show.svg"
import hide from "../../assets/password/hide.svg"

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
            <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400 min-h-screen flex flex-col justify-center items-center'>
                <section>
                    <div className='container mx-auto'>
                        <div className='flex justify-center'>

                            <div className='w-full self-center px-4 lg:w-1/2 text-center hidden lg:block animate__animated animate__fadeInUp'>
                                <img className="hidden lg:block" style={{ width: '90%' }} src={Tomatigirl} alt="Tomatigirl" />
                            </div>

                            <div className='w-full self-end px-14 lg:px-6 md:px-20 sm:px-10 md:w-full lg:w-1/2 backdrop-blur-2xl bg-white/30 rounded-xl shadow-lg hover:bg-white/40 hover:shadow-xl transition duration-200 ease-in-out animate__animated animate__fadeInDown'>
                                <div className=''>
                                    <form onSubmit={this.onSubmitHandler}>
                                        <div className='text-center text-2xl mt-10 mb-3 font-semibold text-sky-900'>
                                            <h1>Register</h1>
                                        </div>

                                        <div className='mx-auto mb-5'>
                                            <Input type="text" variant="standard" label="Username" size="lg" value={this.state.username} onChange={this.onUsernameChange}/>
                                        </div>

                                        <div className='mx-auto mb-5 relative'>
                                            <Input type="text" variant="standard" label="Name" size="lg" value={this.state.name} onChange={this.onNameChange}/>
                                        </div>

                                        <div className='mx-auto mb-5 relative'>
                                            <Input type="email" variant="standard" label="E-Mail" size="lg" value={this.state.email} onChange={this.onEmailChange}/>
                                        </div>

                                        <div className='mx-auto mb-5 relative'>
                                            <Input  type={showPassword ? "text" : "password"} variant="standard" label="Password" value={this.state.password} onChange={this.onPasswordChange}/>
                                            <span onClick={this.toggleShowPassword} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
                                            {showPassword ?
                                                <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                                            }
                                            </span>
                                        </div>

                                        <div className='mx-auto mb-5 relative'>
                                            <Input  type={showPassword2 ? "text" : "password"} variant="standard" label="Confirm Password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange}/>
                                            <span onClick={this.toggleShowPassword2} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
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

                                        <div className="text-center mb-4 lg:text-lg sm:text-sm text-sm ">
                                            <p className="text-sky-900">Kembali ke <span className="text-blue-500"><Link to="/">Login</Link></span></p>
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

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
