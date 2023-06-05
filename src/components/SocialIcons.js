import React from "react";
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
            <a href="https://www.linkedin.com/in/julianemcassidy/">
                <FaLinkedin />
            </a>
            <a href="https://github.com/julianecassidy">
                <FaGithub />
            </a>
        </div>
    )
}

export default SocialIcons;