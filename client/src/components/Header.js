import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () =>{
	return (
        <header>
           <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
			 	 <Navbar.Brand>ShopOGreat</Navbar.Brand>
			  </LinkContainer>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="ml-auto">
			    <LinkContainer to='/cart'>
			     	 <Nav.Link><i class="fas fa-shopping-cart">&nbsp; Cart</i></Nav.Link>
			    </LinkContainer>
			    <LinkContainer to='login'>
			      <Nav.Link to="/login"><i class="fas fa-user">&nbsp; Login</i></Nav.Link>
			    </LinkContainer>
			    </Nav>
			    
			  </Navbar.Collapse>
			  </Container>
			</Navbar>
        </header>
		)
}

export default Header