import React, { useState , useEffect} from 'react'
import "./Form.css"
import Login from './Login'
import Register from './Register';
const Form = () => {
  const [toggle, settoggle] = useState(true); 
  useEffect(() => {
    console.log(toggle)
  }, [toggle])
  
  return (
    <div className='Form'>
    <div className='Form_button_style'>
        <button className="button_form" onClick={()=>{settoggle(false)}}>Register</button>
        <button className="button_form" onClick={()=>{settoggle(true)}}>Login</button>
        </div>
        <div>
            {toggle ? <Login/> : <Register/>}
        </div>
    </div>
  )
}

export default Form