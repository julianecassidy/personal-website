import React from "react";
import { Link } from "react-router-dom";
import "./ProjectButton.css";

/** Component for ProjectButton
 * 
 * Props:
 * - index, project, changeDisplayImage
 * 
 * State:
 * - none
 * 
 * Home -> ProjectButton
 */

function ProjectButton ({ index, project, changeDisplayImage }) {
    // console.debug("ProjectButton", project);

    /** Handle hover over a button; take the index and call changeDisplayImage */
    function handleHover(index) {
        changeDisplayImage(index);
    }

    return (
        <div className="ProjectButton">
            <Link 
                  to={project.github} 
                  target="_blank" rel="noopener noreferrer"
                  onMouseEnter={() => handleHover({index})}>
                    <div className="ProjectButton-button">
                        <h4>{project.name}</h4>
                    </div>
                </Link>
                <hr></hr>
        </div>
    )

}

export default ProjectButton;