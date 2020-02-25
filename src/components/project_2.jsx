import React from 'react'
import MeetImg from './meet-out'

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
                <div className="col-0 col-md-7"></div>
                <div className="col-12 col-md-5">
                    <br/>
                    <div id="about"><p className="smallTitle">social life simulator</p>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam earum maxime eaque? Voluptate perspiciatis saepe obcaecati nobis voluptatum impedit eos quam eligendi ad doloribus! Quos unde neque nihil libero.
                        <br/>
                        <div className="projectContainer">
                            <MeetImg />
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