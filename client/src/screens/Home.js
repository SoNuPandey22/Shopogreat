import React, {  useEffect }from 'react' //useEffect is used to contact with the backend
import {Container, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/message'
import Loader from '../components/loader'

import {listProducts } from '../actions/productActions'



const Home = () => {
   //this will take the two parameter one name of and other function
   //whatever want to set can pass into the useState parenthesis
   const dispatch = useDispatch()

   const productList = useSelector(state =>state.productList )
   const { loading, error, products } = productList
   

// whatever found on the provided linke the data is assign to the content
   useEffect(()=>{
       dispatch(listProducts())
        
   },[dispatch]) //second parameter dependenciew

   

	return (
       <>
        <h1>Latest Products</h1>
        { loading ? ( <Loader />
           ): error ? (
            <Message variant='danger'>{error}</Message>
          ): (
         <Row>
           {products.map(product=>(
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/> 
                 
             </Col>
            ))}
        </Row>
        ) }
        
       </>
	)
}

export default Home