import React, {useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import Instruction from './Instruction';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [islogin,setislogin] = useState(false);
  const nav = useNavigate();
  const show = async() =>{
    console.log(email);
    console.log(password)
    try {
      const resp = await fetch('http://localhost:5000/api/login',{
        method : "POST",
        headers :{"Content-Type" : "application/json"},
        body : JSON.stringify({
          email,
          password,
        })
      })
      const data = await resp.json();
        localStorage.setItem("profile",JSON.stringify({
            email,
            access_token: data.refresh_token
        }))
        if(data.role == "admin") nav("/admin")
        setislogin(true);
        setTimeout(() => {
          nav("/Question");
          
        }, 10*1000);
      console.log("data sent",data);
    } catch (error) {
      console.log(error);
    }
  }
  return islogin? <Instruction/> : (
      <div className='Login_Form'>
        Email address <br/>
        <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value = {email}/>
        Password
        <input type="Password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value= {password}/>
        <button className="button" onClick={()=>show()}>Login</button>
    </div>
  )
}

export default Login