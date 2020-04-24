import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

import BotschafterAmira from "../components/images/BotschafterAmira"
import BotschafterAnnaSophie from "../components/images/BotschafterAnnaSophie"
import BotschafterLeonie from "../components/images/BotschafterLeonie"
import BotschafterSusanne from "../components/images/BotschafterSusanne"
import BtnGrundeinkommenSchwarz from "../components/images/BtnGrundeinkommenSchwarz"
import BtnGrundeinkommenOrange from "../components/images/BtnGrundeinkommenOrange"
import BotschafterBackBlack from "../components/images/BtnBotschafterBackBlack"
import BotschafterBackOrange from "../components/images/BtnBotschafterBackOrange"




function WerdeBotschafter() {
  return (
  <Layout>
    <SEO title="Wir sind viele"
    imgFb="/BGE_post_facebook_1200x627_6.jpg"
    slug="/wir-sind-viele"/>
    <Container className="pb-lg-5">
      <Header url="/wir-sind-viele"/>
      <Row className="wir-sind-viele pb-4 mt-lg-3 pt-md-5">
        <Col lg="6">
          <div>
            <BotschafterAnnaSophie/>
          </div>
          <div>
            <BotschafterLeonie/>
          </div>
        </Col>
        <Col lg="6">
          <div>
            <BotschafterSusanne/>
          </div>
          <div>
            <BotschafterAmira/>
          </div>
        </Col>
      </Row>
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