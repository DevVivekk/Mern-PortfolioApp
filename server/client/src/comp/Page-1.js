import React, { useEffect, useState } from 'react'
import Vivek from '../media/viveksportrait.jpg'
import { NavLink, useNavigate} from 'react-router-dom'
const Page1 = () => {
const[person,setPerson] = useState('')
  const navigate = useNavigate();

  const fetchApi = async()=>{
    try{
      const res = await fetch('/homes',{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          credentials:"include"
      })
      const data = await res.json();
      setPerson(data);
      console.log(person.fullname)
      if(res.status!==201){
          const error = new Error(res.error);
          throw error;
      }
  }catch(e){
      navigate('/login')
      console.log(e);
  }
}
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div className='page-1'>
    <div className='hero-1 hero'>
    <div style={{"marginLeft":"-6rem"}}>
    <h3 style={{"marginLeft":"13rem","fontFamily":"Roboto Mono","fontSize":"1.5rem"}}>Portfolio</h3>
    <h1 style={{"marginTop":"7rem","fontFamily":"Chivo","fontSize":"7.5rem","textAlign":"center"}}>Vivek<br /><span>Bhardwaj</span> </h1>
    </div>
    <div style={{"marginLeft":"-6rem","marginBottom":"13rem","display":"flex","justifyContent":"space-around","flexDirection":"row","width":"40rem"}}>
    <h2 style={{"fontFamily":"Kanit","fontSize":"1.7rem","letterSpacing":"0.4rem"}}>Web Developer</h2>
    <div style={{"position":"relative","boxSizing":"border-box"}}>
    <NavLink className='hero-linkk' style={{"fontFamily":"Kanit","fontSize":"1.7rem","textDecoration":"none","color":"black","fontWeight":"600"}}>Email me</NavLink>
    </div>
    </div>
    </div>
    <div className='hero-1' style={{"position":"relative"}}>
    <div className='hero-2' style={{"width":"63rem","height":"64rem","position":"absolute","top":"0"}}></div>
    <div style={{"position":"relative","marginTop":"-1rem"}}>
    <img src={Vivek} alt='img'  style={{"width":"35rem","height":"50rem","zIndex":"20","position":"absolute","top":"2rem","right":"-2rem"}}/>
    <div style={{"width":"35rem","height":"50rem","backgroundColor":"aliceblue"}}></div>
    </div>
    </div>
    </div>
  )
}

export default Page1