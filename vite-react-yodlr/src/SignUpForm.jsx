/** The form from the sign-up page */

import React, { useState } from "react";

import YodlrApi from "./api";

const blankForm = {
    email: "",
    firstName: "",
    lastName: "",
}

const SignUpForm = () => {
    const [formData, setFormData] = useState(blankForm);
    
    function handleChange(evt) {
        const { name, value }= evt.target;
        setFormData({...formData, [name]: value})
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        signup(formData);
    }
    
    async function signup(data) {
        await YodlrApi.registerUser(data);
        alert(`User created!\n
            email: ${data.email}, name:${data.firstName}, ${data.lastName}`);
        setFormData(blankForm);
    }
    
    return <form className="Signup-Form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} /><br/>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /><br/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /><br />
            <button type="submit">Submit</button>
        </form>
}

export default SignUpForm