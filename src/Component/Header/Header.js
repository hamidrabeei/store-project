import React from 'react'
import {Container , Navbar , Nav} from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <header>
                <Navbar className='nav-bg' variant='dark'>
            <Container>
                <Navbar.Brand href="home">HR Market</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/cart"><i class="fa fa-cart-plus"></i></Nav.Link>
                    <Nav.Link href="/account"><i class="fa fa-user"></i></Nav.Link>
                    <Nav.Link href="/account"><i class="fa fa-home"></i></Nav.Link>
                    <Nav.Link href="/account"><i class="fa fa-bars"></i></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
