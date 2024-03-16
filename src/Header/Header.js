import React from 'react'
import {Container , Navbar , Nav} from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <header>
                <Navbar className='nav-bg' variant='dark'>
            <Container>
                <Navbar.Brand href="home">Fc Market</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/cart">List item</Nav.Link>
                    <Nav.Link href="/account">Account</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
