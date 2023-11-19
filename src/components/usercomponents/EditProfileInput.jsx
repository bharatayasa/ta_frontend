import React, { Component } from "react";
import { getUserLogged } from "../../utils/api";
import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";

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
                        <Input variant="standard" label="username" type="text" value={this.state.username} onChange={this.onUsernameChangeEventHandler} />
                    </div>
                    <div className="mb-4">
                        <Input variant="standard" label="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                    </div>
                    <div className="mb-2">
                        <Input variant="standard" label="e-mail" type="text" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
                    </div>
                    <div className="text-center py-5">
                        <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out shadow-md hover:shadow-lg" type="submit">Simpan</button>
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
