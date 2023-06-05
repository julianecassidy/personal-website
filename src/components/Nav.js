import React from "react";
import { Link } from "gatsby";
import SocialIcons from "./SocialIcons";
import "./Nav.css";

/** Component for Nav
 *  UI element for navigation bar.
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * App -> Nav
 */

function Nav() {

    return (
        <nav className="Nav">
            <Link className="Nav-home" to="/">Juliane Cassidy</Link>
            <div className="Nav-right">
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                {/* <NavLink to="/blog">Blog</NavLink> */}
            </div>
            <div className="Nav-social">
                <SocialIcons />
            </div>
        </nav>

    );
}

export default Nav;