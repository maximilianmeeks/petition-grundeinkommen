import React from "react"
import { Link } from "gatsby"
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageGallery from "../components/ImageGallery"
import BotschafterGallery from "../components/BotschafterGallery"

import BotschafterWerner from "../components/images/BotschafterWerner"
import BotschafterSteinhaus from "../components/images/BotschafterSteinhaus"
import BtnGrundeinkommenSchwarz from "../components/images/BtnGrundeinkommenSchwarz"
import BtnGrundeinkommenOrange from "../components/images/BtnGrundeinkommenOrange"
import BotschafterBackBlack from "../components/images/BtnBotschafterBackBlack"
import BotschafterBackOrange from "../components/images/BtnBotschafterBackOrange"
import FacebookFrame from "../components/images/FacebookFrame.js"



function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Hier gehts zum Facebook Bilderrahmen!
    </Tooltip>
  );
}

function WerdeBotschafter() {
  return (
  <Layout>
    <SEO title="Werde Botschafter*in"
    imgFb="/BGE_post_facebook_1200x627_5.jpg"
    slug="/werde-botschafter"/>
    <div className="container">
      <Header url="/werde-botschafterin"/>
      <div className="row pb-4 mt-lg-3 pt-md-5">
        <div className="col-lg-6 botschafter">
          <BotschafterSteinhaus/>
          <p className="mt-3 font-italic">Helena Steinhaus, Gründerin von Sanktionsfrei:</p>
          <p className="px-5 mt-3 mb-5 text-center">
            „Grundeinkommen ist ein Grundpfeiler auf dem Weg zur sozialen und Geschlechtergerechtigkeit.”
          </p>
          <BotschafterWerner/>
          <p className="mt-3 font-italic">Götz W. Werner, Gründer von dm-drogerie markt:</p>
          <p className="px-5 mt-3 mb-5 text-center">
            „Früher oder später werden wir einsehen, dass an einem Einkommen für alle kein Weg vorbei führt. Je früher, desto besser.”
          </p>
        </div>
        <div className="col-lg-6">
          <p className="font-weight-bold">Unterstütze uns dabei, die größte Petition zum Thema Grundeinkommen zu werden.</p>
          <p>
            Wir haben schon viele Botschafter gewinnen können, wir wollen mehr erreichen.
            Du hilfst uns und der Idee voranzukommen, indem Du auf Deinen Social Media
            Kanälen unsere Posts teilst. Die stehen hier frei zum Download zur Verfügung.
            An allererster Stelle steht die Verbreitung des 
            <a className="font-weight-bold custom-anchor" href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html"> Links zur Bundestagspetition</a>.
          </p>
          <p className="mb-0">Folgende Hashtags unterstützen noch unsere Reichweite:<br/>
            <strong>#menschInGermany</strong><br/>
            <strong>#bedingungslosesGrundeinkommen</strong><br/>
            <strong>#bge</strong><br/>
          </p>
          <Row>
            <Col xs='7' className="pt-5">
              <p>
                Du willst zeigen, dass wir alle an einem Strang ziehen für’s Grundeinkommen?
                Setze ein Zeichen mit unserem <strong>Facebook Bilderrahmen</strong>! 
                Klicke dazu entweder rechts in den Kreis oder{' '}
                <a
                  className='custom-anchor font-weight-bold'
                  href='https://www.facebook.com/profilepicframes/?selected_overlay_id=1685915988226581'
                >
                   hier auf den Link
                </a>
                .
              </p>
            </Col>
            <Col xs="5">
              <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                <a
                  className='custom-anchor font-weight-bold'
                  href='https://www.facebook.com/profilepicframes/?selected_overlay_id=1685915988226581'
                >
                  <FacebookFrame/>
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
          <ImageGallery/>
        </div>
      </div>
    </div>
  <div className="bg-light pb-3">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 py-3 pt-lg-5">
                  <div className="btn-container mx-auto">
                      <Link to="/warum-grundeinkommen">
                        <BtnGrundeinkommenSchwarz/>
                          <div className="overlay col-lg-12 py-3 pt-lg-5">
                            <BtnGrundeinkommenOrange/>
                          </div>
                      </Link>
                  </div>
              </div>
              <div className="col-lg-6 pb-3 pt-lg-5">
                  <div className="btn-container mx-auto">
                      <Link to="/">
                        <BotschafterBackBlack/>
                          <div className="overlay col-lg-12 pb-3 pt-lg-5">
                            <BotschafterBackOrange/>
                          </div>
                      </Link> 
                  </div>
              </div>
          </div>
      </div>
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