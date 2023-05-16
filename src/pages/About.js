import React from "react";
import { Link } from "react-router-dom";
import photo from "../images/photo2.jpg";
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
        <div className="About">
            <img className="About-image" src={photo} />
            <section className="About-bio">
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
                    Outside of coding, I like to spend time traveling, hiking, camping, 
                    and climbing - often with my dog along for the adventure. I am also 
                    a historical reenactor and you might spot me in Victorian garb.
                    Should coding not work out, I am seeking full time employement as
                    an ornamental hermit. If you have an estate that could use a hermit,
                    feel free to <Link to="http://julesharter.com/hire-a-hermit/">peruse
                    my proposal</Link>.
                </p>
            </section>
            {/* <section className="About-timeline">
                <h2>How I Got Here</h2>

            </section> */}
        </div>
    )
}

export default About;