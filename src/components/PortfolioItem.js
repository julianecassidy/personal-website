import React from "react";
import "./PortfolioItem.css";

/** Component for PortfolioItem
 * 
 * Props:
 * - project
 * 
 * State:
 * - none
 * 
 * Portfolio -> PortfolioItem
 */

function PortfolioItem({ project }) {

    console.debug("PortfolioItem with project: ", project);

    return (
        <div className="PortfolioItem">
            <a href={project.website} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt=""></img>
            </a>
            <div>
                <h3 className="PortfolioItem-name">{project.name}</h3>
                <p className="PortfolioItem-language">
                    Language: {project.language}
                </p>
                <div className="PortfolioItem-description">
                    {project.description}
                </div>
                <div className="PortfolioItem-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                </div>
            </div>
    </div>
    )
}

export default PortfolioItem;