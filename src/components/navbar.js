import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default (props) => (
    <Nav activeKey="/home" className="navbar">
        <Nav.Item>
            <Link to="/impressum" className="navlink">Impressum</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/datenschutz">Datenschutz</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/about">Wer wir sind</Link>
        </Nav.Item>
    </Nav>
)