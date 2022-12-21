import React from 'react'

export const Page3 = () => {
  return (
    <div className='page-3'>
    <div style={{"display":"flex","flexDirection":"column"}} className='box-3'>
    <h1 style={{"fontSize":"4rem","fontFamily":"Chivo"}}>Background</h1>
    <div style={{"fontFamily":"monospace","fontSize":"1rem","display":"flex","flexDirection":"column","justifyContent":"space-evenly","height":"20rem","marginTop":"4rem"}}>
    <h2>Working as a freelancer, since 2022</h2>
    <h2>Also a part time mentor</h2>
    <h2>Alumini of Almabetter, Completed in 2022</h2>
    <h2>Self-learner</h2>
    </div>
    </div>
    <div  style={{"display":"flex","flexDirection":"column"}} className='box-3'>
    <h1  style={{"fontSize":"4rem","fontFamily":"Chivo"}}>Expertise</h1>
    <ul style={{"marginTop":"4rem","fontFamily":"monospace","fontSize":"1.5rem","fontWeight":"600","display":"flex","flexDirection":"column","justifyContent":"space-evenly","height":"20rem"}}>
    <li>Modern and responsive website development</li>
    <li>Can complete tasks on time</li>
    <li>I work on Mern technology for website development</li>
    <li>Also I can be a mentor.</li>
    </ul>
    </div>
    <div className='box-3' style={{"marginTop":"20rem","padding":"0rem"}}>
    <img src='https://images.unsplash.com/photo-1573566606319-f61968685442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='img' style={{width:"40rem",height:"50rem"}} />
    </div>
    </div>
  )
}
