import React from "react";
import { Link } from "react-router-dom";
import img from "../images/photo3.jpg";
import "./Home.css";

/** Component for Home
 *  UI component for Home page image and text
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * App -> Home
 */

function Home() {
    return (
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
                <img src={img}></img>
            </div>
        </div>
    )

}

export default Home
export const Head = () => <title>Juliane Cassidy</title>;