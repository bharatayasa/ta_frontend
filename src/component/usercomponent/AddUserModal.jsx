import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

class AddUserModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            role: '',
            show: false,
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

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow} className='mb-3'>
                    tambah user
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} className='py-5'>
                    <Modal.Header>
                        <Modal.Title>Tambah Data User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='lg'>
                        <Form onSubmit={this.onSubmitEventHandler}>
                            <Form.Label>Username : </Form.Label>
                            <Form.Control type="text" value={this.state.username} onChange={this.onUsernameChangeEventHandler} />
                            
                            <Form.Label>Name :  </Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                            
                            <Form.Label>E-mail :  </Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
                            
                            <Form.Label>Password :  </Form.Label>
                            <Form.Control type="text" value={this.state.password} onChange={this.onPasswordChangeEventHandler} />

                            <Form.Label>Role :</Form.Label>
                            <Form.Select value={this.state.role} onChange={this.onRoleChangeEventHandler}>
                                <option value="">Pilih role</option>
                                <option value="admin">admin</option>
                                <option value="user">user</option>
                            </Form.Select>
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

AddUserModal.propTypes = {
    adduser: PropTypes.func.isRequired,
};

export default AddUserModal;
