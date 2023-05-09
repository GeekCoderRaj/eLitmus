import React, {useState, useEffect} from 'react'
import "./ShowCard.css"
import axios from "axios"
const ShowCard = ({TotalScore, TimeArr}) => {
  const [success, setsuccess] = useState(false);
  const saveresult = async() =>{
    console.log("HI")
    const data = JSON.parse(localStorage.getItem("profile"))
    await axios.post("http://localhost:5000/api/store",{
      name: data.user,
      email: data.email,
      Total_Marks: TotalScore,
      Time: TimeArr
    })
     console.log(data)
    }
    useEffect(() => {
    
      if(TotalScore> 15) setsuccess(true);
      
    }, [])
    

  return (
    <div className={`ScoreCard ${success ? "success" : "failure"}`}>
    <div className='Score'>{TotalScore}</div>
    <button onClick={()=> saveresult()} className='ScoreSubmit'> Submit Your Score</button>
    </div>
  )
}

export default ShowCard