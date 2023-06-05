import React from "react";
import "./AboutTimeline.css";

/** Component for AboutTimeline
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * About -> AboutTimeline
 */

function AboutTimeline() {
    return (
        <div className="AboutTimeline">
            <h2>How I Got Here</h2>
            <div className="AboutTimeline-line"></div>
            <div className="AboutTimeline-item">
                <h3 className="AboutTimeline-date">July 2023</h3>
                <div className="AboutTimeline-left">
                    <h4>Software Engineer & Teaching Assistant</h4>
                    <h5>Rithm School</h5>
                </div>
            </div>
            <div className="AboutTimeline-line"></div>
            <div className="AboutTimeline-item">
                <h3 className="AboutTimeline-date">February 2023</h3>
                <div className="AboutTimeline-right">
                    <h4>Software Engineering Student</h4>
                    <h5>Rithm School</h5>
                </div>
            </div>
            <div className="AboutTimeline-line"></div>
            <div className="AboutTimeline-item">
                <h3 className="AboutTimeline-date">August 2020</h3>
                <div className="AboutTimeline-left">
                    <h4>Web Designer & Digital Marketing Specialist</h4>
                    <h5>Great Leap Studios</h5>
                </div>
            </div>
            <div className="AboutTimeline-line"></div>
            <div className="AboutTimeline-item">
                <h3 className="AboutTimeline-date">January 2019</h3>
                <div className="AboutTimeline-right">
                    <h4>Database Coordinator</h4>
                    <h5>The Cleveland Orchestra</h5>
                </div>
            </div>
            <div className="AboutTimeline-line"></div>
            <div className="AboutTimeline-item">
                <h3 className="AboutTimeline-date">January 2016</h3>
                <div className="AboutTimeline-left">
                    <h4>Database Administration & Annual Giving</h4>
                    <h5>Broadway Sacramento</h5>
                </div>
            </div>
            <div className="AboutTimeline-line"></div>
            <div className="AboutTimeline-item">
                <h3 className="AboutTimeline-date">September 2012</h3>
                <div className="AboutTimeline-right">
                    <h4>UC San Diego</h4>
                    <h5>B.A. History</h5>
                </div>
            </div>
        </div>
    )
}

export default AboutTimeline;