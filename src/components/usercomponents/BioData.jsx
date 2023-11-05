import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { getUserLogged } from "../../utils/api";

class BioData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            username: "",
            name: "",
            email: "",
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();
    
        this.setState({
            username: data.username || "",
            name: data.name || "",
            email: data.email || "",
        });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
            
            <h5 variant="secoundary" onClick={this.handleShow}> {" "} Data Diri {" "}</h5>

            <Modal show={this.state.show} onHide={this.handleClose} className="py-5">
                    <h3 className="text-center mt-3">Data Diri</h3>
                <Modal.Body className="lg">
                    <Form>
                        <FloatingLabel controlId="floatingUsername" label="Username : ">
                            <Form.Control type="text" value={this.state.username} className="mb-3 bg-white" autoComplete="off" readOnly />
                        </FloatingLabel>
                        <FloatingLabel controlId="Name" label="Name : ">
                            <Form.Control type="text" value={this.state.name} className="mb-3 bg-white" autoComplete="off" readOnly />
                        </FloatingLabel>
                        <FloatingLabel controlId="Email" label="Email : ">
                            <Form.Control type="text" value={this.state.email} className="mb-3 bg-white" autoComplete="off" readOnly />
                        </FloatingLabel>
                        <div className="text-center">
                            <Button className="btn btn-success mt-4 m-2" onClick={this.handleClose}> {" "} Tutup {" "} </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            </div>
        )
    }
}

export default BioData;
