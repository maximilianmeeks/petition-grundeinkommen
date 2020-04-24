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
                        <Link to="/" className="nav-link pl-0">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/wer-wir-sind" className="nav-link">Wer wir sind</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/wir-sind-viele" className="nav-link">Wir sind viele</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/warum-grundeinkommen" className="nav-link">Warum Grundeinkommen</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/werde-botschafterin" className="nav-link">Werde Botschafter*In</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
)