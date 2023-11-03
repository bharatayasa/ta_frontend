import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from "prop-types";

class UserData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };

        this.onUsernameChangeEventHandler = this.onUsernameChangeEventHandler.bind(this);
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            username: this.props.username,
            name: this.props.name,
            email: this.props.email,
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
            <>
            <Button variant="primary" onClick={this.handleShow}> {" "} Ubah {" "}</Button>
            <Modal show={this.state.show} onHide={this.handleClose} className="py-5">
                <Modal.Header>
                    <Modal.Title>Data Diri</Modal.Title>
                </Modal.Header>
                <Modal.Body className="lg">
                    <Form onSubmit={this.onSubmitEventHandler}>
                        <FloatingLabel controlId="floatingUsername" label="Username : ">
                            <Form.Control type="text" value={this.state.username} onChange={this.onUsernameChangeEventHandler} className="mb-3" autoComplete="off"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="Name" label="Name : ">
                            <Form.Control type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} className="mb-3" autoComplete="off"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="Password" label="E-Mail : " className="mb-3" >
                            <Form.Control type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} autoComplete="off"/>
                        </FloatingLabel>
                        <div className="text-center">
                            <button className="btn btn-success mt-4 m-2" type="submit"> {" "} Simpan {" "} </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            </>
        )
    }
}

UserData.propTypes = {
    updateMe: PropTypes.func.isRequired,
};

export default UserData;