import React, { useState , useEffect} from 'react'
import ResultStats from './ResultStats'
import axios from 'axios'
const Admin = () => {
  const [result,setresult] = useState([])
  const getresult = async() =>{
    const res = await axios.get("http://localhost:5000/api/show");
    console.log(res.data.data);
    // const arr = [...result,...res.data]
    // console.log(arr)
    setresult(res.data.data);
    
  }
  useEffect(() => {
    getresult()
    console.log(result)
    return () => {
      setresult([])
    }
  }, [])
  
  // const result = [
  //   {
  //       name : "Akhil",
  //       email: "akhil.2024",
  //       Total_Marks: 10,
  //       Time: [4000,2000,3100],
  //   },
  //   {
  //       name : "Akhil2",
  //       email: "akhil.2024",
  //       Total_Marks: 13,
  //       Time: [4000,2000,3100],
  //   },
  //   {
  //       name : "Akhil3",
  //       email: "akhil.2024",
  //       Total_Marks: 2,
  //       Time: [4000,2000,3100],
  //   }
  // ]
  return (
    <div className='Leaderboard'>
        <h2>Leaderboard</h2>
        {result.map((data)=>{

        return (<ResultStats data = {data}/>)
        })}
    </div>
  )
}

export default Admin