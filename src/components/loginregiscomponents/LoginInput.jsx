import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Card, CardBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class LoginInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            showPassword: false,
        };
    }

    onUsernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    onPasswordChangeHandler = (event) => {
        this.setState({
            password: event.target.value
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

    onSubmitHandler = (event) => {
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
                    <Container>
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
                                <Card className='my-5 bg-glass'>
                                    <CardBody className='p-3'>
                                        <Form className='container mb-3' onSubmit={this.onSubmitHandler}>
                                            <div className='text-center'>
                                                <h1>Login</h1>
                                            </div>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Username"
                                                className="mb-4"
                                            >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    value={this.state.username}
                                                    onChange={this.onUsernameChangeHandler}
                                                />
                                            </FloatingLabel>
                                            <FloatingLabel controlId="floatingPassword" label="Password">
                                                <Form.Control
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={this.onPasswordChangeHandler}
                                                />
                                                <Button
                                                    variant="btn"
                                                    onClick={this.toggleShowPassword}
                                                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                                                >
                                                    {showPassword ? "Hide" : "Show"}
                                                </Button>
                                            </FloatingLabel>
                                            <div className='text-center mt-5'>
                                                <Button variant="primary" type="submit" className='w-100'>
                                                    Login
                                                </Button>
                                            </div>
                                            <div className="text-center mt-3">
                                                <p>Belum punya akun..? <Link to="/register">Register Disini</Link></p>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;
