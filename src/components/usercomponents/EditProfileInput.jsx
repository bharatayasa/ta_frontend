import React, { Component } from "react";
import { getUserLogged } from "../../utils/api";
import PropTypes from "prop-types";

class EditProfileInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            name: "",
            email: "",
        };

        this.onUsernameChangeEventHandler = this.onUsernameChangeEventHandler.bind(this);
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();
    
        this.setState({
            username: data.username || "",
            name: data.name || "",
            email: data.email || "",
        });
    }
    

    onUsernameChangeEventHandler(event) {
        this.setState({
            username: event.target.value,
        });
    }

    onNameChangeEventHandler(event) {
        this.setState({
            name: event.target.value,
        });
    }

    onEmailChangeEventHandler(event) {
        this.setState({
            email: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.updateMe(this.state);
    }

    render() {
        return (
            <div className="mt-4">
                <h1 className='text-xl font-semibold text-sky-900 text-center'>Ubah Profile</h1>
                <form onSubmit={this.onSubmitEventHandler} >
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-bold mb-2 text-sky-900">Username:</label>
                        <input type="text" id="username" value={this.state.username} onChange={this.onUsernameChangeEventHandler} className="block w-full border border-gray-300 rounded py-2 px-3" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-bold mb-2 text-sky-900">Name:</label>
                        <input type="text" id="name" value={this.state.name} onChange={this.onNameChangeEventHandler} className="block w-full border border-gray-300 rounded py-2 px-3" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold mb-2 text-sky-900">Email:</label>
                        <input type="email" id="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} className="block w-full border border-gray-300 rounded py-2 px-3" autoComplete="off" />
                    </div>
                    <div className="text-center">
                        <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded" type="submit">Simpan</button>
                    </div>
                </form>
            </div>
        )
    }
}

EditProfileInput.propTypes = {
    updateMe: PropTypes.func.isRequired,
};

export default EditProfileInput;
