import React from 'react'
import "../styles/HeroSection.css"
import HeroImg from "../assets/header-home.png"

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="box-1"></div>
            {/* end of text box */}
            <div className="box-2">
                <figure className="img-box"><img src={HeroImg} alt="" className="img" /></figure>
            </div>
            {/* box two end */}
        </div>
    )
}

export default HeroSection
