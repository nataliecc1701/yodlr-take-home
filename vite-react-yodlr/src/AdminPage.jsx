/** the admin page */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YodlrApi from "./api";

import Loading from "./Loading"
import UserCard from "./UserCard";

const AdminPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {document.title="Yodlr Admin Page"}, [])
    
    useEffect(() => {
        async function listUsers() {
            const res = await YodlrApi.getUsers();
            setUsers(res);
            setIsLoading(false);
        }
        
        listUsers();
    }, [])
    
    if (isLoading) return <Loading />
    
    return <><h1>Yodlr Admin Page</h1>
        <ul className="userList">
            {users.map(user => <UserCard key={user.id} user={user} />)}
        </ul>
        </>
}

export default AdminPage;