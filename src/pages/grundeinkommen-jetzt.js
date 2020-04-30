import React, { useState } from "react"
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"



/*global FB*/


function GrundeinkommenJetzt() {
  const data = useStaticQuery(graphql `
  query {
          previewKarte: file(relativePath: { eq: "Preview_BGE_Unterschrift.png"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
          previewListe: file(relativePath: { eq: "Preview_BGE_Unterschrift_Auslage.png"}) {
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
  <Layout>
    <SEO title="#GrundeinkommenJETZT"
    imgFb="/BGE_post_facebook_1200x627_7.jpg"
    slug="wie-unterstuetzen"/>
    <Container>
      <Header url="/grundeinkommen-jetzt"/>
      <Row className="pb-4 mt-lg-3 pt-md-5">
        <Col lg="6">
          <p>
            Super, dass wir die
            <a href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html" className="custom-anchor font-weight-bold"> Bundestagspetition </a>
            auch offline immer noch weiter wachsen lassen können.
            Einfach Karte oder Unterschriften-Liste herunterladen, ausdrucken, Name(n) und Adresse(n) 
            eintragen, unterschreiben, in einen Briefumschlag stecken und ab die Post:
          </p>
          <p>
            Deutscher Bundestag<br/>
            Petitionsausschussdienst<br/>
            Platz der Republik 1<br/>
            11011 Berlin<br/>
          </p>
          <p>
            Alternativ auch per Fax unter +49 30 227-36053.
          </p>
          <strong>DANKE!</strong>
        </Col>
        <Col lg="6" className="mt-3 mt-lg-0">
          <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              />
          <div className="mb-5 mt-3">
            <div onClick={() => clickHandler(true, data.previewKarte)}>
              <Img fluid={data.previewKarte.childImageSharp.fluid} alt="Postkarte zur Unterzeichnung der Petition"/>
            </div>
            <div className="mt-3">
              <a href="/BGE_Unterschrift.pdf" download className="custom-anchor font-weight-bold">
                Karte herunterladen (102 kB)
              </a>
            </div>
          </div>
          <div className="mb-4">
            <div onClick={() => clickHandler(true, data.previewListe)} className="signature-list-crop">
              <Img fluid={data.previewListe.childImageSharp.fluid} alt="Unterschriftenliste zur Unterzeichnung der Petition"/>
            </div>
            <div className="mt-3">
              <a href="/BGE_Unterschrift_Auslage.pdf" download className="custom-anchor font-weight-bold">
                Unterschriftenliste herunterladen (105 kB)
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <ImageMenu/>
  </Layout>
  )
}

export default GrundeinkommenJetzt