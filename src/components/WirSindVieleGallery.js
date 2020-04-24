import React, { useState } from "react"
import { Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*global FB*/

function WirSindVieleGallery(props) {
    const data = useStaticQuery(graphql `
    query {
            botschafter01: file(relativePath: { eq: "Statements_facebook_1200x627_Anna-Sophie.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            botschafter02: file(relativePath: { eq: "Statements_facebook_1200x627_Susanne.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
            }
            botschafter03: file(relativePath: { eq: "Statements_facebook_1200x627_Leonie.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
            }
            botschafter04: file(relativePath: { eq: "Statements_facebook_1200x627_Amira.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }

          }

      `)
      const [modalShow, setModalShow] = useState(false);
      const [modalData, setModalData] = useState(null)
      
      function clickHandler(toggleModal, load){
        setModalData(load.childImageSharp.fluid)
        setModalShow(toggleModal)
      }

      function postToFb(image){
        FB.ui({
            method: 'share',
            hashtag: '#menschInGermany',
            href: 'https://www.mensch-in-germany.org/'+image
        });  
      }

      function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton/>
            <Modal.Body>
              <Img fluid={modalData} alt="Botschafter"/>
            </Modal.Body>
            <Modal.Footer className="post-social">
              <span className="font-weight-bold">Jetzt teilen: </span>
              <Button className="button facebook" onClick={() => postToFb(modalData.src)}>
                <FontAwesomeIcon icon={["fab", "facebook"]} size="2x"/>
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }

      return (
        <div className="wir-sind-viele mt-5">
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
          <Row>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter01)}>
                <Img fluid={data.botschafter01.childImageSharp.fluid} alt="Botschafter"/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter02)}>
                <Img fluid={data.botschafter02.childImageSharp.fluid} alt="Botschafter"/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter03)}>
                <Img fluid={data.botschafter03.childImageSharp.fluid} alt="Botschafter"/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter04)}>
                <Img fluid={data.botschafter04.childImageSharp.fluid} alt="Botschafter"/>
              </div>
            </Col>
          </Row>
        </div>  
      )
    }
    
    export default WirSindVieleGallery
    
