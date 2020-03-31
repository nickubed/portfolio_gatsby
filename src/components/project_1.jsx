import React from 'react'
import MeetImg from './meet-out'

const Project1 = () => {
    return (
        <div className="container">
            <br/>
            <div id="about">
            <p className="subhead">meet-out</p>
            <hr/>
                <p className="projectContent">meet-out is a scheduling and social media-themed app created to encourage individuals
                    to gather outside and perform their favorite outdoor-activities together.
                    <br/>
                    <div className="projectContainer">
                        <MeetImg />
                    </div>
                    <br/>
                    it was created using typeScript, javaScript, mongoDB, express, react, and node.
                </p>
            </div>
        </div>
    )
}

export default Project1