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
            <img src=""></img>
            <div>
                <h3>{project.name}</h3>
                <p className="PortfolioItem-language">
                    Language: {project.language}
                </p>
                <p className="PortfolioItem-description">{project.description}</p>
            </div>
    </div>
    )
}

export default PortfolioItem;