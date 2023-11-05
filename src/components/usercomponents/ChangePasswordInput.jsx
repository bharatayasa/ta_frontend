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
            newPassword: "",
            showPassword: false,
            showPassword2: false,
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
        const { showPassword } = this.state;
        const { showPassword2 } = this.state;

        return (
            <div>
            <h5 variant="" onClick={this.handleShow}> {" "} Ubah Password {" "}</h5>
            <Modal show={this.state.show} onHide={this.handleClose} className="py-5">
                    <h3 className="text-center mt-3">Password</h3>
                <Modal.Body className="lg">
                    <Form onSubmit={this.onSubmitEventHandler}>
                    
                        <FloatingLabel controlId="passwordlama" label="Password Lama" value={this.state.currentPassword} onChange={this.onCurrentPasswordChangeEventHandler}>
                            <Form.Control type={showPassword ? "text" : "password"} className="mb-3 bg-white" placeholder="Password Lama" autoComplete="off"/>
                        <Button variant="btn" onClick={this.toggleShowPassword} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>{showPassword ? "Hide" : "Show"}</Button>
                        </FloatingLabel>
                        
                        <FloatingLabel controlId="passwordbaru" label="Password Baru" value={this.state.newPassword} onChange={this.onNewPasswordChangeEventHandler}>
                            <Form.Control type={showPassword2 ? "text" : "password"} className="mb-3 bg-white" placeholder="Password Baru" autoComplete="off"/>
                        <Button variant="btn" onClick={this.toggleShowPassword2} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>{showPassword2 ? "Hide" : "Show"}</Button>
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
