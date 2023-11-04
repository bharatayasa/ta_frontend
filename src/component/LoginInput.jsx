import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { Link } from 'react-router-dom';

import { MDBContainer, MDBCard, MDBCardBody } from '`mdb-react-ui-kit`';
import { Col, Row } from 'react-bootstrap';

class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            showPassword: false,
        };

        this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
}

    onUsernameChangeHandler(event) {
        this.setState(() => {
        return {
            username: event.target.value
        }
        })
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
        return {
            password: event.target.value
        };
        });
    }

    validateForm = () => {
        const { username, password } = this.state;
        if (!username || !password) {
            alert("Silakan isi semua field.");
            return false;
        }
        return true;
    }

    onSubmitHandler(event) {
        event.preventDefault();
        
        if (this.validateForm()) {
            this.props.login({
            username: this.state.username,
            password: this.state.password,
            });
        }
    }

    toggleShowPassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

render() {
    const { showPassword } = this.state;
    
    return (
        <div className='background-radial-gradient w-100 min-vh-100 d-flex align-items-center'>
        <div className='container'>
        <MDBContainer>
            <Row className='py-5'>
            <Col md='6'>
                <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                    Solusi Mudah <br />
                    <span>Untuk mendeteksi penyakit tomat</span>
                </h1>
                    <p className='px-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
            </Col>

            <Col md='6'>
                <MDBCard className='my-5 bg-glass'>
                    <MDBCardBody className='p-3'>
                    <Form className='container mb-3' onSubmit={this.onSubmitHandler}>
                    <div className='text-center'>
                        <h1>Login</h1>
                    </div>
                    <FloatingLabel
                        controlId="floatingInput" label="Username" className="mb-4">
                        <Form.Control type="text" placeholder="Username" autoComplete="off" value={this.state.username} onChange={this.onUsernameChangeHandler}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type={showPassword ? "text" : "password"} placeholder="Username" value={this.state.password} onChange={this.onPasswordChangeHandler}/>
                        <Button variant="btn" onClick={this.toggleShowPassword} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                        {showPassword ? "Hide" : "Show"}
                        </Button>
                    </FloatingLabel>
                        <div className='text-center mt-5'>
                            <Button variant="primary" type="submit" className='w-100'>Login</Button>
                        </div>
                        <div className="text-center mt-3">
                            <p>Belum punya akun..? <Link to="/register">Register Disisni</Link></p>
                        </div>
                    </Form>
                    </MDBCardBody>
                </MDBCard>
            </Col>
            </Row>
        </MDBContainer>
        </div>
        </div>
        );
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;
