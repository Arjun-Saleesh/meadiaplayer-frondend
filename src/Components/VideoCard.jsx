import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { deleteVideoAPI, watchHistoryAPI } from '../../services/allAPI'

function VideoCard({video,setdeleteVideoResponse,insidecategory}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {setShow(true);
    const{name,link}=video
    let today=new Date()
    // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today));
    let timeStamp= new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)

    let videoHistory={name,link,timeStamp}
    // make api call
    await watchHistoryAPI(videoHistory)
    console.log(videoHistory);
    

  }

  const removevideo=async(id)=>{
  await deleteVideoAPI(id)
  setdeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{

    console.log("drag started"+id);
    e.dataTransfer.setData("videoId" ,id)
    
  }

  return (
    <>
     <Card style={{ width: '16rem' }} className='m-5 ' draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img  variant="top" width={"250px"} height={"190px"} onClick={handleShow} src={video?.url} />
      <Card.Body >
        <Card.Title className='d-flex justify-content-between align-items-center'><h4>{video?.name}</h4></Card.Title>
        
       {
        insidecategory?null:
        <Button  onClick={()=>removevideo(video?.id)} variant="danger" className='btn '><i class="fa-solid fa-trash"></i></Button>}
      </Card.Body>
    </Card>
    <Modal  show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         

          <iframe width="470" height="315"  src={`${video?.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard
