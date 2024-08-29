import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWatchHistoryAPI } from '../../services/allAPI'
import { deleteWatchHistoryAPI } from '../../services/allAPI'

import { Button } from 'react-bootstrap'

function Watchhistory() {
  const [history,setHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory =async()=>{
   const result =await getWatchHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("Api Failed");
      console.log(result.message);
      
      
    }
  }
  const removevideohistory=async(id)=>{
    await deleteWatchHistoryAPI(id)
    getHistory()
  }

  return (
   <>
   <div className="container mt-5 mb-3 d-flex justify-content-between">
<h2 className='text-info'>Watch History</h2>
<Link style={{textDecoration:'none',fontSize:'20px'}} className='text-info mt-3' to='/home'><i class="fa-solid fa-angles-left me-2"></i>Back to Home</Link>
   </div>
   <table className='table my-5 container shadow w-100 '>
    <thead>

      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Url</th>
        <th>Timestamp</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>

    {history?.length > 0 ? (
            history.map((video, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{video.name}</td>
                <td><a href={video.link} target="_blank" rel="noopener noreferrer">{video.link}</a></td>
                <td>{video.timeStamp}</td>
                <td>
                  <Button onClick={()=>removevideohistory(video?.id)} variant=""><i className="fa-solid fa-trash text-danger"></i></Button>
                </td>
              </tr>
            ))
          ) :  (
            <tr>
              <td colSpan="5" className="text-center">No history available</td>
            </tr>
          )}
    

    </tbody>

   </table>
   </>
  )
}

export default Watchhistory
