import React from 'react'
import "./QCard.css"
import  { useState } from 'react'
import { useEffect } from 'react';
import Lottie from "lottie-react";

const QCard = ({data, i, seti, TotalScore,setTotalScore, TimeArr, setTimeArr}) => {
  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      // The user has switched away from the tab
      console.log('Tab switched away');
      seti(3);
    } else {
      // The user has switched back to the tab
      console.log('Tab switched back');
    }
  }
  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
 const [NoClue, setNoClue] = useState(0);
 const [Time, setTime] = useState(Date.now());      
 const [clueArr, setclueArr] = useState(null)
 const [click, setclick] = useState(false);
   const openClue = (key) =>{
    setclick(true);
      if(NoClue>1)
      {
        seti(3);
      }
      setNoClue(NoClue+1)
      setTotalScore(TotalScore-1);
      //console.log(clueArr)
   }
    const nextquestion = () =>{
        setTimeArr(prevState=>[
            ...prevState,Date.now()-Time
        ])
        console.log(TimeArr)
        setTime(Date.now())
        seti(i+1);
        setclick(false);
    }
    const check = (index) =>{
        if(index+1 === data.answer)
        {
            // alert("Right answer");
            setTotalScore(TotalScore+10);
        }
        else{
             setTotalScore(TotalScore-2);
            // alert("Wrong answer");
        }
        nextquestion();
    }
  return (
    <div>
       {/* QCard  {i }
       <button onClick={()=> seti(i+1)}>lick me</button>
       {data.ques}  */}
        <div className="card">
        <div className='ques'>Ques {i+1}: {data.ques}</div>
        <div className="option_clue">
       

       <div className='option_block'>
        <div className='card-block'>
        {data.options.map((option,index) => {
            return (
                <div className="options" onClick={()=>check(index)}>{option}
                
                </div> 
            )
        })}
        </div>
        <div className='image-block'> 
           
        {click ? <div >{<Lottie className='clue' animationData={data.hint} loop={true} />}</div>:
                <div className="hidden" onClick={()=> openClue()}>Clue?</div>} 
        </div>
       </div>        
      <div className='btn'>
            <button className="NextQuestionButton" onClick={()=>nextquestion()}>{i==2?"Complete Quiz":"Next Question"}</button>    
      </div>

        </div >
       
       </div>
    </div>
  )
}

export default QCard