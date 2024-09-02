import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUpPage from "./SignUpPage";
import AdminPage from "./AdminPage";

/** handle everything with client-side routing */

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Index />}/>
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
    </BrowserRouter>
};

export default Router;