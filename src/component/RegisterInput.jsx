import React from "react";
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import {
    MDBContainer,
    MDBCard,
    MDBCardBody
} from '`mdb-react-ui-kit`';

class RegisterInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            registrationSuccess: false,
        };
        
        this.onUsernameChange = this.onUsernameChange.bind(this); 
        this.onNameChange = this.onNameChange.bind(this); 
        this.onEmailChange = this.onEmailChange.bind(this); 
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

        onUsernameChange(event) {
            this.setState(() => {
                return {
                    username : event.target.value, 
                };
            });
        }

        onNameChange(event) {
            this.setState(() => {
                return {
                    name : event.target.value, 
                };
            });
        }

        onEmailChange(event) {
            this.setState(() => {
                return {
                    email : event.target.value, 
                };
            });
        }

        onPasswordChange(event) {
            this.setState(() => {
                return {
                    password : event.target.value, 
                };
            });
        }

        onSubmitHandler(event) {
            event.preventDefault();
            const { username, name, email, password } = this.state;
            if (!username || !name || !email || !password) {
                alert('Silakan isi semua field.');
                return;
            }
            this.props.register({
                username: this.state.username,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            });
            this.setState({ registrationSuccess: true })
        }

        render(){
            return(
                <div className='background-radial-gradient w-100 min-vh-100 d-flex align-items-center'>
                <div className="container">
                <MDBContainer>
                <Row>
                <Col lg="6" className='pt-lg-0 pt-5'>
                    <div className="py-5">
                        <img style={{ width: '100%'}} src="/public/tomatigirl.png"/>
                    </div>
                </Col>
                <Col lg="6" className='pt-lg-0 pt-5'>
                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>
                        <Form className='mb-3' onSubmit={this.onSubmitHandler}>
                        <div className='text-center'>
                            <h1>Register</h1>
                        </div>
                        <FloatingLabel
                            controlId="floatingInput" label="Username" className="mb-3" >
                            <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.onUsernameChange} className="mb-4"/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput" label="Name" className="mb-3" >
                            <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange} className="mb-4"/>
                        </FloatingLabel>
                        
                        <FloatingLabel
                            controlId="floatingInput" label="E-mail" className="mb-3" >
                            <Form.Control type="email" placeholder="E-Mail" value={this.state.email} onChange={this.onEmailChange} className="mb-4"/>
                        </FloatingLabel>
                        
                        <FloatingLabel
                            controlId="floatingInput" label="Password" className="mb-3" >
                            <Form.Control type="text" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} className="mb-4"/>
                        </FloatingLabel>
                            <div className='text-center mb-5'>
                            <Button variant="primary" type="submit" className='w-100'>Register</Button>
                            </div>
                            
                            {this.state.registrationSuccess && (
                                <div className="text-center alert alert-success">
                                    Register berhasil.
                                </div>
                            )}
                            <p className='text-center mt-5'>Kembali ke <Link to="/">Login</Link></p>
                        </Form>
                        </MDBCardBody>
                    </MDBCard>
                </Col>
                </Row>
                </MDBContainer>
                </div>
                </div>
            )
        }
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput; 
