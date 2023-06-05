import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import Layout from "../components/layout";
import highVolt from "../images/highvoltdigital.png";
import typewriter from "../images/typewriter.jpg";
import postcards from "../images/postcards.jpg";
import "./Portfolio.css";

/** Component for Portfolio
 * 
 * Props:
 * - projects
 * 
 * State:
 * - none
 * 
 * Routes -> Portfolio -> PortfolioItem
 */

function Portfolio({ projects }) {
    // console.debug("Portfolio projects", projects);

    return (
        <Layout>
        <div className="Portfolio">
            <h1>Portfolio</h1>
            {/* {projects.projects.length > 0 &&
                <div className="Portoflio-software">
                    <h2>Software Development</h2>
                    <div className="Potfolio-software-items">
                        {projects.projects.map(project => 
                            <PortfolioItem key={project.id} project={project} />
                        )}
                    </div>
                </div>
            } */}
            <div className="Portoflio-more-projects">
                <h2>More Projects</h2>
                <div className="Portfolio-web-design">
                    <img src={highVolt}></img>
                    <div className="Portfolio-project-desc">
                        <h3>Web Design</h3>
                        <p>Modern, intuitive, and attractive web designs built around a business's brand.</p>
                    </div>
                </div>
                <div className="Portfolio-dotted-line-right"></div>
                <div className="Portfolio-content">
                    <img src={typewriter}></img>
                    <div className="Portfolio-project-desc">
                        <h3>Content Writing and SEO</h3>
                        <p>Engaging, informative, and sometimes humorous content.</p>
                    </div>
                </div>
                <div className="Portfolio-dotted-line-left"></div>
                <div className="Portfolio-other">
                    <img src={postcards}></img>
                    <div className="Portfolio-project-desc">
                        <h3>Other Projects</h3>
                        <p>Some coding related, many not.</p>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Portfolio;