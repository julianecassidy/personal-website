import React from "react";
import { NavLink } from "react-router-dom";

/** Component for Nav
 *  UI element for navigation bar.
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * Home -> Nav
 */

function Nav() {

    return (
        <nav className="Nav">
            <NavLink className="Nav-home" to="/">Juliane Cassidy</NavLink>
            <div className="Nav-right">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
        </nav>
    );
}

export default Nav;