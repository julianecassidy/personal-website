import React from "react";

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
            <div className="Header-text">
                <h3>Hello, I'm</h3>
                <h1>Juliane Cassidy</h1>
                <p>Web developer, teaching assistant, and content writer.</p>
            </div>
            <div className="Header-image">
                <img src=""></img>
            </div>
            <section className="Header-connect">
                <div>
                    <h3>Find me elsewhere on the web</h3>
                    <div className="Header-social-icons"></div>
                </div>
            </section>
        </section>
    )

}

export default Header;