import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContex";  // Globally Updated
import { userStateType, userStateErrorsType } from "../../../utils/InitialState";
import { UserForm } from "../../../utils/types/FormTypes";

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


    return (
        <div className="sign-up">

            <div className="sign-up-box">
                <input
                    name="username"
                    type="username"
                    onChange={(e) => handleChange("email", e.target.value)} />
            </div>

            <div className="sign-up-box">
            </div>

        </div>
    )
}

export default Signup;