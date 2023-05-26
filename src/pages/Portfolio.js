import React from "react";
import ProjectApi from "../ProjectAPI";
import PortfolioItem from "./PortfolioItem";
import highVolt from "../images/highvoltdigital.png";
import typewriter from "../images/typewriter.jpg";
import postcards from "../images/postcards.jpg";
import "./Portfolio.css";
import "./PortfolioItem.css";

const PROJECTS_TO_DISPLAY = ['friender-frontend', 'friender-backend', 'react-jobly', 'warbler'];
const SCREENSHOTS = [];

/** Component for Portfolio
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * Routes -> Portfolio -> PortfolioItem
 */

function Portfolio() {

    const [projects, setProjects] = React.useState([]);
    console.debug("Portfolio state projects: ", projects);

    /** Fetches repo details on page load. */
    React.useEffect(function fetchProjectDataOnLoad () {
        /** Get project data from GitHub API and set state with array of projects. */
        async function getProjectsFromApi() {
            console.debug("getProjectsFromApi");
            try {
                const projectsData = await ProjectApi.getRepos(PROJECTS_TO_DISPLAY);
                setProjects(projectsData);
            } catch (err) {
                console.log(err);
                setProjects([]);
            }
        } 
        getProjectsFromApi();
    }, []);

    return (
        <div className="Portfolio">
            <h1>Portfolio</h1>
            {projects.length > 0 &&
                <div className="Portoflio-software-items">
                    <h2>Software Development</h2>
                    {projects.map(project => 
                        <PortfolioItem key={project.id} project={project} />
                    )}
                </div>
            }
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
    )
}

export default Portfolio;