import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { userLoginStateErrorsInitial, userStateLoginInitial, userStateLoginType } from '../../../utils/InitialState'
import { UserLoginForm } from '../../../utils/types/FormTypes'
import { Button, Card, Form } from 'react-bootstrap';
import { loginUser } from "../../../services/axiosService";

import "./Signin.css";

function Signin() {

    const [userLoginState, setUserLoginState] = useState(userStateLoginInitial)
    const [errors, setErrors] = useState(userLoginStateErrorsInitial)

    const navigate = useNavigate()


    function handleChange<P extends keyof UserLoginForm>(prop: P, value: UserLoginForm[P]) {

        setUserLoginState({ ...userLoginState, [prop]: value })
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();


        try {
            const response = await loginUser(userLoginState);

            console.log(response)
            navigate("/");

        } catch (error: any) {
            errors.emailError = "Email might not be correct";
            errors.passwordError = "Password might not be correct";

            setErrors(errors);
        }

    }


    return (
        <div>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="">
                    <Form.Control
                        onChange={(e) => handleChange("email", e.target.value)}
                        type="email"
                        isInvalid={!!errors.emailError}  // contains error string, therefore true
                        placeholder="Email Address"
                    />

                    <Form.Control.Feedback type="invalid">{errors.emailError}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="">
                    <Form.Control
                        onChange={(e) => handleChange("password", e.target.value)}
                        type="password"
                        isInvalid={!!errors.passwordError}
                        placeholder="Password"
                    />

                    <Form.Control.Feedback type="invalid">{errors.passwordError}</Form.Control.Feedback>
                </Form.Group>

                <div className="">
                    <Button type="submit" variant="success">Submit</Button>
                </div>

            </Form>


        </div>
    )


}

export default Signin