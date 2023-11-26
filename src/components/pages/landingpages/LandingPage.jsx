import React from 'react';
import { contents } from '../../../utils/content';
import tomatto_garden_2 from '../../../assets/img/tomato-2.png';
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
            <div className='bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400'>
                <div className='justify-center items-center flex flex-col min-h-screen'>
                    <section className='lg:flex py-10 container mx-auto'>
                        <div className='w-1/2 px-5 py-5 rounded-lg'>
                            <div className='mt-24'>
                                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-sky-900">
                                    Solusi Mudah <br /><span>Untuk mendeteksi <br /> penyakit tomat</span>
                                </h1>
                                <p className='text-justify text-slate-600'>
                                    {contents[0].loginContent}
                                </p>
                                <div className='text-center mt-5 text-lg text-sky-900 flex gap-4 justify-center'>
                                    <LoginPage loginSuccess={this.onLoginSuccess}/>
                                    <RegisterPage />
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='w-full'>
                                <img src={tomatto_garden_2} alt="tomato" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default LandingPage;