import React from 'react'
import './Programs.css'
import programsData from '../../data/programsData'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you.</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category" style={{alignItems:'center'}}>
                    <img src={program.url} alt="" style={{width:"140px", height:"160px", alignItems:'center'}}/>
                    <span>{program.heading}</span>
                    <span>{program.description}</span>
                    <button placeholder='Join Now'>Join Now <img src="https://www.svgrepo.com/download/4356/right-arrow.svg" alt="" style={{width:"30px", height:"13px"}} /></button>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default Programs