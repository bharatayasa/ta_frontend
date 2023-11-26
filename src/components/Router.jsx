import React from "react";
import { Route, Routes } from "react-router-dom";

// Users Page
import NavbarUsers from "./usercomponents/NavbarUser.jsx";
import HomePage from "./pages/userpages/HomePage.jsx";
import PredictPage from "./pages/predict/PredictPage.jsx";
import HistoryPage from "./pages/userpages/HistoryPage.jsx"
import AboutPage from "./pages/userpages/AboutPage.jsx";
import FooterComponent from "./FooterComponent.jsx";

// Admin Page
import NavbarAdmin from "./admincomponents/NavbarAdmin.jsx";
import UsersData from "./pages/adminpages/UsersData.jsx";
import PredictsData from "./pages/adminpages/PredictsData.jsx";

// landing pages
import LandingPage from "./pages/landingpages/LandingPage.jsx";

import { getUserLogged, putAccessToken } from "../utils/api.js";

class Router extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
            initializing: true,
        };

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
                    <Route path="/*" element={<LandingPage />} />
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
