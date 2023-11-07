import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeroImage from '../../../assets/img/kebun_tomat.png'

function HomePage() {
    return(
        <div>
            <header className='mx-auto bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-vh-100'>
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
        </div>
    )
}

export default HomePage;
