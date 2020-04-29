import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

import PreviewBGEUnterschrift from "../components/images/PreviewBGEUnterschrift"


function WerdeBotschafter() {
  return (
  <Layout>
    <SEO title="#GrundeinkommenJETZT"
    imgFb="/BGE_post_facebook_1200x627_7.jpg"
    slug="/werde-botschafter"/>
    <Container className="pb-4">
      <Header url="/grundeinkommen-jetzt"/>
      <Row className="pb-4 mt-lg-3 pt-md-5">
        <Col lg="6">
          <p>
            Super, dass wir die Bundestagspetition auch offline immer noch weiter wachsen lassen können.
            Einfach Karte ausdrucken, Name und Adresse eintragen, unterschreiben, in einen Briefumschlag
            stecken und ab die Post:
          </p>
          <p>
            Deutscher Bundestag<br/>
            Petitionsausschussdienst<br/>
            Platz der Republik 1<br/>
            11011 Berlin<br/>
          </p>
          <p>
            Alternativ auch per Fax unter +49 30 227-36053
          </p>
          <p>DANKE!</p>
        </Col>
        <Col lg="6">
          <a href="/BGE_Unterschrift.pdf" download>
            <PreviewBGEUnterschrift/>
          </a>
          <div className="mt-3">
            <a href="/BGE_Unterschrift.pdf" download className="custom-anchor font-weight-bold">
              Karte herunterladen (102 kB)
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    <ImageMenu/>
  </Layout>
  )
}

export default WerdeBotschafter