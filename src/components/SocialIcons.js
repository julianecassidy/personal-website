import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaGit } from 'react-icons/fa';
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
            <p>
                Find me elsewhere:
                <div className="SocialIcons-icons">
                    <Link to="https://www.linkedin.com/in/julianemcassidy/">
                        <FaLinkedin />
                    </Link>
                    <Link to="https://github.com/julianecassidy">
                        <FaGithub />
                    </Link>
                </div>
            </p>
        </div>
    )
}

export default SocialIcons;