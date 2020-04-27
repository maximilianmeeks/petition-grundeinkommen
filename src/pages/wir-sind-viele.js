import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

import BtnGrundeinkommenSchwarz from "../components/images/BtnGrundeinkommenSchwarz"
import BtnGrundeinkommenOrange from "../components/images/BtnGrundeinkommenOrange"
import BotschafterBackBlack from "../components/images/BtnBotschafterBackBlack"
import BotschafterBackOrange from "../components/images/BtnBotschafterBackOrange"
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
  <div className="bg-light pb-3">
      <Container>
        <Row>
          <Col lg="6" className="py-3 pt-lg-5">
              <div className="btn-container mx-auto">
                  <Link to="/warum-grundeinkommen">
                    <BtnGrundeinkommenSchwarz/>
                      <div className="overlay col-lg-12 py-3 pt-lg-5">
                        <BtnGrundeinkommenOrange/>
                      </div>
                  </Link>
              </div>
          </Col>
          <Col lg="6" className="pb-3 pt-lg-5">
              <div className="btn-container mx-auto">
                  <Link to="/">
                    <BotschafterBackBlack/>
                      <div className="overlay col-lg-12 pb-3 pt-lg-5">
                        <BotschafterBackOrange/>
                      </div>
                  </Link> 
              </div>
          </Col>
        </Row>
      </Container>
      <footer className="py-2">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <Link to="/impressum/" className="mx-3">Impressum</Link>
                    <Link to="/datenschutz/" className="mx-3">Datenschutz</Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  </Layout>
  )
}

export default WerdeBotschafter