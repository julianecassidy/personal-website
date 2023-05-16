import React from "react";
import PortfolioItem from "./PortfolioItem";

/** Component for Portfolio
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * Routes -> Portfolio
 */

function Portfolio() {

    return (
        <div className="Portfolio">
            <div className="Portfolio-1">
                <h3>Jobly</h3>
                <p>Full stack job search web app with a Node.js and Express backend and React front end.</p>
                <p>Project Repo</p>
            </div>
            <div className="Portfolio-2">
                <h3>Warbler</h3>
                <p>Pythhon and Flask social media platform.</p>
                <p>Project Repo</p>
            </div>
            <div className="Portfolio-3">
                <h3>Web Design</h3>
                <p>Modern, intuitive, and attractive web designs built around a business's brand.</p>
            </div>
            <div className="Portfolio-4">
                <h3>Content Writing and SEO</h3>
                <p>Engaging, informative, and sometimes humorous content.</p>
            </div>
            <div className="Portoflio-5">
                <h3>Other Projects</h3>
                <p>Some coding related, many not.</p>
            </div>
        </div>
    )
}

export default Portfolio;