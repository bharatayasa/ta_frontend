import React, { Component } from "react";
import PropTypes from "prop-types";
import show from "../../assets/password/show.svg"
import hide from "../../assets/password/hide.svg"
import { Input } from "@material-tailwind/react";

class ChangePasswordInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "", 
            showPassword: false,
            showPassword2: false,
            showPassword3: false,
        };

        this.onCurrentPasswordChangeEventHandler = this.onCurrentPasswordChangeEventHandler.bind(this);
        this.onNewPasswordChangeEventHandler = this.onNewPasswordChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
        this.onConfirmPasswordChangeEventHandler = this.onConfirmPasswordChangeEventHandler.bind(this);
    }

    onCurrentPasswordChangeEventHandler(event) {
        this.setState({
            currentPassword: event.target.value,
        });
    }

    onNewPasswordChangeEventHandler(event) {
        this.setState({
            newPassword: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.updatePassword(this.state);
    }

    onConfirmPasswordChangeEventHandler(event) {
        this.setState({
            confirmPassword: event.target.value,
        });
    }
    toggleShowPassword(field) {
        this.setState((prevState) => ({
            [field]: !prevState[field],
        }));
    }
    
    toggleShowPassword2(field) {
        this.setState((prevState) => ({
            [field]: !prevState[field],
        }));
    }
    
    toggleShowPassword3(field) {
        this.setState((prevState) => ({
            [field]: !prevState[field],
        }));
    }

    render() {
        const { showPassword, showPassword2, showPassword3 } = this.state;

        return (
            <div className="mt-4">
                <h1 className='text-xl font-semibold text-sky-900 text-center'>Ubah Password</h1>
                <form onSubmit={this.onSubmitEventHandler}>

                <div className='mx-auto mb-5 relative'>
                    <Input  type={showPassword ? "text" : "password"} variant="standard" label="password saat ini" value={this.state.currentPassword} onChange={this.onCurrentPasswordChangeEventHandler}/>
                        <span onClick={() => this.toggleShowPassword('showPassword')} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
                            {showPassword ?
                                <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                            }
                        </span>
                </div>

                <div className='mx-auto mb-5 relative'>
                    <Input  type={showPassword2 ? "text" : "password"} variant="standard" label="password baru" value={this.state.newPassword} onChange={this.onNewPasswordChangeEventHandler}/>
                        <span onClick={() => this.toggleShowPassword2('showPassword2')} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
                            {showPassword2 ?
                                <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                            }
                        </span>
                </div>

                <div className='mx-auto relative'>
                    <Input  type={showPassword3 ? "text" : "password"} variant="standard" label="confirm password baru" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChangeEventHandler}/>
                        <span onClick={() => this.toggleShowPassword3('showPassword3')} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
                            {showPassword3 ?
                                <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                            }
                        </span>
                </div>

                <div className="text-center py-5">
                    <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out shadow-md hover:shadow-lg" type="submit">Simpan</button>
                </div>

                </form>
            </div>
        );
    }
}

ChangePasswordInput.propTypes = {
    updatePassword: PropTypes.func.isRequired,
};

export default ChangePasswordInput;
