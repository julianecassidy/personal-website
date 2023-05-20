import React from "react";
import PortfolioItem from "./PortfolioItem";
import highVolt from "../images/highvoltdigital.png";

/** Component for Portfolio
 * 
 * Props:
 * - projects
 * 
 * State:
 * - none
 * 
 * Routes -> Portfolio
 */

function Portfolio({ projects }) {

    return (
        <div className="Portfolio">
            {/* {projects.map(project => {
                <PortfolioItem key={project.repo} project={project} /
            })} */}
            <div className="Portfolio-web-design">
                <img src={highVolt}></img>
                <div className="Portfolio-project-desc">
                    <h3>Web Design</h3>
                    <p>Modern, intuitive, and attractive web designs built around a business's brand.</p>
                </div>
            </div>
            <div className="Portfolio-content">
                <img src=""></img>
                <div className="Portfolio-project-desc">
                    <h3>Content Writing and SEO</h3>
                    <p>Engaging, informative, and sometimes humorous content.</p>
                </div>
            </div>
            <div className="Portoflio-other">
            <img src=""></img>
                <div className="Portfolio-project-desc">
                    <h3>Other Projects</h3>
                    <p>Some coding related, many not.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;