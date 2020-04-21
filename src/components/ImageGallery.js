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
          <DownloadIcon/>
      </Modal.Header>
      <Modal.Body>
        
{/* <Img fluid={data.facebook01.childImageSharp.fluid} alt="Facebook 01"/> */}
       {/* {console.log(data)}  */}
        <p>hallo</p>
      </Modal.Body>
    </Modal>
  );
}

function WerdeBotschafter(props) {
    const data = useStaticQuery(graphql `
    query {
            facebook01: file(relativePath: { eq: "BGE_post_facebook_1200x627_1.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }

    `)
      const [modalShow, setModalShow] = React.useState(false);
    
      return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    {/* <Image src="holder.js/171x180" thumbnail onClick={() => setModalShow(true)}/> */}
                    <Img fluid={data.facebook01.childImageSharp.fluid} alt="Facebook 01" onClick={() => setModalShow(true)}/>
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
    
