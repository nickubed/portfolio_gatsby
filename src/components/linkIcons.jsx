import React from 'react'
import github from '../images/github_logo.png'
import linkedIn from '../images/linkedIn_logo.png'

const Links = () => {
    return (
        <div id="linkPack">
            <img src={github} alt="github logo" id="github_logo" />
            <img src={linkedIn} alt="linkedin logo" id="linkedin_logo" />
        </div>
    )
}

export default Links