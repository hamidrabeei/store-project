import React from 'react'
import { Row , Col } from 'react-bootstrap'
import products from '../products'
import Product from '../Component/Product/Product'
const Home = () => {
  return (
    <div>
      <h1 className ='text-center'>products</h1>
      <Row className='py-3'> 
        {products.map((item) =>{
            return(
                <Col sm={12} md={6} lg={4}>
                <Product Product={item}/>
                </Col>
          )            
        })}
      </Row>
    </div>
  )
}

export default Home
