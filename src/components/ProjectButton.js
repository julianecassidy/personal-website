import React from "react";
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

function ProjectButton({ index, project, changeDisplayImage }) {
    // console.debug("ProjectButton", project);

    /** Handle hover over a button; take the index and call changeDisplayImage */
    function handleHover(index) {
        changeDisplayImage(index);
    }

    if (project) {
        return (
            <div className="ProjectButton">
                <a href={project.github}
                    target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => handleHover({ index })}>
                    <div className="ProjectButton-button">
                        <h4>{project.name}</h4>
                    </div>
                </a>
                <hr></hr>
            </div>
        )
    } else return;

}

export default ProjectButton;