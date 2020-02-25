import React from 'react'
import socialImage from '../images/social_life.png'
import socialImage2 from '../images/social_life_2.png'

const SocialLife = () => {
    return (
        <div id="socialContainer">
            <img alt="mid-game social life simulator... nick is winning." className="socialImg" src={socialImage} />
            <img alt="mid-game social life simulator... nick lost." className="socialImg" src={socialImage2} />
        </div>
    )
}

export default SocialLife