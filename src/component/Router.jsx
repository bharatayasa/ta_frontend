import React from "react";
import { Route, Routes } from "react-router-dom";
// page user
import NavbarComponent from "./NavbarComponent";
import HomePage from "../pages/HomePage";
import HistoryPage from "../pages/HistoryPage";
import NewsPage from "../pages/NewsPage";
import AboutPage from "../pages/AboutPage";
import FooterComponent from "./FoooterComponent";
// page admin
import NavbarAdmin from "./NavbarAdmin";
import DataUser from "../pages/DataUser";
import PrediksiPage from "../pages/PrediksiPage";
import UpdateUser from "./usercomponent/UpdateUser";
// login register
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

import { getUserLogged, putAccessToken } from "../utils/api";

class Router extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
            initializing: true,
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();
        this.setState(() => {
            return {
                authedUser: data,
                initializing: false
            };
        });
    }

    async onLoginSuccess({ accessToken }) {
        // console.log(accessToken);

        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        this.setState(() => {
            return {
                authedUser: data,
            };
        });
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null
            }
        });
        putAccessToken('');
    }

    render () {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <div>
                    <main>
                    <Routes>
                        <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                    </main>
                </div>
            )
        }

        const isAdmin = this.state.authedUser.role === 'admin';

        if (isAdmin) {
            return(
                <div>
                    <header>
                        <NavbarAdmin logout={this.onLogout} name={this.state.authedUser.name} />
                    </header>
                    <main>
                    <Routes>
                        <Route path="/" element={<DataUser />} />
                        <Route path="/hasil/prediksi" element={<PrediksiPage />} />
                        <Route path="/update/user" element={<UpdateUser />} />
                    </Routes>
                    </main>
                </div>
            )
        }else{
            return(
                <div>
                    <header>
                        <NavbarComponent logout={this.onLogout} name={this.state.authedUser.name} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />}/>
                            <Route path="/history" element={<HistoryPage />}/>
                            <Route path="/news" element={<NewsPage />}/>
                            <Route path="/about" element={<AboutPage />}/>
                        </Routes>
                    </main>
                    <FooterComponent />
                </div>
            )
        }
    }
}

export default Router;
