import React from 'react'
import { Col, Row,} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'




function Landingpage() {
  const navigateByUrl = useNavigate();
    
  
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100' >
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ color: "blueviolet,fontsize:30px" }}> Welcome to <span className='text-warning'>Media Player</span> </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis repellat consequatur, accusantium laborum eveniet minima debitis quaerat sapiente nam autem temporibus ea vitae? Atque recusandae minus unde nisi odit?</p>
          <Button className='btn btn-info' onClick={()=>navigateByUrl('/home')}> Get Started</Button></Col>
        <Col lg={5}>
          <img className=' ms-5 p-5' src="https://cdn.dribbble.com/users/1193189/screenshots/6421804/final.gif" height={400} width={500} alt="" /></Col>
        <Col></Col>
      </Row>

      <div className='container mb-5 mt-5 d-flex flex-column align-item-center justify-contents-centre w-100'>
        <h5 className='text-center mb-5 text-warning' style={{ fontSize: "30px" }}>Features</h5>
        <div className='cards mb-5 mt-5 d-flex align-item-center justify-contents-centre w-100'>
          <Card style={{ width: '18rem' }} className='bg-info m-5 p-2'>
            <Card.Img variant="top" height={'250px'} width={'250px'} src="https://cdn.dribbble.com/users/46198/screenshots/1345929/music_player_finalli.gif" />
            <Card.Body>
              <Card.Title className='text-white'>Managing Video</Card.Title>
              <Card.Text className='text-white'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='bg-info m-5 p-2'>
            <Card.Img variant="top" height={'250px'} width={'250px'} src="https://cdn.dribbble.com/users/46198/screenshots/1345929/music_player_finalli.gif" />
            <Card.Body>
              <Card.Title className='text-white'>Categorized Video</Card.Title>
              <Card.Text className='text-white'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='bg-info m-5 p-2'>
            <Card.Img variant="top" height={'250px'} width={'250px'} src="https://cdn.dribbble.com/users/46198/screenshots/1345929/music_player_finalli.gif" />
            <Card.Body>
              <Card.Title className='text-white'>Watch History</Card.Title>
              <Card.Text className='text-white'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>

      </div>
      <div className="container mx-2 border-rounded p-3 border-light mt-5 d-flex justify-content-center align-items-center">
        <div className="col-lg-5 m-3">
          <h4 style={{ color: "blueviolet",fontSize:"30px",fontWeight:"bolder" }}>Simple, Powerfull & Fast</h4>
          <h6 className='mt-2 mx-2 text-warning ' style={{textAlign:"justify"}}><span style={{ color: "yellow", fontSize: "20px",fontWeight:"bold", }}>Play Everything: </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores a error inventore accusantium dolor libero, reprehenderit sequi corrupti magni nostrum eius autem ea asperiores. Repellendus obcaecati esse quae corporis?</h6>
          <h6 className='mt-2 mx-2 text-warning ' style={{textAlign:"justify"}}><span style={{ color: "yellow", fontSize: "20px",fontWeight:"bold" }}>Categorize Video: </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores a error inventore accusantium dolor libero, reprehenderit sequi corrupti magni nostrum eius autem ea asperiores. Repellendus obcaecati esse quae corporis?</h6>
          <h6 className='mt-2 mx-2 text-warning ' style={{textAlign:"justify"}}><span style={{ color: "yellow", fontSize: "20px",fontWeight:"bold" }}>Managing Video: </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores a error inventore accusantium dolor libero, reprehenderit sequi corrupti magni nostrum eius autem ea asperiores. Repellendus obcaecati esse quae corporis?</h6>
          
        </div>
        <div className="col-lg-5 mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hOHKltAiKXQ?si=cnTVf9vBUUwjVtjn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>


    </>

  )
}

export default Landingpage
