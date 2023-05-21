import React from "react";
import { Link } from "react-router-dom";
import img from "../images/photo3.jpg";
import "./Header.css";

/** Component for Header
 *  UI component for header image and text
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * Home -> Header
 */

function Header() {
    return (
        <div className="Header">
            <div className="Header-image">
                <img src={img}></img>
            </div>
            <div className="Header-block">
                <div className="Header-text">
                    <h3>Hello, I'm</h3>
                    <h1>Juliane Cassidy</h1>
                    <p>Web developer, teaching assistant, and content writer.</p>
                </div>
                <div className="Header-nav">
                    <Link to="/about"><button>Get to know me</button></Link>
                    <Link to="/portfolio"><button>Check out my projects</button></Link>
                </div>
            </div>
        </div>
    )

}

export default Header;