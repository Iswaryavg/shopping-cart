import React,{useState} from 'react'
import { Row, Col,Card,Button } from 'react-bootstrap'

const Homescreen = (props) => {

    return (
        <div>  
            <Row>
{props.products.map((product) => 
  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
  <Card className='my-3 p-3 rounded' style={{ minHeight: "100%" }}>
          <Card.Img src={product.image} variant='top' fluid />  
      <Card.Body>
              <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        <Card.Text as='div'>
         Rating:{product.rating}<br/>
          Reviews:{product.numReviews}
          </Card.Text>
        <Card.Text as='div'>Price:£{product.price}</Card.Text>
       {product.name.includes('sofa')&&<Card.Text as='h3'><img src="/images/size-icon.png" width="200"/></Card.Text>}
      {product.seater> 0 &&<div>{product.category}  sofa
    </div>   }
      </Card.Body>
      <Button variant="dark" onClick={()=>props.addtocart(product)}>Add to cart</Button>

    </Card>
  </Col>
)}
</Row>
        </div>
    )
}

export default Homescreen
