import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

import "../scss/_variables.scss"

export default (props) => (
    <Navbar className="bg-primary text-uppercase" expand="lg">
        <div className="container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/" className="nav-link">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/impressum" className="nav-link">Impressum</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/datenschutz" className="nav-link">Datenschutz</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about" className="nav-link">Wer wir sind</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
)