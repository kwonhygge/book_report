import React from "react";
import App from "../../App"
import {Link} from "react-router-dom";
import "./Header.css";

function Header(){
    return(
            <header>
                <Link to="/" style={{textDecoration:"none"}}><h1>읽고</h1></Link>
            </header>
    );
}

export default Header;