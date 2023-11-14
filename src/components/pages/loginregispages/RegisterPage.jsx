import React from "react";
import {useNavigate } from "react-router-dom";
import RegisterInput from "../../loginregiscomponents/RegisterInput.jsx";
import { register } from "../../../utils/api";

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user){
        const { error } = await register(user);
        if (!error) {
            navigate('/')
        }
    }

    return(
        <section>
            <RegisterInput register={onRegisterHandler} />
        </section>
    )
}

export default RegisterPage; 
