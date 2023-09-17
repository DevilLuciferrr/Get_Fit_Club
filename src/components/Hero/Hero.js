import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Athlete from '../../Assets/Athlete.png'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {type:"spring", duration:3}
    // const mobile = window.innerWidth<=768?true:false
  return (
    <div className='hero' id='home'>

        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header></Header>
            
            <div className="the-best-ad">
                <motion.div
                initial={{left:'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:"tween"}}
                ></motion.div>
                <span>The Best Fitness Club in the Town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape</span>
                    &nbsp;
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                   <span>In here we will help you to shape and build your ideal body and live up your life to the fullest...</span> 
                </div>
            </div>

            <div className="figures">
                <div className='fig'>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div className='fig'>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div className='fig'>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
                <div className='calorie'>
                    <div className="cal-img">
                        <img src="https://cdn2.iconfinder.com/data/icons/miscellaneous-41/44/Asset_25-512.png" alt="" />
                    </div>
                    <div className="cal-text">
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>

            <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>

        </div>
        
        
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div
            initial={{right:'-1rem'}}
             whileInView={{right:'4rem'}}
             transition={transition}
             className="heart-rate">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img src="https://pngimg.com/d/fitness_PNG176.png" alt={Athlete} className='ath-img'/>
        </div>
    </div>
  )
}

export default Hero