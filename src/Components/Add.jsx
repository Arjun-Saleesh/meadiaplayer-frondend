import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../services/allAPI';




function Add({setuploadVideoResponse}) {
const [uploadVideo, setUploadVideo] = useState({ id:"",name:"",url:"",link:"" });
 console.log(uploadVideo);

 const getYoutubeLink=(e)=>{
  const {value}=e.target
  if(value.includes("v=")){
  let VID=value.split("v=")[1].slice(0,11)

 setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
 }
 else
 {
  setUploadVideo({...uploadVideo,link:''})
 }
 }
 const handleAdd=async(e)=>{
  const{id,name,url,link}=uploadVideo

  if( !id || !name || !url || !link ){
    alert("please fill all the fields")
  }
  else{
   const result=await uploadVideoAPI(uploadVideo)
   console.log(result);
   if(result.status>=200 && result.status<=300){
    alert("uploaded successfully")
    handleClose()
    //empty field
    setUploadVideo({ id:"",name:"",url:"",link:"" })
    setuploadVideoResponse(result.data)
   }
   else{
    alert("result.message")
   }
   
  }

 }
 
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center ">
        <h4 className="mt-2 text-info">Upload Video</h4>
        <button className="btn btn-info ms-4" onClick={handleShow}><i className="fa-solid fa-upload"></i></button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form action="">
            <FloatingLabel controlId="floatingInput"label="Video Id" className="mb-3" onChange={(e) => setUploadVideo({... uploadVideo, id: e.target.value })}>
            <Form.Control type="text" placeholder="Enter The Video Id" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" className='mb-3' label="Video Name">
              <Form.Control type="text" placeholder="Enter The Video Name" onChange={(e) => setUploadVideo({... uploadVideo, name: e.target.value })}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" className='mb-3' label="Image Url">
              <Form.Control type="text" placeholder="Enter The Image Url" onChange={(e) => setUploadVideo({... uploadVideo, url: e.target.value })} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" className='mb-3' label="Video Url">
              <Form.Control type="text" placeholder="Enter The Video Url"onChange={getYoutubeLink} />
            </FloatingLabel>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}

export default Add
