import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../scss/_variables.scss"

export default (props) => (
    <Navbar className="bg-primary text-uppercase" expand="lg">
        <div className="container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <div className="nav-link">
                        <Link to="/" className="custom-anchor pl-0" role="button">Home</Link>
                    </div>
                    <div className="nav-link">
                        <Link to="/wer-wir-sind" className="custom-anchor" role="button">Wer wir sind</Link>
                    </div>
                    <div className="nav-link">
                        <Link to="/wir-sind-viele" className="custom-anchor" role="button">Wir sind viele</Link>
                    </div>
                    <div className="nav-link">
                        <Link to="/warum-grundeinkommen" className="custom-anchor" role="button">Warum Grundeinkommen</Link>
                    </div>
                    <div className="nav-link">
                        <Link to="wie-unterstuetzen" className="custom-anchor" role="button">Wie Unterstützen</Link>
                    </div>
                    <div className="nav-link">
                        <Link to="/grundeinkommen-jetzt" className="custom-anchor" role="button">#GrundeinkommenJETZT</Link>
                    </div>
                    <div className="nav-link nav-icon">
                        <a href="https://www.facebook.com/MenschInGermany" className="custom-anchor"><FontAwesomeIcon icon={["fab", "facebook"]} size="2x"/></a>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
)