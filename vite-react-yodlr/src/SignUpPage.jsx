/** The sign-up page. */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
    useEffect(() => {document.title="Yodlr Registration Portal"}, [])
    
    return <>
        <h1>Yodlr Registration Portal</h1>
        <SignUpForm />
        <p>
            <Link to="/admin">Admin Page</Link>
        </p>
    </>
}

export default SignUpPage