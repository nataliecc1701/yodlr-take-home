/** The form to edit (or delete) a user. Accessed from the admin page */

import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom";

import YodlrApi from "./api";
import Loading from "./Loading";

const UserForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({})
    
    useEffect(() => {
        async function getUser(id) {
            let res;
            try {
                res = await YodlrApi.getUser(id);
                setFormData(res);
                setIsLoading(false);
            }
            catch (err) {
                alert(err);
                navigate("/admin")
            }
        }
        
        getUser(id)
    }, [])
    
    function handleChange(evt) {
        const { name, value }= evt.target;
        setFormData({...formData, [name]: value})
    }
    
    function handleCheckbox(evt) {
        const { name, checked } = evt.target;
        const state = checked ? "active" : "pending";
        setFormData({...formData, [name]: state})
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        editUser(formData);
    }
    
    async function editUser(data) {
        setIsLoading(true);
        try {
            const res = await YodlrApi.updateUser(id, data);
            setFormData(res);
        }
        finally {
            setIsLoading(false)
        }
    }
    
    function handleDelete(evt) {
        evt.preventDefault();
        if (confirm("Confirm user deletion?") == true) {
            deleteUser();
        }
    }
    
    async function deleteUser() {
        const res = await YodlrApi.deleteUser(id);
        alert(res);
        navigate("/admin")
    }
    
    if (isLoading) return <Loading />
    
    return <form className="UserForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} /><br/>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /><br/>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /><br />
        <label htmlFor="state">Active?</label>
        <input type="checkbox" name="state" checked={formData.state == "active"} onChange={handleCheckbox} /><br />
        <button type="submit">Submit</button>
        <button onClick={handleDelete}>Delete User</button>
    </form>
}

export default UserForm;