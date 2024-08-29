import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Views from '../Components/Views'
import Category from '../Components/Category'
function Home() {
  const [uploadVideoResponse, setuploadVideoResponse] = useState({})
  const [dropVideoResponse, setDropVideoResponse] = useState({})
  return (
    <>
      <div className="container mt-3 mb-3 d-flex justify-content-between">
        <div className="add-videos">
          <Add setuploadVideoResponse={setuploadVideoResponse} />
        </div>
        <Link style={{ textDecoration: 'none', fontSize: '20px' }} className='text-info mt-3' to='/watch-history'><i class="fa fa-history me-2 text-info" aria-hidden="true" ></i>Watch History</Link>


      </div>
      <div className="container-fluid mt-5 mb-3 row ">
        <div className="all-videos col-lg-9">
          <h2 className='text-info'>All-Videos</h2>
          <Views uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />
        </div>
        <div className="col-lg-3">
          <Category dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>



    </>
  )
}

export default Home
