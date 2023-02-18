import React from "react";
import "../css/Nav.css";
import { Link, NavLink } from 'react-router-dom';

const Nav =()=> {

    let activeStyle = {
        textDecoration:"underline",
    };

    return (
            <div className="navContainer">
                <div className="nav-content">
                <div className="mainNav">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                </div>
                <div className="secondNav">
                    <NavLink className="Link" to="/about">
                        <p>About</p>
                    </NavLink>
                    <NavLink to="/Portofolio">
                        <p>Project</p>                    
                    </NavLink>
                    <NavLink to="/">
                        <p>Contact</p>
                    </NavLink>
                </div>
                </div>
            </div>
    )
}

export default Nav