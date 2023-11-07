import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class AddUserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            role: '',
            show: false,
            showPassword: false
        };

        this.onUsernameChangeEventHandler = this.onUsernameChangeEventHandler.bind(this);
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
        this.onRoleChangeEventHandler = this.onRoleChangeEventHandler.bind(this);

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
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

    onPasswordChangeEventHandler(event) {
        this.setState({
            password: event.target.value,
        });
    }

    onRoleChangeEventHandler(event) {
        this.setState({
            role: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.adduser(this.state);
        this.handleClose();
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    toggleShowPassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

    render() {
        const { showPassword } = this.state;

        return (
            <div>
                <button onClick={this.handleShow} className='text-l text-white bg-sky-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-sky-500 transition duration-300 ease-in-out shadow-md mb-3'>
                    tambah user
                </button>

                <Modal show={this.state.show} onHide={this.handleClose} className='py-5'>
                    <Modal.Header>
                        <Modal.Title>Tambah Data User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='lg'>
                        <Form noValidate onSubmit={this.onSubmitEventHandler}>
                            <FloatingLabel controlId="floatingUsername" label="Username" value={this.state.username} onChange={this.onUsernameChangeEventHandler}>
                                <Form.Control type="text" placeholder="Username" className='mb-3' autoComplete="off"/>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingName" label="Name" value={this.state.name} onChange={this.onNameChangeEventHandler} className='mb-3'>
                                <Form.Control type="text" placeholder="Name" autoComplete="off"/>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingEmail" label="E-Mail" value={this.state.email} onChange={this.onEmailChangeEventHandler} className='mb-3'>
                                <Form.Control type="email" placeholder="Email" autoComplete="off"/>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingEmail" label="Password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} className='mb-3'>
                                <Form.Control type={showPassword ? "text" : "password"} placeholder="Email" autoComplete="off"/>
                            <Button variant="btn" onClick={this.toggleShowPassword} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                            {showPassword ? "Hide" : "Show"}
                            </Button>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingSelect" label="Pilih Peran">
                                <Form.Select aria-label="Floating label select example" value={this.state.role} onChange={this.onRoleChangeEventHandler}>
                                    <option >pilih</option>
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </Form.Select>
                            </FloatingLabel>

                            <div className='text-center'>
                                <button className='btn btn-primary mt-4' type="submit">Tambah</button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

AddUserInput.propTypes = {
    adduser: PropTypes.func.isRequired,
};

export default AddUserInput;
