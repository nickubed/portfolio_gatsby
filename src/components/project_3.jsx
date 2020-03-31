import React from 'react'
import SerfsImg from './serfs-list'


const Project3 = () => {
    return (
        <div className="container">
            <br/>
            <div id="about"><p className="subhead">hackathon piece: serfslist</p>
            <hr/>
                <p className="projectContent">serfslist was created over 24 hours with a team of two other developers and a UX designer.
                    the prompt provided was "medieval life", and the date of delivery would be valentine's day.
                    after deciding on a direction for the project: "craigslist, but in the medieval period", we set off to
                    create it. the site features a functioning back-end, plenty of crowd-sourced user content,
                    and plenty of categories to refine one's search.
                    <br/>
                    <div className="projectContainer">
                        <SerfsImg />
                    </div>
                    <br/>
                    it was created using javaScript, react, node, express, and mongo.
                </p>
            </div>
        </div>
    )
}

export default Project3