import React from "react";
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
        <section className="Header">
            <div className="Header-image">
                <img src={img}></img>
            </div>
            <div className="Header-text">
                <h3>Hello, <br></br>
                    I'm</h3>
                <h1>Juliane Cassidy</h1>
                <p>Web developer, teaching assistant, and content writer.</p>
            </div>
        </section>
    )

}

export default Header;