import React from 'react'
import MeetImg from './meet-out'

const Project1 = () => {
    return (
        <div className="container">
            <div className="row row-cols-2">
                <div className="col-0 col-md-6"></div>
                <div className="col-12 col-md-6">
                    <h2 className="subhead">my work</h2>
                </div>
            </div>
            <div className="row row-cols-2">
                <div className="col-0 col-md-7"></div>
                <div className="col-12 col-md-5">
                    <br/>
                    <div id="about"><p className="smallTitle">meet-out</p>
                    <hr/>
                    <p>meet-out is a scheduling and social media-themed app created to encourage individuals
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
            </div>
        </div>
    )
}

export default Project1

// Meet-Out is a scheduling and social media app to promote gathering outside to do fun, exercise-driven activities.