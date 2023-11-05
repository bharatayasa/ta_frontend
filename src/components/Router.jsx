import React from "react";
import { Route, Routes } from "react-router-dom";

// Users Page
import NavbarUsers from "./usercomponents/NavbarUser";
import HomePage from "./pages/userpages/HomePage";
import PredictComponent from "./predictcomponents/PredictComponent";
import HistoryPage from "./pages/userpages/HistoryPage"
import AboutPage from "./pages/userpages/AboutPage";
import FooterComponent from "./FooterComponent";

// Admin Page
import NavbarAdmin from "./admincomponents/NavbarAdmin";
import UsersData from "./pages/adminpages/UsersData";
import PredictsData from "./pages/adminpages/PredictsData";

// Login Register 
import LoginPage from "./pages/loginregispages/LoginPage";
import RegisterPage from "./pages/loginregispages/RegisterPage";

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
        try {
            const { data } = await getUserLogged();
            this.setState({
                authedUser: data,
                initializing: false,
            });
        } catch (error) {
            this.setState({
                initializing: false,
            });
        }
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        this.setState({
            authedUser: data,
        });
    }

    onLogout() {
        this.setState({
            authedUser: null,
        });
        putAccessToken('');
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <Routes>
                    <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            );
        }

        const isAdmin = this.state.authedUser.role === 'admin';

        if (isAdmin) {
            return (
                <div>
                    <header>
                        <NavbarAdmin logout={this.onLogout} name={this.state.authedUser.name} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<UsersData />} />
                            <Route path="/hasil/prediksi" element={<PredictsData />} />
                        </Routes>
                    </main>
                </div>
            );
        } else {
            return(
                <div>
                    <header>
                        <NavbarUsers logout={this.onLogout} name={this.state.authedUser.name} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />}/>
                            <Route path="/predict" element={<PredictComponent />}/>
                            <Route path="/history" element={<HistoryPage />}/>
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
