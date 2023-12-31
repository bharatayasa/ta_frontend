import React from 'react';
import { contents } from '../../../utils/content';
import tomatto_garden_2 from '../../../assets/img/tomat_landingpage.png';
import LoginPage from '../loginregispages/LoginPage';
import RegisterPage from '../loginregispages/RegisterPage';
import { putAccessToken, getUserLogged } from '../../../utils/api';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        this.setState({
            authedUser: data,
        });
    }

    render() {
        return (
            <div>
                <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400'>
                    <div className='items-center flex min-h-screen'>
                        <section className='lg:flex lg:py-10 container lg:px-0 lg:mx-auto lg:gap-20 px-7'>

                            <div className='lg:w-1/2 py-5 rounded-lg'>
                                <div className='mt-24 items-center'>
                                    <div className='px-0 lg:px-0'>
                                        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-sky-900 animate__animated animate__fadeInUp">
                                            Ketuhui Penyakit <br /><span>Tomatmu Bersama <br />Tomatify</span>
                                        </h1>
                                    </div>

                                    <p className='text-justify text-slate-600 animate__animated animate__fadeInUp leading-relaxed'>
                                        {contents[0].loginContent}
                                    </p>
                                    <div className='mt-5 text-lg text-sky-900 flex gap-4 justify-center'>
                                        <LoginPage loginSuccess={this.onLoginSuccess}/>
                                        <RegisterPage />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='w-full'>
                                    <img src={tomatto_garden_2} alt="tomato" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
