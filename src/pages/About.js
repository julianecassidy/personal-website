import React from "react";
import { Link } from "react-router-dom";
import AboutTimeline from "./AboutTimeline";
import img from "../images/photo2.jpg";
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
                        I am a software engineer and teaching assistant at Rithm School.
                        My focus is on building and maintaining scalable and secure web
                        apps with Node.js, React, and Python.
                    </p>
                    <p>
                        I am an enthusiastic problem solver and advocate for positive
                        change. In my work, I have a particular knack for seeking out
                        efficiencies and bring experience that combines technical skills,
                        a strong writing ability, and extensive customer service, allowing
                        me to connect with a variety of people.
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
                        spot me in Victorian garb. Should coding not work out, I am
                        seeking full time employement as an ornamental hermit. If you
                        have an estate that could use a hermit, feel free to
                        <Link to="http://julesharter.com/hire-a-hermit/"> peruse
                            my proposal</Link>.
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
            <p className="About-resume">You can also download my resume <Link to="pdf">here</Link>.</p>
        </div>
    )
}

export default About;