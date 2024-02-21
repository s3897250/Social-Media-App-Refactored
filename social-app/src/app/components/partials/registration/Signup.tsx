import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContex";  // Globally Updated
import { userStateType, userStateErrorsType } from "../../../utils/InitialState";
import { UserForm } from "../../../utils/types/FormTypes";
import { Validation } from "./Validation";

import "./Signup.css";

/*
    Functions required:
        * Validation
        * User Context
        * JWT token submission (localstorage)
*/

function Signup() {

    const [userState, setUserState] = useState(userStateType);
    const [errors, setErrors] = useState(userStateErrorsType);
    const { setUser } = useContext(userContext);
    const navigate = useNavigate()

    // Where P is the key of the UserForm type, and value corresponding
    function handleChange<P extends keyof UserForm>(prop: P, value: UserForm[P]) {

        setUserState({ ...userState, [prop]: value })
        console.log(userState)
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        // Prevents submission of form
        event.preventDefault();

        const ErrorsObj = Validation(userState);

    }


    return (
        <div className="sign-up">

            <div className="sign-up-box">
                <input
                    name="email"
                    type="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </div>

            {/* Interesting how coupled the code is. A change in the string
                is interpreted by the ts compiler against the parameters of 
                the "handleChange" function */}

            <div className="sign-up-box">
                <input
                    name="first_name"
                    type="first_name"
                    onChange={(e) => handleChange("first_name", e.target.value)} />
            </div>

            <div className="sign-up-box">
                <input
                    name="last_name"
                    type="last_name"
                    onChange={(e) => handleChange("last_name", e.target.value)} />
            </div>

            <div className="sign-up-box">
                <input
                    name="password"
                    type="password"
                    onChange={(e) => handleChange("password", e.target.value)} />
            </div>



            <div className="sign-up-box">
            </div>

        </div>
    )
}

export default Signup;