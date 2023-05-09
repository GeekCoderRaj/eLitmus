import React, { useState } from 'react'
import QCard from './QCard'
import "./Question.css"
import ShowCard from './ShowCard';
import Lottie from "lottie-react";
import hint1 from "./hint1.json"
const Question = () => {
    const [TotalScore, setTotalScore] = useState(0);
    const [i, seti] = useState(0);
    const [TimeArr, setTimeArr] = useState([]);
    console.log("I gopt render")
    const question = [
        {
            "ques": "docil",
            "options": ["Wilful","Complaint","Resolute","None of Above"],
            "hint": hint1,
            "answer": 2
        },
        {
            "ques": "Avert",
            "options": ["Prevent","Face","Confront","Permit"],
            "hint": hint1,
            "answer": 3
        },
        {
            "ques": "Bafflement",
            "options": ["Clarity","Confusion","Cleaniness","Pleasure"],
            "hint": hint1,
            "answer": 1
        },
        {
            "ques": "Retaliate",
            "options": ["Facilate","Rotate","Clap","React"],
            "hint": hint1,
            "answer": 1
        },
    ]
  return (
    <>
    {
        i<3 ? <QCard data = {question[i]} i = {i} seti={seti} TotalScore={TotalScore} setTotalScore={setTotalScore} setTimeArr={setTimeArr} TimeArr={TimeArr}/> : 
        <ShowCard TotalScore={TotalScore} TimeArr={TimeArr}/>
    }
    {/* <div className="Question">Question</div> */}
    </>
  )
}

export default Question