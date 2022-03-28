import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../navigationLinks';
import './navigation.css'

function createLinks(){
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function NavigationBar() {
  return (
    <div id='home'>
    <Navbar className='navigation_container' expand='md'>
    <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">Tomara Petty</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: "none"}}>
    <Nav className='links' style={{ margin: '0 1rem'}}>
        {createLinks()}
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavigationBar