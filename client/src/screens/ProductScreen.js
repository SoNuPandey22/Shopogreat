import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form, FormControl } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/message'
import Loader from '../components/loader'
import colors from 'colors'
import { listProductDetails } from '../actions/productActions'





const ProductScreen =({ history, match }) =>{
   const [qty, setQty] = useState(0)

	 const dispatch = useDispatch()
   const productDetails = useSelector(state => state.productDetails)
   const { loading, error, product} = productDetails

   

   useEffect(() =>{
    dispatch( listProductDetails(match.params.id))
      
   },[dispatch, match])

   const addToCartHandler = () => {
     history.push(`/cart/${match.params.id}?qty=${qty}`)
   }
   

	return <>
       <Link className='btn btn-light my-3' to='/'>
          Go Back
       </Link>
       { loading ? ( 
           <Loader />
          ): 
          error ? (
          <Message variant="danger">{error}</Message>
          ) : (
                 <Row>
         <Col md={6}>
            <Image id="ProductImage" src={product.image} fluid />
         </Col>
         <Col md={3}>
           <ListGroup variant='flush' >
              <ListGroup.Item id='white-background' className='py-0'>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item id='white-background'>
                <Rating 
                  value={product.rating} 
                  text={`${product.numReviews} reviews`}
                  />
              </ListGroup.Item>
              <ListGroup.Item id='white-background'>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item id='white-background'>
                <strong>Description: </strong> {product.description}
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
                  <strong>${product.price}</strong>
                 </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup variant='flush'>
              <ListGroup.Item id='white-background'>
                <Row>
                 <Col>Status</Col>
                 <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                 </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control as='select' value={qty} onChange={(e) =>
                        setQty(e.target.value)}>
                         {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x+1} value={x+1}>
                            {x+1}
                          </option>
                         ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
                )}
  

              <ListGroup.Item>
                 <Button 
                   onClick={addToCartHandler}
                   className='btn-block' 
                   type='button' 
                   disabled={product.countInStock === 0}
                   >
                     Add To Cart
                 </Button>
              </ListGroup.Item>
            </ListGroup>
           </Card>
         </Col>
            
       </Row>

          )

       }

    
	   </>

	  	
}

export default ProductScreen