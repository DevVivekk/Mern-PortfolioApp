import React from 'react'
import Img1 from '../media/img1.jpg'
import Img2 from '../media/img2.jpg'
import Img3 from '../media/img3.jpg'
import Img4 from '../media/img4.jpg'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Page4 = () => {
  return (
    <div className='page-4'>
    <h1 style={{"marginTop":"7rem","fontFamily":"Chivo","fontSize":"3rem","width":"60rem"}}>My Projects Gallery</h1>
    <div>
    <Carousel className='slider'>
    <div>
    <img className='imgslide' src={Img1}  alt='img' />
    </div>
    <div>
    <img src={Img2} className='imgslide'  alt='img' />
    </div>
    <div>
    <img src={Img3} alt='img' className='imgslide'/>
    </div>
    <div>
    <img src={Img4}  alt='img' className='imgslide'/>
    </div>
    </Carousel>
    </div>
    </div>
  )
}

export default Page4