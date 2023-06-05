import React from "react";
import { Link } from "gatsby";
import { v4 as uuid } from "uuid";
import ProjectButton from "../components/ProjectButton";
import Layout from "../components/layout";
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
 * App -> Home -> ProjectButton
 */

function Home({ projects }) {
    const [displayImage, setDisplayImage] = React.useState(img);
    console.log("Home state: ", displayImage, "projects: ", projects);

    /** On hover, update display image to project image. */
    function changeDisplayImage(index) {
        console.debug("project at index", projects[index.index])
        setDisplayImage(projects[index.index].image);
    }

    return (
        <Layout>
        <div className="Home">
            <div className="Home-block">
                <div className="Home-text">
                    <h3>Hello, I'm</h3>
                    <h1>Juliane Cassidy</h1>
                    <p>Web developer, teaching assistant,<br></br> and content writer.</p>
                </div>
                <div className="Home-nav">
                    <Link to="/about"><button>Get to know me</button></Link>
                    <Link to="/portfolio"><button>Projects</button></Link>
                </div>
            </div>
            <div className="Home-image">
                <img src={displayImage}></img>
            </div>
            {projects && projects.length > 0 && (
            <div className="Home-projects">
                <h3>Projects</h3>
                <div>
                    {projects.map((project, index) =>
                        <ProjectButton 
                        key={uuid()}
                        index={index} 
                        project={project}
                        changeDisplayImage={changeDisplayImage}
                        />
                        )}  
                </div>
            </div>)}
        </div>
        </Layout>
    )

}

export default Home
export const Head = () => <title>Juliane Cassidy</title>;