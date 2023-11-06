import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from 'react-bootstrap';
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
            <div className='mx-auto bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-vh-100'>
                <div className='py-5 container'>
                        <Row>
                            <Col>
                                <h1 className="">
                                    Solusi Mudah <br/>
                                    <span>Untuk mendeteksi penyakit tomat</span>
                                </h1>
                                <p className=''>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                    quibusdam tempora at cupiditate quis eum maiores libero
                                    veritatis? Dicta facilis sint aliquid ipsum atque?
                                </p>
                            </Col>

                            <Col>
                                <Card>
                                    <CardBody className=''>
                                        <div className='backdrop-blur-sm bg-white/30'>
                                        <form onSubmit={this.onSubmitHandler}>
                                            <div className='mb-3'>
                                                <h1>Login</h1>
                                            </div>
                                            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                                <Form.Control type="text" placeholder="Username" autoComplete="off" value={this.state.username} onChange={this.onUsernameChangeHandler} />
                                            </FloatingLabel>

                                            <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                                                <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" value={this.state.password} onChange={this.onPasswordChangeHandler} />
                                                <Button variant="btn" onClick={this.toggleShowPassword} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} >
                                                    {showPassword ? "Hide" : "Show"}
                                                </Button>
                                            </FloatingLabel>
                                            <div className=''>
                                                <Button type="submit" className='w-100'>
                                                    Login
                                                </Button>
                                            </div>
                                            <div className="">
                                                <p>Belum punya akun..? <Link to="/register">Register Disini</Link></p>
                                            </div>
                                        </form>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                </div>
            </div>
        );
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;
