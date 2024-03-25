import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

import products from '../products'

const Product = ({ match }) => {
  const product = products.find((item) => {
    return item._id === match.params.id
  })

  return (
    <div>
     {product.name}
    </div>
  )
}

export default Product
