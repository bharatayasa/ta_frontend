import React from "react";
import PropTypes from 'prop-types';
import LoginInput from "../component/LoginInput";
import { login } from "../utils/api";

function LoginPage({loginSuccess}) {
    async function onLogin({username, password}) {
        const {eror, data } = await login({username, password}); 

        if (!eror) {
            loginSuccess(data); 
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
