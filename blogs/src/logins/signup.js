import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Vivek from '../media/Vivekk.jpg';

const Signup = () => {
    const navigate = useNavigate();
    const [hide,setHide] = useState(false);
    const [user,setUser] = useState({fullname:"",phone:"",email:"",password:"",confirmpassword:""})
    const onChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    const handleSubmit= async(e)=>{
        const {fullname,phone,email,password,confirmpassword} = user
        e.preventDefault();
        if(password !== confirmpassword){
            window.alert("Password mismatch error!")
        }else{
        const res = await fetch('/signup',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({fullname,phone,email,password,confirmpassword})
        })
        if(res.status===201){
            window.alert("Success")
            navigate('/login')
        }else if(res.status===401){
            window.alert("Invalid credentials")
        }}
    }
  return (
    <div className='signup'>
    <img src={Vivek} alt='img' style={{"width":"25rem","height":"25rem","borderRadius":"50%","border":"0.3rem solid green"}}/>
    <h1 style={{"marginTop":"4rem","fontSize":"4rem","fontFamily":"sans-serif","color":"wheat"}}>Welcome to my Portfolio</h1>
    <p style={{"marginTop":"5rem","fontSize":"2rem","fontStyle":"oblique"}}>Just <span><NavLink style={{"color":"blue","textDecoration":"none"}} onClick={()=>setHide(!hide)}>register</NavLink></span> to continue...</p>
    {
        hide?<div style={{"marginTop":"3rem","marginBottom":"3rem"}}>
    <form method='POST'>
    <label htmlFor='fullname'>Fullname</label><br />
        <input style={{"border":"2px solid black"}} type="text" value={user.fullname} onChange={onChange} name='fullname' /><br /><br />
        <label htmlFor='fullname'>Phone number</label><br />
        <input style={{"border":"2px solid black"}} type="text" value={user.phone} onChange={onChange} name='phone' /><br /><br />
        <label htmlFor='fullname'>Email id</label><br />
        <input style={{"border":"2px solid black"}} type="text" value={user.email} onChange={onChange} name='email' /><br /><br />
        <label htmlFor='fullname'>Password</label><br />
        <input autoComplete='on' style={{"border":"2px solid black"}}   type="password" value={user.password} onChange={onChange} name='password' /><br /><br />
        <label htmlFor='fullname'>Confirm password</label><br />
        <input autoComplete='on' style={{"border":"2px solid black"}} type="password" value={user.confirmpassword} onChange={onChange} name='confirmpassword' /><br /><br /><br/>
        <button  onClick={handleSubmit} type='submit'>Submit</button>
        </form>
        </div>
        :null
    }
    <p style={{"marginTop":"1.5rem","fontSize":"2rem","fontStyle":"italic","fontWeight":"bold"}}>Or</p>
    <p onClick={()=>navigate('/login')} style={{"marginTop":"1.5rem","fontSize":"2rem","fontStyle":"oblique"}}>Skip to <span><NavLink style={{"textDecoration":"none","color":"blue"}}>Sign in</NavLink></span></p>
    
    </div>
  )
}

export default Signup