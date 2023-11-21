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

        this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
    }

    onChangeEventHandler(field, event) {
        this.setState({
            [field]: event.target.value,
        });
    }

    toggleShowPassword(field) {
        this.setState((prevState) => ({
            [field]: !prevState[field],
        }));
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const { currentPassword, newPassword, confirmPassword } = this.state;
        if (newPassword !== confirmPassword) {
            return alert('Password baru dan confirm password harus sama');
        }
        this.props.updatePassword({ currentPassword, newPassword, confirmPassword });
    }    

    render() {
        const fieldConfigs = [
            { field: "currentPassword", labelText: "password saat ini", fieldNumber: "" },
            { field: "newPassword", labelText: "password baru", fieldNumber: "2" },
            { field: "confirmPassword", labelText: "confirm password baru", fieldNumber: "3" },
        ];

        return (
            <div className="mt-4">
                <h1 className='text-xl font-semibold text-sky-900 text-center'>Ubah Password</h1>
                <form onSubmit={this.onSubmitEventHandler}>

                    {fieldConfigs.map(({ field, labelText, fieldNumber }) => (
                        <div key={field} className='mx-auto mb-5 relative'>
                            <Input
                                type={this.state[`showPassword${fieldNumber}`] ? "text" : "password"}
                                variant="standard"
                                label={labelText}
                                value={this.state[field]}
                                onChange={(event) => this.onChangeEventHandler(field, event)}
                            />
                            <span onClick={() => this.toggleShowPassword(`showPassword${fieldNumber}`)} className="absolute -mt-6 md:-mr-7 lg:-mr-4 -mr-7 transform -translate-y-1 right-8 cursor-pointer text-sm text-blue-500">
                                {this.state[`showPassword${fieldNumber}`] ?
                                    <img src={show} alt="Show Password" className="h-5 w-5" /> :
                                    <img src={hide} alt="Hide Password" className="h-5 w-5" />
                                }
                            </span>
                        </div>
                    ))}

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
