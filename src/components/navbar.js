import React from "react"
import { Nav } from "react-bootstrap"

export default (props) => (
    <Nav activeKey="/home">
        <Nav.Item>
            <Nav.Link href="/page-2">Page 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            Disabled
            </Nav.Link>
        </Nav.Item>
    </Nav>
)