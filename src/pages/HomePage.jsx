import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeroImage from '../assets/img/kebun_tomat.png'

function HomePage() {
    return(
        <div>
            <header className='w-100 min-vh-100 d-flex align-items-center py-5'>
                <Container>
                <Row className='header-box d-flex align-items-center pt-lg-5'>
                    <Col lg="6" >
                    <h1 className='mb-4 animate__animated animate__fadeInUp'>
                        Ketahui <br /> <span>Penyakit Tomatmu</span> <br />bersama kami
                    </h1>
                    <p className='mb-4 animate__animated animate__fadeInUp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quibusdam nam cumque excepturi qui dicta!</p>
                    <button className='btn btn-danger btn-lg rounded me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp'>Prediksi sekarang</button>
                    <button className='btn btn-outline-danger btn-lg rounded ms-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp'>Tutorial Prediksi</button>
                    </Col>

                    <Col lg="6" className='pt-lg-0 pt-5'>
                    <img style={{ width: '100%' }}  src={HeroImage}/>
                    </Col>
                </Row>
                </Container>
            </header>

            <div className='kelas w-100 min-vh-100' data-aos="fade-up" data-aos-duration="2000">
                <Container>
                <Row>
                    <Col>
                    <h1 className='text-center fw-bold'>prediksi sekarang</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
                <Row>
                    <Col className='text-center'>
                    <button className='btn btn-success rounded-5 btn-lg'>prediksi sekarang
                    <i className='fa-solid fa-chevron-right ms-1'></i>
                    </button>
                    </Col>
                </Row>
                </Container>
            </div> 
        </div>
    )
}

export default HomePage;
