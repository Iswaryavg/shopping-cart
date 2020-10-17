import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = (props) => {
    return (
        <div>
              <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
       <Container>
       <LinkContainer to="/">
  <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to="/cart">
      <Nav.Link href="cart">
      <i className="fas fa-shopping-cart"></i>Cart<span style={{color:'red'}}>({props.cart.length})</span></Nav.Link>
      </LinkContainer>
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
