import React from 'react'
import github from '../images/github_logo.png'
import linkedIn from '../images/linkedIn_logo.png'
import resume from '../NickQuandt_Resume.pdf'

const Links = () => {
    return (
        <div id="linkPack">
            <a href="https://github.com/nickubed" target="_blank"><img src={github} alt="github logo" id="github_logo" /></a>
            <a href="https://www.linkedin.com/in/nick-quandt/" target="_blank"><img src={linkedIn} alt="linkedin logo" id="linkedin_logo" /></a>
            <a href={resume} target="_blank"><p id="resume">resume</p></a>
        </div>
    )
}

export default Links