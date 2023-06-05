import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './SocialIcons.css';

/** Component for SocialIcons
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * Nav -> SocialIcons
 */

function SocialIcons() {

    return (
        <div className="SocialIcons">
            <Link to="https://www.linkedin.com/in/julianemcassidy/">
                <FaLinkedin />
            </Link>
            <Link to="https://github.com/julianecassidy">
                <FaGithub />
            </Link>
        </div>
    )
}

export default SocialIcons;