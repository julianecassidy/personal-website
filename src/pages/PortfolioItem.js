import React from "react";

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

    return (
        <div className="PortfolioItem">
            <img src=""></img>
            <div>
                <h3>{project.repo}</h3>
                <p className="PortfolioItem-language">
                    Language: {project.language}
                </p>
                <p>{project.description}</p>
            </div>
    </div>
    )
}

export default PortfolioItem;