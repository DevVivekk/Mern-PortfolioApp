import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({email:"",password:""})
    const onChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    const handleSubmit= async(e)=>{
        const {email,password} = user
        e.preventDefault();
        console.log(user);
        const res = await fetch('/login',{
            method:"POST",
            credentials:"include",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        if(res.status===201){
            window.alert("Success")
            navigate('/home')
        }else if(res.status===401){
            window.alert("Invalid credentials")
        }
    }
  return (
    <div className='login'>
    <h1 style={{"fontFamily":"sans-serif","fontSize":"3rem"}}>Hey!👋 Just login to continue.</h1>
    <div style={{"marginTop":"4rem"}}>
    <form method='POST'>
    <label htmlFor='Email' style={{color:"black"}}>Email</label><br />
        <input style={{"border":"2px solid black"}} type="text" value={user.email} onChange={onChange} name='email' /><br /><br />
        <label htmlFor='Password' style={{color:"black"}}>Password</label><br />
        <input autoComplete='on' style={{"border":"2px solid black"}}   type="password" value={user.password} onChange={onChange} name='password' /><br /><br /><br />
        <button  onClick={handleSubmit} type='submit'>Submit</button>
        </form>
        </div>
        <h2 onClick={()=>navigate('/')} style={{"cursor":"pointer","textDecoration":"underline","color":"blue","marginTop":"3rem"}}>Back</h2>
    </div>
  )
}

export default Login