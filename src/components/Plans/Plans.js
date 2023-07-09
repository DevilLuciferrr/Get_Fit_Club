import React from 'react'
import './Plans.css'
import plansData from '../../data/plansData'

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className="blur blur-p-1"></div>
        <div className="blur blur-p-2"></div>
        <div className="plans-header">
            <span className='stroke-text'>Ready to Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now with us</span>
        </div>

        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    <img src={plan.url} alt="" style={{width:"40px"}}/>
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png" alt="" style={{width:"30px"}}/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div><span>See More Benefits -> </span></div>

                    <button className='btn'>Join Now !</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans