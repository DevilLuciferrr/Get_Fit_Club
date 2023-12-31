import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wkvo6wg', 'template_p4aoc3r', form.current, 'FLs7t7J9gUKmcHDj6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='join'>
        <div className='left-j'>
            <hr/>
            <div>
                <span className='stroke-text'>Ready to</span>
                <span> level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className="stroke-text"> with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter Your Email Address'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join