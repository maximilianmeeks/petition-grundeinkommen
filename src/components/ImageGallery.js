import React from "react"
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import DownloadIcon from "./images/download-icon"


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        {console.log(props)}
        <p>hallo</p>
      </Modal.Body>
    </Modal>
  );
}

function WerdeBotschafter() {
      const [modalShow, setModalShow] = React.useState(false);
    
      return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail onClick={() => setModalShow(true)}/>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail onClick={() => setModalShow(true)}/>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail onClick={() => setModalShow(true)}/>
                </Col>
            </Row>
        </Container>  
      )
    }
    
    export default WerdeBotschafter
    