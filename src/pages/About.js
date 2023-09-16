import React from "react";
import { Link } from "react-router-dom";
import AboutTimeline from "../components/AboutTimeline";
import img from "../images/photo2.jpg";
import resume from "../resume.pdf";
import "./About.css";

/** Component for About
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * Routes -> About
 */

function About() {
    return (
        <div>
            <div className="About">
                <div className="About-bio">
                    <h2>Who I Am</h2>
                    <p>
                        I'm a software engineer and teaching assistant at Rithm School.
                        Working with a team of instructors, I teach a fast-paced full 
                        stack software development curriculum including JavaScript, 
                        Python, and SQL.
                    </p>
                    <p>
                        In my work, I am an enthusiastic problem solver always looking 
                        for the next learning opportunity. My favorite days are those 
                        that involve troubleshooting a bug. I bring a curiosity to 
                        working in teams, creating space for multiple ideas and exploration. 
                        I also prioritize self-sufficiency and independent learning.
                    </p>
                    <p>
                        Before transitioning into software engineering, I worked in web
                        design, server management, and content marketing, helping companies
                        build their digital presence. I also worked in database administration
                        for nonprofits where I promoted strategies to better leverage CRMs,
                        data hygiene, data security, and training.
                    </p>
                    <p>
                        I am Denver, CO-based but usually traveling - often with my
                        dog along for the adventure. I also spend time hiking, camping,
                        and climbing. I am a historical reenactor and you might
                        spot me in Victorian garb.
                    </p>
                </div>
                <img className="About-image" src={img} alt="" />
                <div className="About-image-background"></div>
                <div>
                </div>
            </div>
            <hr className="About-hr"></hr>
            <AboutTimeline />
            <hr className="About-hr"></hr>
            <p className="About-resume">You can see my resume <Link to={resume} target="blank">here</Link>.</p>
        </div>
    )
}

export default About;