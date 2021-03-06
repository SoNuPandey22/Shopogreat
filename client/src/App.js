import React from 'react'
import {Container} from 'react-bootstrap'
import  { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/cartScreen'
import './App.css'
const App = () => {
  return (
    <Router>
    <Header/>
    <main className='py-3'> 
      <Container>
         <Route path='/' component={Home} exact/>
         <Route path='/product/:id' component={ProductScreen}/>
         <Route path='/cart/:id?' component={CartScreen}/>
       </Container>
    </main>

    <Footer/>
    </Router>
  ); 
}

export default App;
