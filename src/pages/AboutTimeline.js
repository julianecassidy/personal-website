import React from "react";

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
            <div className="AboutTimeline-item">
                <h2 className="AboutTimeline-date">July 2023</h2>
                <div className="AboutTimeline-left">
                    <h3>Software Engineer & Teaching Assistant</h3>
                    <h4>Rithm School</h4>
                </div>
            </div>
            <div className="AboutTimeline-item">
                <h2 className="AboutTimeline-date">February 2023</h2>
                <div className="AboutTimeline-right">
                    <h3>Software Engineering Student</h3>
                    <h4>Rithm School</h4>
                </div>
            </div>
            <div className="AboutTimeline-item">
                <h2 className="AboutTimeline-date">August 2020</h2>
                <div className="AboutTimeline-left">
                    <h3>Web Designer & Digital Marketing Specialist</h3>
                    <h4>Great Leap Studios</h4>
                </div>
            </div>
            <div className="AboutTimeline-item">
                <h2 className="AboutTimeline-date">January 2019</h2>
                <div className="AboutTimeline-right">
                    <h3>Database Coordinator</h3>
                    <h4>The Cleveland Orchestra</h4>
                </div>
            </div>
            <div className="AboutTimeline-item">
                <h2 className="AboutTimeline-date">January 2016</h2>
                <div className="AboutTimeline-left">
                    <h3>Database Administration & Annual Giving</h3>
                    <h4>Broadway Sacramento</h4>
                </div>
            </div>
            <div className="AboutTimeline-item">
                <h2 className="AboutTimeline-date">September 2012</h2>
                <div className="AboutTimeline-right">
                    <h3>UC San Diego</h3>
                    <h4>B.A. History</h4>
                </div>
            </div>
        </div>
    )
}

export default AboutTimeline;