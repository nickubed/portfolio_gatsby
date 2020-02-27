import React from 'react'
import SerfsImg from './serfs-list'


const Project3 = () => {
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
                    <div id="about"><p className="smallTitle">hackathon piece: serfslist</p>
                    <hr/>
                    <p>serfslist was created over 24 hours with a team of two other developers and a UX designer.
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
            </div>
        </div>
    )
}

export default Project3