import React from "react";
import "../css/Nav.css";
import { Link } from 'react-router-dom';

const Nav =()=> {
    return (
        <div>
            <div className="navContainer">
                <div className="mainNav">
                    <Link to="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div className="secondNav">
                    <Link className="Link" to="/about">
                        <a>About</a>
                    </Link>
                    <Link to="/Portofolio">
                        <a>Portofolio</a>
                    </Link>
                    <Link to="/">
                        <a>Contact</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav