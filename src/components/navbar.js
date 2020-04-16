import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default (props) => (
    <Navbar bg="light" expand="lg">
        <div className="container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/impressum">Impressum</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/datenschutz">Datenschutz</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about">Wer wir sind</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
)