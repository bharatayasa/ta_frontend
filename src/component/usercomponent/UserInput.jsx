import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            role:'', 
        }

        this.onUsernameChangeEventHandler = this.onUsernameChangeEventHandler.bind(this);
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
        this.onRoleChangeEventHandler = this.onRoleChangeEventHandler.bind(this);

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onUsernameChangeEventHandler(event) {
        this.setState(() => {
        return {
            username: event.target.value,
        }
        });
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
        return {
            name: event.target.value,
        }
        });
    }

    onEmailChangeEventHandler(event) {
        this.setState(() => {
        return {
            email: event.target.value,
        }
        });
    }

    onPasswordChangeEventHandler(event) {
        this.setState(() => {
        return {
            password: event.target.value,
        }
        });
    }
    
    onRoleChangeEventHandler(event) {
        this.setState(() => {
        return {
            role: event.target.value,
        }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.adduser(this.state);
    }

    render() {
        return (
            <div className='py-5'>
                <Form onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.onUsernameChangeEventHandler} />
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} />
                    
                    <select value={this.state.role} onChange={this.onRoleChangeEventHandler}>
                        <option>Select Role</option>
                        <option value="admin">admin</option>
                        <option value="user">user</option>
                    </select>

                    <FloatingLabel controlId="floatingInput" label="Username" className="mb-3" value={this.state.name} onChange={this.onNameChangeEventHandler}>
                        <Form.Control type="text" placeholder="Username" autoComplete="off"/>
                    </FloatingLabel>

                    <button type="submit">Tambah</button>
                </Form>
            </div>
        )
    }
}

    UserInput.propTypes = {
        adduser: PropTypes.func.isRequired,
    }

    // export default UserInput; 
    