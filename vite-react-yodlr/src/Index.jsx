/** copy of the index.html page from the provided sample code */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
    useEffect(() => {document.title="Yodlr Design Challenge"}, [])
    
    return <>
    <h1>Yodlr Design Challenge</h1>
    <p>
      <Link to="/signup">Registration Page</Link><br/>
      <Link to="/admin">Admin Page</Link>
    </p></>
}

export default Index