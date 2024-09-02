import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUpPage from "./SignUpPage";
import AdminPage from "./AdminPage";
import UserForm from "./UserForm";

/** handle everything with client-side routing */

const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Index />}/>
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/admin" element={<AdminPage />} />
            <Route path="/admin/id" element={<UserForm />} />
        </Routes>
    </BrowserRouter>
};

export default AppRouter;