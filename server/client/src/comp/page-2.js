import React from 'react'
import Man from '../media/man-typing.png'

const Page2 = () => {
  return (
    <div className='page-2'>
    <div style={{width:"53rem"}} className='div-2'>
        <h1 style={{"width":"40rem","fontFamily":"monospace","lineHeight":"4rem","wordSpacing":"0.5rem","paddingTop":"10rem"}}>I  create modern responsive portfolio websites for each and everyone. I believe everyone must have a portfolio website to present their skills and showcase their talent to the world!</h1>
    </div>
    <div className='div-2 img-div'>
        <img src={Man} alt='img' style={{"width":"40rem","height":"40rem"}}/>
    </div>

    </div>
  )
}

export default Page2