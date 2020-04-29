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
                    <Link to="/" className="nav-link custom-anchor pl-0" role="button">Home</Link>
                    <Link to="/wer-wir-sind" className="nav-link custom-anchor" role="button">Wer wir sind</Link>
                    <Link to="/wir-sind-viele" className="nav-link custom-anchor" role="button">Wir sind viele</Link>
                    <Link to="/warum-grundeinkommen" className="nav-link custom-anchor" role="button">Warum Grundeinkommen</Link>
                    <Link to="/werde-botschafterin" className="nav-link custom-anchor" role="button">Werde Botschafter*In</Link>
                    <Link to="/grundeinkommen-jetzt" className="nav-link custom-anchor" role="button">#GrundeinkommenJETZT</Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
)