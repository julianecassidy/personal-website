import { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import "./MobileNav.css";

/** Component for MobileNav
 *  UI element for mobile navigation pane.
 * 
 * Props:
 * - none
 * 
 * State:
 * - menuOpen: boolean for whether the menu should show
 * 
 * App -> MobileNav
 */
function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    console.debug("MobileNav");

    /** Keep menuOpen in sync with menu state. */
    function toggleMenuState(state) {
        setMenuOpen(state.isOpen);
    }

    /** Close menu. */
    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <Menu
            right
            isOpen={menuOpen}
            onStateChange={(state) => toggleMenuState(state)}
        >
            <div className="MobileNav">
                <div className="MobileNav-item">
                    <Link to="/about" onClick={closeMenu}>About</Link>
                </div>
                <div className="MobileNav-item">
                    <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
                </div>
                <div className="MobileNav-item">
                    <Link to="/blog" onClick={closeMenu}>Blog</Link>
                </div>
            </div>
        </Menu>
    )
}

export default MobileNav;