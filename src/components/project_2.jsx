import React from 'react'
import SocialImage from './social-life'


const Project2 = () => {
    return (
        <div className="container">
            <br/>
            <div id="about"><p className="subhead">social life simulator</p>
            <hr/>
                <p className="projectContent">users control an emoji capable of moving in 2 dimensions along one axis, and attempt
                    to catch other emoji falling along a perpendicular axis, accumulating points and
                    increasing complexity as the game progresses.
                    <br/>
                    <div className="projectContainer">
                        <SocialImage />
                    </div>
                    <br/>
                    it was created using javaScript, phaser.
                </p>
            </div>
        </div>
    )
}

export default Project2