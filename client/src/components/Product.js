import React from 'react'
import {container, Card} from 'react-bootstrap'
import Rating from './Rating'


const Product = ({product}) =>{
	return (
       <Card className='my-3 p-3 rounded'>
         <a href={`/product/${product._id}`}>
          <Card.Title as='div'><strong>{product.name}</strong> </Card.Title>
          <Card.Img src={product.image} variant='top'/>
         </a>
         <Card.Text as='div'>
           <Rating 
             value={product.rating} 
             text={`${product.numReviews} reviews`}
             
             />
         </Card.Text>
         <Card.Text as='h3'> 
           ${product.price}.00
         </Card.Text>
         <Card.Body>{product.description}</Card.Body>
      </Card>
	)
}


export default Product