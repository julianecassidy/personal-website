import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ProjectButton from "../components/ProjectButton";
import img from "../images/photo3.jpg";
import "./Home.css";

/** Component for Home
 *  UI component for Home page image and text
 * 
 * Props:
 * - projects
 * 
 * State:
 * - displayImage
 * 
 * App -> Home
 */

function Home({ projects }) {
    const [displayImage, setDisplayImage] = React.useState(img);
    console.log("Home state: ", displayImage, "projects: ", projects);

    /** On hover, update display image to project image. */
    function changeDisplayImage(index) {
        console.debug("project at index", projects.projects[index.index])
        setDisplayImage(projects.projects[index.index].image);
    }

    return (
        <div className="Home">
            <div className="Home-block">
                <div className="Home-text">
                    <h3>Hello, I'm</h3>
                    <h1>Juliane Cassidy</h1>
                    <p>Software engineer, web designer<br></br> and content writer.</p>
                </div>
                <div className="Home-nav">
                    <Link to="/about"><button>Get to know me</button></Link>
                    <Link to="/portfolio"><button>Projects</button></Link>
                </div>
            </div>
            <div className="Home-image">
                <img src={displayImage} alt=""></img>
            </div>
            <div className="Home-projects">
                <h3>Projects</h3>
                <div>
                    {projects.projects.map((project, index) =>
                        <ProjectButton 
                        key={uuid()}
                        index={index} 
                        project={project}
                        changeDisplayImage={changeDisplayImage}
                        />
                        )}  
                </div>
            </div>
        </div>
    )

}

export default Home
export const Head = () => <title>Juliane Cassidy</title>;