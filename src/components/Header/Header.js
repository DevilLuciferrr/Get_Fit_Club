import React, { useState } from 'react'
import './Header.css'
import Logo from '../../Assets/0.png'
import Bars from '../../Assets/Bars.png'
import {Link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth<=768?true:false
  const [menuOpen,setMenu]=useState(false)
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        {(menuOpen===false&&mobile===true)?(
          <div
          style={{backgroundColor:'var(--appColor',padding:'0.5rem',borderRadius:'5px'}}
          onClick={()=>setMenu(true)}
          ><img src={Bars} alt="" style={{width:'3rem',height:'3rem'}}/></div>
        ):
        <ul className='header-menu'>
            <li><Link to='home' span={true} smooth={true} onClick={()=>setMenu(false)}>Home</Link></li>
            <li><Link to='programs' span={true} smooth={true} onClick={()=>setMenu(false)}>Programs</Link></li>
            <li><Link to='reasons' span={true} smooth={true} onClick={()=>setMenu(false)}>Why Us</Link></li>
            <li><Link to='plans' span={true} smooth={true} onClick={()=>setMenu(false)}>Plans</Link></li>
            <li><Link to='testimonials' span={true} smooth={true} onClick={()=>setMenu(false)}>Testimonials</Link></li>
        </ul>
        }
    </div>
  )
}

export default Header