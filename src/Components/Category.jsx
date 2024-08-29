import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Modal, Form, Row, Col } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';

function Category({dropVideoResponse}) {
  const [CategoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (CategoryName) {
      const result = await addCategoryAPI({ CategoryName, allvideos: [] });
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        alert(result.message);
      }
    } else {
      alert("Please fill the missing field.");
    }
  };

  useEffect(() => {
    getCategories();
    
  }, [dropVideoResponse]);

  const getCategories = async () => {
    const response = await getCategoryAPI();
    if (response?.data) {
      setAllCategories(response.data);
    }
  };

  const removeCategory = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };

  const dragOver = (e) => {
    console.log("video card dragged over the category");
    e.preventDefault();
  };

  const videoDropped = async (e, CategoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    console.log("video id " + videoId + " dropped into the category " + CategoryId);
    const { data } = await getAVideoAPI(videoId);
    const selectedCategory = allCategories.find(item => item.id === CategoryId);
    selectedCategory.allvideos.push(data);
    await updateCategoryAPI(CategoryId, selectedCategory);
    getCategories();
  };


  const videoDragStarted=(e,videoId,CategoryId)=>{
    let dataShare={videoId,CategoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }

  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-info">Add Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingname" className="mb-3" label="Category">
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                value={CategoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>

      {allCategories?.length > 0 ? allCategories.map((Category) => (
        <div key={Category?.id} className="border rounded p-2 mt-2" droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDropped(e, Category?.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <h5>{Category?.CategoryName}</h5>
            <Button variant="" onClick={() => removeCategory(Category?.id)}>
              <i className="fa-solid fa-trash text-danger"></i>
            </Button>
          </div>

          <Row>
            {
              Category?.allvideos?.length > 0
                ? Category.allvideos.map((card) => (
                  <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,Category.id)}>
                    <VideoCard video={card} insidecategory={true}/>
                  </Col>
                ))
                : null
            }
          </Row>
        </div>
      )) : <p>Nothing to display</p>}
    </>
  );
}

export default Category;
