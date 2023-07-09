import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Testimonials.css'
import testimonialsData from '../../data/testimonialsData'

const Testimonials = () => {
    const transition = {type:"spring", duration:3}
    const[sel,setSel]= useState(0);
    const tlen = testimonialsData.length;
  return (
    <div className='testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us......</span>

            <motion.span
            key={sel}
            initial={{opacity:0, x:-100}} 
            animate={{opacity:1, x:0}} 
            exit={{opacity:0, x:100}}
            transition={transition}
            >
                {testimonialsData[sel].review}
            </motion.span>
            <span>
                <span style={{color:"var(--orange)"}}>{testimonialsData[sel].name}</span>{" "}
                -{testimonialsData[sel].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div initial={{opacity:0, x:-100}} transition={{...transition, duration:2}} whileInView={{opacity:1, x:0}}></motion.div>
            <motion.div initial={{opacity:0, x: 100}} transition={{...transition, duration:2}} whileInView={{opacity:1, x:0}}></motion.div>
            <motion.img 
            key={sel}
            initial={{opacity:0, x:100}} 
            animate={{opacity:1, x:0}} 
            exit={{opacity:0, x:-100}}
            transition={transition}
            src={testimonialsData[sel].url} alt="" />
            <div className="arrows">
                <img 
                onClick={()=>{
                    sel === 0 ? setSel(tlen-1):
                    setSel ((prev)=>prev-1)
                }}
                src="https://www.svgrepo.com/download/932/left-arrow.svg" alt="" />
                <img 
                onClick={()=>{
                    sel === (tlen-1) ? setSel(0):
                    setSel ((prev)=>prev+1)
                }}
                src="https://svgsilh.com/svg/1646214.svg" alt="" style={{transform:"scale(1.4)"}}/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials