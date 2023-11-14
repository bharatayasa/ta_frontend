import React from "react";
import { Route, Routes } from "react-router-dom";

// Users Page
<<<<<<< HEAD
import NavbarUsers from "./usercomponents/NavbarUser.jsx";
import HomePage from "./pages/userpages/HomePage.jsx";
import PredictPage from "./pages/predict/PredictPage.jsx";
import HistoryPage from "./pages/userpages/HistoryPage.jsx"
import AboutPage from "./pages/userpages/AboutPage.jsx";
import FooterComponent from "./FooterComponent.jsx";
=======
import NavbarUsers from "./usercomponents/NavbarUser";
import HomePage from "./pages/userpages/HomePage";
import PredictPage from "./pages/predict/PredictPage";
import HistoryPage from "./pages/userpages/HistoryPage"
import AboutPage from "./pages/userpages/AboutPage";
import FooterComponent from "./FooterComponent";
>>>>>>> 11bb46e90940d3c5cf5b016e914613aeac393dae

// Admin Page
import NavbarAdmin from "./admincomponents/NavbarAdmin.jsx";
import UsersData from "./pages/adminpages/UsersData.jsx";
import PredictsData from "./pages/adminpages/PredictsData.jsx";

// Login Register 
import LoginPage from "./pages/loginregispages/LoginPage.jsx";
import RegisterPage from "./pages/loginregispages/RegisterPage.jsx";

import { getUserLogged, putAccessToken } from "../utils/api.js";

// import tes from "./tes";

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
                            <Route path="/predict" element={<PredictPage />}/>
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
