import React from 'react'
import {Card} from 'react-bootstrap'
const Product = ({Product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
           <Card.Text>{Product.brand}</Card.Text>
     <a href={`/Product/${Product._id}`}>
      <Card.Img src={Product.image}  variant='top'/>
     </a>

     <Card.Body>
     <a href={`/Product/${Product._id}`}>
      <Card.Title as="div">{Product.name}</Card.Title>
      </a>
     </Card.Body>

     <Card.Text as='h3'>{Product.price}</Card.Text>



    </Card>
  )
}

export default Product
