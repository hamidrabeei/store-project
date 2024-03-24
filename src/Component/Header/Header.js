import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container , Navbar , Nav} from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <header>
                <Navbar className='nav-bg' variant='dark'>
            <Container>
              <LinkContainer to="/Home">
              <Navbar.Brand>HR Market</Navbar.Brand>
              </LinkContainer>
                
                <Nav>
                <LinkContainer to= "/Cart">
                    <Nav.Link ><i class="fa fa-cart-plus"></i></Nav.Link>
                    </LinkContainer>

                    <LinkContainer  to= "/account">
                    <Nav.Link ><i class="fa fa-user"></i></Nav.Link>
                    </LinkContainer>

                    <LinkContainer  to= "/">
                    <Nav.Link ><i class="fa fa-home"></i></Nav.Link>
                    </LinkContainer>

                    <LinkContainer  to= "/menu">
                    <Nav.Link ><i class="fa fa-bars"></i></Nav.Link>
                    </LinkContainer>
                   
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
