import React, {useState, useEffect} from 'react'
import "./Instruction.css"
const Instruction = () => {
    const [Timer, setTimer] = useState(10);
    const decreaseTimer = () =>{
        setTimer(prevState => prevState-1);
    }
    useEffect(() => {
       setInterval(() => {
          decreaseTimer();
       }, 1000);
    
      return () => {
        clearInterval();
      }
    }, [])
    
  return (
    <div className='Instructions'>
        Instructions
        <ol>
            <li>Puzzle starts automatically after 10 sec</li>
            <li>Total Marks contain 50</li>
            <li>Negative marking will be given -2 for wrong answer and -1 for Watching clues</li>
            <li>You can watch any 2 clue out of 5 in any question</li>
        </ol>
        <div className='Timer'>{Timer}</div>
    </div>
  )
}

export default Instruction