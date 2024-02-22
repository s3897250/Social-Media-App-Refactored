import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContex";  // Globally Updated
import { userStateType, userStateErrorsType } from "../../../utils/InitialState";
import { UserForm } from "../../../utils/types/FormTypes";
import { Validation } from "./Validation";

import "./Signup.css";
import { Button, Card, Form } from 'react-bootstrap';

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

        if (ErrorsObj.validationSuccess) {

            // const response = await createSuper(userState);
        }

    }


    return (
        <div className="sign-up">

            <Form onSubmit={handleSubmit}>

                <Form.Group className="">
                    <Form.Control
                        onChange={(e) => handleChange("email", e.target.value)}
                        isInvalid={!!errors.emailError}
                        isValid={!errors.emailError && errors.emailError !== ''}
                        type="email"
                        placeholder="Email Address"
                    />

                    <Form.Control.Feedback type="invalid">{errors.emailError}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
                </Form.Group>

                {/* Interesting how coupled the code is. A change in the string
                            is interpreted by the ts compiler against the parameters of 
                            the "handleChange" function */}

                <Form.Group className="">
                    <Form.Control
                        onChange={(e) => handleChange("first_name", e.target.value)}
                        isInvalid={!!errors.first_nameError}
                        isValid={!errors.first_nameError && errors.first_nameError !== ''}
                        type="first_name"
                        placeholder="First Name"
                    />

                    <Form.Control.Feedback type="invalid">{errors.first_nameError}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="">
                    <Form.Control
                        onChange={(e) => handleChange("last_name", e.target.value)}
                        isInvalid={!!errors.last_nameError}
                        isValid={!errors.last_nameError && errors.last_nameError !== ''}
                        type="last_name"
                        placeholder="Last Name"
                    />

                    <Form.Control.Feedback type="invalid">{errors.last_nameError}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="">
                    <Form.Control
                        onChange={(e) => handleChange("password", e.target.value)}
                        isInvalid={!!errors.passwordError}
                        isValid={!errors.passwordError && errors.passwordError !== ''}
                        type="password"
                        placeholder="Password"
                    />

                    <Form.Control.Feedback type="invalid">{errors.passwordError}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
                </Form.Group>

                <div className="">
                    <Button type="submit" variant="success">Submit</Button>
                </div>

            </Form>


        </div>
    )
}

export default Signup;