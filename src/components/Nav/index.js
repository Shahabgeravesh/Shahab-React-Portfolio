

import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav() {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar expand="lg" variant="dark" bg="dark" className="d-flex" >
                    <Container >
                        <Navbar.Brand href="#">Home</Navbar.Brand>
                        <Navbar.Brand href="#">Projects</Navbar.Brand>
                        <Navbar.Brand href="#">About</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>

        </Navbar>

    );

}
export default Nav;