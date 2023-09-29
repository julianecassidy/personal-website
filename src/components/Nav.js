import { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import "./Nav.css";
import MobileNav from "./MobileNav";

/** Component for Nav
 *  UI element for navigation bar.
 * 
 * Props:
 * - none
 * 
 * State:
 * - hambergerOpen: boolean
 * 
 * App -> Nav
 */

function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    /** Change hamburgerOpen to opposite of current value. */
    function toggleHamburger() {
        setHamburgerOpen(hamburgerOpen => !hamburgerOpen);
    }

    if (hamburgerOpen) {
        return <MobileNav toggle={toggleHamburger} />
    }

    return (
        <nav className="Nav">
            <NavLink className="Nav-home" to="/">Juliane Cassidy</NavLink>
            <div className="Nav-right">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
            <div className="Nav-social">
                <SocialIcons />
            </div>
            <div className="Nav-hamburger" onClick={toggleHamburger}>
                <div className="Nav-hamburger-line"></div>
                <div className="Nav-hamburger-line"></div>
                <div className="Nav-hamburger-line"></div>
            </div>
        </nav>

    );
}

export default Nav;