import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [email, setEmail] = useState("");
  const [user, setuser] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("")
  const nav = useNavigate();
  const show = async() =>{

    console.log(email);
    console.log(password)
    try {
      const resp = await fetch('http://localhost:5000/api/register',{
        method : "POST",
        headers :{"Content-Type" : "application/json"},
        body : JSON.stringify({
          email,
          name: user,
          password,
          repeat_password:Cpassword
        })
      })
      const data = await resp.json();
        localStorage.setItem("profile",JSON.stringify({
            email,
            user,
            access_token: data.refresh_token
        }))
        alert("Register successfull Login with credentials")
        nav("/");
      console.log("data sent",data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='Login_Form'>
    Email address <br/>
    <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value = {email}/>
  Username <br/>
    <input type="text" placeholder="Enter Username" onChange={(e)=>setuser(e.target.value)} value = {user}/>
    Password <br/>
    <input type="Password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value = {password}/>
    Confirm Password
    <input type="Password" placeholder="Enter Confirm Password" onChange={(e)=>setCPassword(e.target.value)} value= {Cpassword}/>
    <button className="button" onClick={()=>show()}>Register</button>
</div>
  )
}

export default Register