import {React, useState , useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import Product from '../components/Product/Product'

const Home = () => {
  const [products, setproducts] = useState([])

  useEffect(()=>{
    const sendRequest = async() =>{
    const response = await axios.get('http://localhost:8000/api/products')
    setproducts(response.data)

    }

    sendRequest()

  },[])

  return (
    <div>
      <h3 className='text-center'>List products</h3>
      <Row>
        {products.map((item) => {
          return (
            <Col key={item._id} sm={12} md={6} lg={4}>
              <Product product={item} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Home
