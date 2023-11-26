import React from "react";
import {useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import LoginInput from "../../loginregiscomponents/LoginInput";
import { login } from "../../../utils/api";

function LoginPage({loginSuccess}) {
    const navigate = useNavigate();

    async function onLogin({username, password}) {
        const {error, data } = await login({username, password}); 

        if (!error) {
            loginSuccess(data);
            navigate('/')
            window.location.reload();
        }
    }

    return(
        <div>
            <section>
                <LoginInput login={onLogin}/>
            </section>
        </div>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage; 
