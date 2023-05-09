import React, { useState } from 'react'
import "./ResultStats.css"
const ResultStats = ({data}) => {
  const [toggle, settoggle] = useState(false)
  return (
    <div className='ResultPerUser'>
            <div onCLick = {()=>settoggle(!toggle)} className='ResultDetails'>
                <div>Name: {data.name}</div>
                <div>Marks: {data.Total_Marks}</div>
            </div>
            <div className='ResultAnalysis'>
                {data.Time.map((t,i)=>{
                   return (

                <div>
                     Question{i} : {t/1000} sec
                </div>
                   )
                })}
            </div>
    </div>
  )
}

export default ResultStats