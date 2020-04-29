import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"
import WirSindVieleGallery from "../components/WirSindVieleGallery"




function WerdeBotschafter() {
  return (
  <Layout>
    <SEO title="Wir sind viele"
    imgFb="/BGE_post_facebook_1200x627_6.jpg"
    slug="/wir-sind-viele"/>
    <Container className="pb-lg-5">
      <Header url="/wir-sind-viele"/>
      <Row>
        <Col md='7'>
          <p>
            Je mehr wir sind, desto mehr Gewicht bekommt das Grundeinkommen im Petitionsausschuss. Schickt uns euer Foto samt Zitat an
            <a href="mailto:botschafterIn@mensch-in-germany.org" className="custom-anchor font-weight-bold"> botschafterIn@mensch-in-germany.org </a> & wir bilden alle miteinander mächtigen
            Rückenwind für unser gemeinsames Anliegen: <strong>#GrundeinkommenJETZT</strong>!
          </p>
        </Col>
      </Row>
      <WirSindVieleGallery/>
    </Container>
    <ImageMenu/>  
  </Layout>
  )
}

export default WerdeBotschafter