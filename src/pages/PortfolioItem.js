import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={project.website} target="_blank" rel="noopener noreferrer">
                <img src={project.image}></img>
            </Link>
            <div>
                <h3 className="PortfolioItem-name">{project.name}</h3>
                <p className="PortfolioItem-language">
                    Language: {project.language}
                </p>
                <div className="PortfolioItem-description">
                    {project.description}
                </div>
                <div className="PortfolioItem-links">
                    <Link to={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </Link>
                    <Link to={project.website} target="_blank" rel="noopener noreferrer">
                        Demo
                    </Link>
                </div>
            </div>
    </div>
    )
}

export default PortfolioItem;