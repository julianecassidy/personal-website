import { NavLink } from "react-router-dom";
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
    console.debug("Nav");

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
        </nav>

    );
}

export default Nav;