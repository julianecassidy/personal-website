import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.css";

/** Component for MobileNav
 *  UI element for mobile navigation pane.
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * Nav -> MobileNav
 */


function MobileNav({ toggle }) {

    /** Handle click of "x" button. */
    function handleClick() {
        toggle();
    }

    return (
        <div className="MobileNav">
            <div className="MobileNav-exit" onClick={handleClick}>x</div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    )
}

export default MobileNav;