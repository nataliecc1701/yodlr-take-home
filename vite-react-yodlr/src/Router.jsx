import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUpPage from "./SignUpPage";

/** handle everything with client-side routing */

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Index />}/>
            <Route exact path="/signup" element={<SignUpPage />} />
        </Routes>
    </BrowserRouter>
};

export default Router;