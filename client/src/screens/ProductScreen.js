import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'



const ProductScreen =({ match }) =>{
	 const [products, setProduct] = useState({})

   useEffect(() =>{
      const fetchProduct = async ()=>{
        const { data } = await axios.get(`/api/products/${match.params.id}`)

        setProduct(data)
      }

      fetchProduct()
   },[match])
	
	return <>
       <Link className='btn btn-light my-3' to='/'>Go Back</Link>
       <Row>
         <Col md={6}>
            <Image id="ProductImage" src={products.image} fluid />
         </Col>
         <Col md={3}>
           <ListGroup variant='flush' >
              <ListGroup.Item id='white-background' className='py-0'>
              	<h3>{products.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item id='white-background'>
              	<Rating 
              	  value={products.rating} 
              	  text={`${products.numReviews} reviews`}
              	  />
              </ListGroup.Item>
              <ListGroup.Item id='white-background'>
              	Price: ${products.price}
              </ListGroup.Item>
              <ListGroup.Item id='white-background'>
              	<strong>Description: </strong> {products.description}
              </ListGroup.Item>
           </ListGroup>
         </Col>
         <Col md={3}>
           <Card>
           	<ListGroup variant='flush'>
           	  <ListGroup.Item id='white-background'>
           	  	<Row>
           	  	 <Col>Price:</Col>
           	  	 <Col>
           	  	 	<strong>${products.price}</strong>
           	  	 </Col>
           	  	</Row>
           	  </ListGroup.Item>
           	</ListGroup>

           	<ListGroup variant='flush'>
           	  <ListGroup.Item id='white-background'>
           	  	<Row>
           	  	 <Col>Status</Col>
           	  	 <Col>
           	  	 	{products.countInStock > 0 ? 'In Stock' : 'Out of stock'}
           	  	 </Col>
           	  	</Row>
           	  </ListGroup.Item>
           	  <ListGroup.Item>
                 <Button className='btn-block' type='button' disabled={products.countInStock === 0}>
                 	Add To Cart
                 </Button>
           	  </ListGroup.Item>
           	</ListGroup>
           </Card>
         </Col>
            
       </Row>
    
	   </>

	  	
}

export default ProductScreen