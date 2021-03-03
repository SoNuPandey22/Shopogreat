import React, { useState, useEffect }from 'react' //useEffect is used to contact with the backend
import {Container, Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'


const Home = () => {
   //this will take the two parameter one name of and other function
   //whatever want to set can pass into the useState parenthesis
   const [product, setProduct] = useState([])

// whatever found on the provided linke the data is assign to the content
   useEffect(()=>{
      const fetchProducts = async () =>{
        const { data } = await axios.get('/api/products')

//after fetching the data from teh server assign it to the variable crated by using useState
        setProduct(data)
      }

      fetchProducts()
   },[]) //second parameter dependenciew

	return (
       <>
        <h1>Latest Products</h1>
        <Row>
           {product.map(product=>(
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/> 
                 
             </Col>
           	))}
        </Row>
       </>
	)
}

export default Home