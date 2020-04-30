import React, { useState } from "react"
import { Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*global FB*/

function WirSindVieleGallery(props) {
    const data = useStaticQuery(graphql `
    query {
          allFile(filter: {sourceInstanceName: {eq: "wir-sind-viele"}}, sort: {fields: relativePath, order: DESC}) {
            nodes {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
              relativePath
            }
          }
        }
      `)

      
      const [modalShow, setModalShow] = useState(false);
      const [modalData, setModalData] = useState(null)
      
      function clickHandler(toggleModal, load){
        setModalData(load)
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
        <div className="wir-sind-viele mt-3">
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            <Row>
              {data.allFile.nodes.map((node) => {
                return (
                  <Col xs={12} md={6} key={node.relativePath}>
                    <div onClick={() => clickHandler(true, node.childImageSharp.fluid)}>
                      <Img fluid={node.childImageSharp.fluid} alt="Botschafter"/>
                    </div>
                  </Col>
                )
              })}
            </Row>
        </div> 
      )}

    export default WirSindVieleGallery