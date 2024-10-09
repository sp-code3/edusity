import React from 'react'
import './Hero.css'
import black_arrow from '../../assets/black-arrow.svg'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='btn'>Explore more<img src={black_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero