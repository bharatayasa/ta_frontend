import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from "prop-types";

class ChangePasswordInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            currentPassword: "",
            newPassword: ""
        };

        this.onCurrentPasswordChangeEventHandler = this.onCurrentPasswordChangeEventHandler.bind(this);
        this.onNewPasswordChangeEventHandler = this.onNewPasswordChangeEventHandler.bind(this);
        
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
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
        this.handleClose();
    }

    handleShow = () => {
        this.setState({ show: true });
    };

    handleClose = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div>
            <Button variant="primary" onClick={this.handleShow}> {" "} Ubah Password {" "}</Button>
            <Modal show={this.state.show} onHide={this.handleClose} className="py-5">
                <Modal.Header>
                    <h3>Password</h3>
                </Modal.Header>
                <Modal.Body className="lg">
                    <Form onSubmit={this.onSubmitEventHandler}>
                    
                        <FloatingLabel controlId="passwordbaru" label="Password Lama" value={this.state.currentPassword} onChange={this.onCurrentPasswordChangeEventHandler}>
                            <Form.Control type="password" className="mb-3 bg-white" placeholder="Password Lama" autoComplete="off"/>
                        </FloatingLabel>
                        
                        <FloatingLabel controlId="passwordbaru" label="Password Baru" value={this.state.newPassword} onChange={this.onNewPasswordChangeEventHandler}>
                            <Form.Control type="password" className="mb-3 bg-white" placeholder="Password Baru" autoComplete="off"/>
                        </FloatingLabel>
                        <div className="text-center">
                            <button className="btn btn-success mt-4 m-2" type="submit"> {" "} Simpan {" "} </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            </div>
        )
    }
}

ChangePasswordInput.propTypes = {
    updatePassword: PropTypes.func.isRequired,
};

export default ChangePasswordInput;
