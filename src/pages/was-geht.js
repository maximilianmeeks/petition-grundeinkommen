import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageGallery from "../components/ImageGallery"

import BotschafterWerner from "../components/images/BotschafterWerner"
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
  )
}

function WerdeBotschafter() {
  const data = useStaticQuery(graphql`
    query {
      presseMitteilung: file(relativePath: { eq: "presseMitteilung.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      schwarmZeit: file(relativePath: { eq: "schwarmZeit.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      stadtRadio: file(relativePath: { eq: "stadtRadio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      meinBGE: file(relativePath: { eq: "meinBGE.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Was Geht"
        imgFb="/Teaser_Was_Geht_schwarz.JPG"
        description="Hier findet ihr spannende Tools, um die Grundeinkommensidee immer mehr Menschen nahezubringen. Teilt den Imagefilm auf euren Kanälen, verbreitet die Kurzfilme zu den BGE-Modellen bzw. die Statements zu spezifischen Themenfeldern und diskutiert mit Familie und Freunden darüber."
        slug="was-geht"
      />
      <div className="container">
        <Header url="was-geht" />
        <div className="row pb-4 mt-lg-3 pt-md-5">
          <div className="col-lg-6">
            <p>
              <strong>
                Das Zeitfenster für fundamentalen Wandel steht weit offen
              </strong>{" "}
              – lassen wir den frischen Wind herein! Miteinander schaffen wir’s:
              Hier findet ihr spannende Tools, um die Grundeinkommensidee immer
              mehr Menschen nahezubringen. Teilt den Imagefilm auf euren Kanälen
              – gern auch in internationalen Foren mit englischen Untertiteln.
              Verbreitet die Kurzfilme zu den BGE-Modellen bzw. die Statements
              zu spezifischen Themenfeldern und diskutiert mit Familie und
              Freunden darüber.
            </p>
          </div>
          <div className="col-lg-6">
            Klinkt euch in unsere Zuhörungen ein und teilt sie, startet Aktionen
            und bindet den Imagefilm ein – ob bei Konzerten von Künstlern, auf
            Marktplätzen oder bei Meetings. Unser gemeinsames Ziel ist es, immer
            mehr Rückenwind zu erzeugen für die Idee, deren Zeit gekommen ist.
            Und dann führen wir das Grundeinkommen ein – von uns allen für uns
            alle.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              {" "}
              <a
                href="https://www.mein-grundeinkommen.de/magazin/petition-corona-grundeinkommen-bundestag"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  fluid={data.meinBGE.childImageSharp.fluid}
                  alt="Artikel Mein BGE"
                />
              </a>
              <div className="mt-3">
                <a
                  href="https://www.mein-grundeinkommen.de/magazin/petition-corona-grundeinkommen-bundestag"
                  className="custom-anchor font-weight-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Magazin Mein Grundeinkommen:
                </a>{" "}
                <span>
                  "Wir sehen, dass die Hilfsmaßnahmen nicht zielgenau wirken.
                  Zielgenau wäre nur das Grundeinkommen - weil es bei allen
                  ankommt, die Unterstützung benötigen."
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {" "}
            <div className="mb-4">
              <a
                href="https://www.radiolotte.de/radio/befristetes-bedingungsloses-grundeinkommen-waehrend-corona-34896.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  fluid={data.stadtRadio.childImageSharp.fluid}
                  alt="Radiobeitrag Radio Lotte Weimar"
                />
              </a>
              <div className="mt-3">
                <a
                  href="https://www.radiolotte.de/radio/befristetes-bedingungsloses-grundeinkommen-waehrend-corona-34896.html"
                  className="custom-anchor font-weight-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Radio LOTTE Weimar:
                </a>{" "}
                <span>
                  "Seit Jahren wird über eine Alternative der Geldverteilung
                  nachgedacht - das Bedingungslose Grundeinkommen. Es verwundert
                  also nicht, dass diese Idee während der Pandemie wieder an
                  Aktualität gewinnt."
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <a
                href="/PM_Mensch_in_Germany_Anhoerung_Petition_Grundeinkommen_21_10_2020.pdf"
                download
                className="custom-anchor font-weight-bold"
              >
                <Img
                  fluid={data.presseMitteilung.childImageSharp.fluid}
                  alt="Pressemitteilung"
                />
              </a>
              <div className="mt-3">
                <a
                  href="/PM_Mensch_in_Germany_Anhoerung_Petition_Grundeinkommen_21_10_2020.pdf"
                  download
                  className="custom-anchor font-weight-bold"
                >
                  Pressemitteilung
                </a>{" "}
                <span>
                  zur Anhörung der erfolgreichsten Online-Petition aller Zeiten
                  an den Bundestag: Höchste Zeit für einen großen Wurf –
                  Grundeinkommen JETZT!
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <a
                href="https://schwarmzeit.net/2020/10/22/keine-existenznot-mehr-teilhabe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  fluid={data.schwarmZeit.childImageSharp.fluid}
                  alt="Podcast Schwarmzeit"
                />
              </a>
              <div className="mt-3">
                <a
                  href="https://schwarmzeit.net/2020/10/22/keine-existenznot-mehr-teilhabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-anchor font-weight-bold"
                >
                  Schwarmzeit:
                </a>{" "}
                <span>
                  "Im Podcast berichtet Susanne Wiest über die wachsende
                  Bewegung für ein Grundeinkommen & wie sie das Petitionswesen
                  auf Bundesebene erlebt."
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/igjD1DQOO5c"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/lahiGJT5DNo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/HdwbNECDqJE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/i8MoaAJXu9U"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <Link to="/wir-sind-viele">
              <BotschafterWerner />
            </Link>
            <p className="mt-2 mb-4 font-italic">
              Götz W. Werner, Gründer von dm-drogerie markt
            </p>
          </div>
          <div className="col-lg-6">
            <p className="font-weight-bold">
              Unterstütze uns dabei, die größte Petition zum Thema
              Grundeinkommen - on- & offline - zu werden.
            </p>
            <p>
              Wir haben schon viele{" "}
              <Link
                to="wir-sind-viele"
                className="custom-anchor font-weight-bold"
              >
                Botschafter*innen
              </Link>{" "}
              gewinnen können, wir wollen mehr erreichen. Du hilfst uns und der
              Idee voranzukommen, indem Du auf Deinen Social Media Kanälen
              unsere Posts teilst. Die stehen hier frei zum Download zur
              Verfügung.
            </p>
            <p className="mb-0">
              Folgende Hashtags unterstützen noch unsere Reichweite:
              <br />
              <strong>#menschInGermany</strong>
              <br />
              <strong>#bedingungslosesGrundeinkommen</strong>
              <br />
              <strong>#bge</strong>
              <br />
            </p>
            <Row>
              <Col xs="7" className="pt-5">
                <p>
                  Du willst zeigen, dass wir alle an einem Strang ziehen für’s
                  Grundeinkommen? Setze ein Zeichen mit unserem{" "}
                  <a
                    className="custom-anchor font-weight-bold"
                    target="_blank"
                    href="https://www.facebook.com/profilepicframes/?selected_overlay_id=271818057413576"
                  >
                    Facebook Bilderrahmen
                  </a>
                  ! Klicke dazu entweder rechts in den Kreis oder{" "}
                  <a
                    className="custom-anchor font-weight-bold"
                    target="_blank"
                    href="https://www.facebook.com/profilepicframes/?selected_overlay_id=271818057413576"
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
                    className="custom-anchor font-weight-bold"
                    target="_blank"
                    href="https://www.facebook.com/profilepicframes/?selected_overlay_id=271818057413576"
                  >
                    <FacebookFrame />
                  </a>
                </OverlayTrigger>
              </Col>
            </Row>
            <ImageGallery />
          </div>
        </div>
      </div>
      <div className="bg-light pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3 pt-lg-5">
              <div className="btn-container mx-auto">
                <Link to="/grundeinkommen-konkret">
                  <BtnGrundeinkommenSchwarz />
                  <div className="overlay col-lg-12 py-3 pt-lg-5">
                    <BtnGrundeinkommenOrange />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 pb-3 pt-lg-5">
              <div className="btn-container mx-auto">
                <Link to="/">
                  <BotschafterBackBlack />
                  <div className="overlay col-lg-12 pb-3 pt-lg-5">
                    <BotschafterBackOrange />
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
                <Link to="/impressum/" className="mx-3">
                  Impressum
                </Link>
                <Link to="/datenschutz/" className="mx-3">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default WerdeBotschafter
