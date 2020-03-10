import React from 'react'
import SocialImage from './social-life'


const Project2 = () => {
    return (
        <div className="container">
            <div className="row row-cols-2">
                <div className="col-0 col-md-6"></div>
                <div className="col-12 col-md-6">
                    <h2 className="subhead"></h2>
                    
                </div>
            </div>
            <div className="row row-cols-2">
                <div className="col-0 col-md-7">
                    
                </div>
                <div className="col-12 col-md-5">
                    <br/>
                    <div id="about"><p className="smallTitle">social life simulator</p>
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
            </div>
        </div>
    )
}

export default Project2