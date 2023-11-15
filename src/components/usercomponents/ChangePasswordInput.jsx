import React, { Component } from "react";
import PropTypes from "prop-types";
import show from "../../assets/password/show.svg"
import hide from "../../assets/password/hide.svg"

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
                    <div className="mb-4 relative">
                        <label htmlFor="passwordlama" className="block text-sky-900 text-sm font-bold mb-2">Password Lama:</label>
                        <input type={showPassword ? "text" : "password"} value={this.state.currentPassword} onChange={this.onCurrentPasswordChangeEventHandler} className="block w-full border border-gray-300 rounded py-2 px-3"placeholder="Password Lama" autoComplete="off"/>
                        <span onClick={() => this.toggleShowPassword('showPassword')} className="text-sm py-1 px-2 absolute right-2 top-12 transform -translate-y-1/2 cursor-pointer">
                            {showPassword ?
                                <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                            }
                        </span>
                    </div>

                    <div className="mb-4 relative">
                        <label htmlFor="passwordbaru" className="block text-sky-900 text-sm font-bold mb-2">Password Baru:</label>
                        <input type={showPassword2 ? "text" : "password"} value={this.state.newPassword} onChange={this.onNewPasswordChangeEventHandler} className="block w-full border border-gray-300 rounded py-2 px-3"placeholder="Password Baru"autoComplete="off"/>
                        <span onClick={() => this.toggleShowPassword2('showPassword2')} className="text-sm py-2 px-2 absolute right-2 top-12 transform -translate-y-1/2 cursor-pointer">
                            {showPassword2 ?
                                <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                            }
                        </span>
                    </div>

                    <div className="mb-4 relative">
                        <label htmlFor="confirmPassword" className="block text-sky-900 text-sm font-bold mb-2">Konfirmasi Password:</label>
                        <input type={showPassword3 ? "text" : "password"} value={this.state.confirmPassword} onChange={this.onConfirmPasswordChangeEventHandler} className="block w-full border border-gray-300 rounded py-2 px-3" placeholder="Konfirmasi Password" autoComplete="off" />
                        <span onClick={() => this.toggleShowPassword3('showPassword3')} className="text-sm py-2 px-2 absolute right-2 top-12 transform -translate-y-1/2 cursor-pointer">
                            {showPassword3 ?
                                <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                <img src={hide} alt="Hide Password" className="h-5 w-5" />
                            }
                        </span>
                    </div>

                    <div className="text-center">
                        <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded" type="submit">Simpan</button>
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
