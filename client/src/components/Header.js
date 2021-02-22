import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () =>{
	return (
        <header>
           <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
			  <Navbar.Brand href="/">ShopOGreat</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="ml-auto">
			      <Nav.Link href="/cart"><i class="fas fa-shopping-cart">&nbsp; Cart</i></Nav.Link>
			      <Nav.Link href="/login"><i class="fas fa-user">&nbsp; Login</i></Nav.Link>
			      
			    </Nav>
			    
			  </Navbar.Collapse>
			  </Container>
			</Navbar>
        </header>
		)
}

export default Header