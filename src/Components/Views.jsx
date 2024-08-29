import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row, Col } from 'react-bootstrap'
import { getAlluploadedVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI'


function Views({uploadVideoResponse,setDropVideoResponse}) {
  const[deleteVideoResponse,setdeleteVideoResponse]=useState(false)
const[allVideo,setallVideo]=useState([])

useEffect(()=>{
  getAllVideo()
  setdeleteVideoResponse(false)
},[uploadVideoResponse,deleteVideoResponse])

const getAllVideo=async()=>{
  const result=await getAlluploadedVideosAPI()
  console.log(result);
  if(result.status==200){
    console.log(result.data);
    setallVideo(result.data)
    
  }else{
    console.log("api failed");
    setallVideo([])
    
  }
  
}

const dragOver=(e)=>{
  e.preventDefault()
}

const videoDropped=async (e)=>{
  const {videoId,CategoryId}=JSON.parse(e.dataTransfer.getData("data"))
  console.log(videoId,CategoryId);
  const {data}=await getCategoryAPI()
  const selectedCategory=data.find(item=>item.id==CategoryId)
  let result =selectedCategory.allvideos.filter(video=>video.id!==videoId)
  console.log(result);

  let {id,CategoryName}=selectedCategory
  let newCategory={id,CategoryName,allvideos:result}
  console.log(newCategory);
  const res=await updateCategoryAPI(CategoryId,newCategory)
  console.log(res);
  setDropVideoResponse(res)
  
  

  
}

  return (
    <>
    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
      {
        allVideo?.length>0?allVideo.map(video=>(
      <Col sm={12}  md={4}>
      <VideoCard video={video} setdeleteVideoResponse={setdeleteVideoResponse} />
      </Col>
        )):<p className='text-danger fw-bolder'>nothing to display</p>
        
      }
    </Row>
    
    </>
  )
}


export default Views
