import React from 'react'
import Vivekk from '../media/Vivekk.jpg'

const Page5 = () => {
  return (

    <div className='page-5'>
    <div className='box-page-5' style={{"boxSizing":"border-box","paddingLeft":"5rem"}}>
    <h1 style={{"fontFamily":"Chivo","fontSize":"5rem"}}>Work With Me</h1>
    <div style={{"position":"relative","marginTop":"12rem"}}>
    <img src={Vivekk} alt='img' style={{"width":"40rem","height":"40rem"}} />
    <div style={{"width":"40rem","height":"40rem","backgroundColor":"purple","position":"absolute","top":"-2rem","left":"-2rem","zIndex":"-10"}}></div>
    </div>
    </div>

  

    <div style={{"paddingRight":"15rem","boxSizing":"border-box"}} className='box-5'>
    <div>
    <h1 style={{"fontFamily":"monospace","fontSize":"2.3rem","textAlign":"center"}}>Address</h1>
    <p style={{"fontFamily":"Kanit","fontSize":"1.7rem","fontStyle":"italic"}}>New Delhi,India</p>
    </div>
    <div>
    <h1  style={{"fontFamily":"monospace","fontSize":"2.3rem","textAlign":"center"}}>Phone</h1>
    <p style={{"fontFamily":"Kanit","fontSize":"1.7rem","fontStyle":"italic"}}>+91 9304898504</p>
    </div>
    <div>
    <h1 style={{"fontFamily":"monospace","fontSize":"2.3rem","textAlign":"center"}}>Email</h1>
    <p style={{"fontFamily":"Kanit","fontSize":"1.7rem","fontStyle":"italic"}}>vivekbhardwaj0222@gmail.com</p>
    </div>
    </div>
  
    </div>
  )
}

export default Page5