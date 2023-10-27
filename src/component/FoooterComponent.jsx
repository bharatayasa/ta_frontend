import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
return (
        <div className='py-5'>
            <Container>
                <Row className='d-flex justify-content-beetween'>
                    <Col lg="5">
                        <h3 className='fw-bold'>Tomatify</h3>
                        <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem cum tempora tempore? Distinctio, ab tempore a officiis explicabo velit iusto praesentium quidem, recusandae, ipsa architecto.</p>
                    <div className='no mb-1 mt-4'>
                        <Link className='text-decoration-none'>
                            <i className='fa-brands fa-whatsapp'></i>
                            <p p className='m-0 ms-2'>+62121313232</p> 
                        </Link>
                    </div>
                    <div className='mail'>
                        <Link className='text-decoration-none'>
                            <i className='fa-regular fa-envelope'></i>
                            <p className='m-0 ms-2'>person@gmail.com</p> 
                        </Link>
                    </div>
                    </Col>
                    
                    <Col className='d-flex flex-column col-lg-2 col'>
                        <h5 className='fw-bold'>Menu</h5>
                        <Link className='text-decoration-none' to="">Home</Link>
                        <Link className='text-decoration-none' to="">News</Link>
                        <Link className='text-decoration-none' to="">About</Link>
                    </Col>
                    <Col lg="4" className='mt-lg-0 mt-5'>
                        <div className='social mt-3'>
                            <i className='fa-brands fa-facebook'></i>
                            <i className='fa-brands fa-instagram'></i>
                            <i className='fa-brands fa-twitter'></i>
                            <i className='fa-brands fa-linkedin'></i>
                            <i className='fa-brands fa-youtube'></i>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className='text-center px-md-0 px-3'>&copy; copyright {new Date().getFullYear()} by <span className='fw-bold'>Bharata,</span>  Allright reserve</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent;
