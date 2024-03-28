import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import axios from 'axios'

const Product = ({ match }) => {
  const [product, setproducts] = useState({})

  useEffect(()=>{

    const sendRequest = async() =>{
      const response = await axios.get(`http://localhost:8000/api/products/${match.params.id}`)
      setproducts(response.data)
  
      }
  
      sendRequest()

  },[match])


  return (
    <div>
     <Link to='/' className='btn btn-light my-3'>Back To Home</Link>

     <Row>
      <Col md={6}>
        <Image src={product.image} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
              <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item >
              <h5>{product.price}</h5>
          </ListGroup.Item>
          <ListGroup.Item>
              <h5>{product.description}</h5>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Button className='btn-block' type='button'>Add TO Cart😎</Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
     </Row>
    </div>
  )
}

export default Product
