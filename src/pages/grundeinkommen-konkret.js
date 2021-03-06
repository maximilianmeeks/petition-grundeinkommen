import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ImageMenu from "../components/ImageMenu"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

function WarumGrundeinkommen() {
  const data = useStaticQuery(graphql`
    query {
      modelNeumaerker: file(relativePath: { eq: "modell_neumaerker.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      modelSpermann: file(relativePath: { eq: "grundeinkommen_spermann.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      previewOnePageDE: file(
        relativePath: { eq: "Onepage_NGH_de_30-11-2020.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      previewOnePageEN: file(
        relativePath: { eq: "Onepage_NGH_en_30-11-2020.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const [modalShow, setModalShow] = useState(false)
  const [modalData, setModalData] = useState(null)

  function clickHandler(toggleModal, load) {
    setModalData(load.childImageSharp.fluid)
    setModalShow(toggleModal)
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <Img fluid={modalData} alt="Paper" />
        </Modal.Body>
      </Modal>
    )
  }
  return (
    <Layout>
      <SEO
        title="Grundeinkommen Konkret"
        imgFb="/Teaser_Grundeinkommen_Konkret_schwarz.jpg"
        description="Das Grundeinkommen soll dazu beitragen, Armut und soziale Notlagen zu beseitigen, den individuellen Freiheitsspielraum zu vergrößern sowie die Entwicklungschancen jedes Einzelnen und die soziale und kulturelle Situation im Gemeinwesen nachhaltig zu verbessern."
        slug="/grundeinkommen-konkret"
      />
      <div className="container">
        <Header url="/grundeinkommen-konkret" />
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <div className="row mb-3 mt-lg-3 pt-md-5">
          <div className="col-lg-6">
            <strong>
              <p>
                Das bedingungslose Grundeinkommen ist ein Einkommen für alle
                Menschen,
              </p>
              <ul>
                <li>
                  das Existenz sichernd ist und gesellschaftliche Teilhabe
                  ermöglicht,
                </li>
                <li>auf das ein individueller Rechtsanspruch besteht</li>
                <li>das ohne Bedürftigkeitsprüfung und</li>
                <li>ohne Zwang zu Arbeit oder anderen Gegenleistungen</li>
              </ul>
              <p>garantiert wird.</p>
            </strong>
          </div>
          <div className="col-lg-6">
            <p>
              Das Grundeinkommen soll dazu beitragen, Armut und soziale Notlagen
              zu beseitigen, den individuellen Freiheitsspielraum zu vergrößern
              sowie die Entwicklungschancen jedes Einzelnen und die soziale und
              kulturelle Situation im Gemeinwesen nachhaltig zu verbessern.
            </p>
          </div>
        </div>
        <div className="row mb-3 mt-lg-3">
          <div className="col-lg-8 offset-lg-2">
            <p>
              Hier stellen wir verschiedene wissenschaftliche Modelle zur
              Einführung eines Grundeinkommens in der Krise zur Diskussion.
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6">
            <div className="mb-4">
              <div
                onClick={() => clickHandler(true, data.previewOnePageDE)}
                className="signature-list-crop cursor-pointer"
              >
                <Img
                  fluid={data.previewOnePageDE.childImageSharp.fluid}
                  alt="Das Netto-Grundeinkommen - eine Sofortmaßnahme zur Sicherung der Bevölkerung in Krisenzeiten"
                />
              </div>
              <div className="mt-3">
                <a
                  href="/Onepage_NGH_de_30-11-2020.pdf"
                  download
                  className="custom-anchor font-weight-bold"
                >
                  Paper herunterladen (83 kB)
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <div
                onClick={() => clickHandler(true, data.previewOnePageEN)}
                className="signature-list-crop cursor-pointer"
              >
                <Img
                  fluid={data.previewOnePageEN.childImageSharp.fluid}
                  alt="The net basic income - an immediate measure to protect the population in the crises"
                />
              </div>
              <div className="mt-3">
                <a
                  href="/Onepage_NGH_en_30-11-2020.pdf"
                  download
                  className="custom-anchor font-weight-bold"
                >
                  Paper herunterladen (78 kB)
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/J7ZxDtKgtwk"
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
              src="https://www.youtube.com/embed/ive0DnFXrE0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/CbuSgNTpUsE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Prof. Bernhard Neumärker stellt sein Modell eines
              Netto-Grundeinkommens vor, das in der Krise eingeführt und danach
              zu einem vollen Bedingungslosen Grundeinkommen ausgebaut werden
              kann. (ca. 5 Minuten)
            </p>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <div
                onClick={() => clickHandler(true, data.modelNeumaerker)}
                className="signature-list-crop cursor-pointer"
              >
                <Img
                  fluid={data.modelNeumaerker.childImageSharp.fluid}
                  alt="Paper Modell Neumärker"
                />
              </div>
              <div className="mt-3">
                <a
                  href="/NGE-Paper_Neumaerker_FRIBIS_def.pdf"
                  download
                  className="custom-anchor font-weight-bold"
                >
                  Paper herunterladen (89 kB)
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/3Samj6szLIs"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Prof. Alexander Spermann stellt sein Modell eines Basisgelds mit
              Steuergutschrift vor, das neben der automatischen Auszahlung des
              Regelsatzes der Grundsicherung eine Neuberechnung der
              Lohnsteuertabellen vorsieht und als Steuergutschrift einen
              Zuschuss gewährt, der ein Einkommen in Höhe der
              Armutsrisikoschwelle (60 % des Medianeinkommens) sicherstellt.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <div
                onClick={() => clickHandler(true, data.modelSpermann)}
                className="signature-list-crop cursor-pointer"
              >
                <Img
                  fluid={data.modelSpermann.childImageSharp.fluid}
                  alt="Paper Modell Spermann"
                />
              </div>
              <div className="mt-3">
                <a
                  href="/Zuhoerung_Basisgeld_Spermann_15-7-2020.pdf"
                  download
                  className="custom-anchor font-weight-bold"
                >
                  Paper herunterladen (356 kB)
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/f-_zzXm4cZM"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Der emeritierte Univ.-Prof. Dr. Dr.h.c.mult. Friedrich Schneider
              der Abteilung für Wirtschaftspolitik war zwei Mal in Folge
              einflussreichster Ökonom in Österreich laut dem Ökonomen-Ranking
              der ‚Presse‘ und ist seit Juni 2013 Vorsitzender des Academic
              Advisory Boards der Zeppelin Universität in Friedrichshafen. Hier
              stellt er sein Modell eines Grundeinkommens vor.
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/8NwL5upRW5E"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Prof. Dr. Sascha Liebermann ist Professor für Soziologie am
              Institut für philosophische und ästhetische Bildung, Fachbereich
              Bildungswissenschaft, an der Alanus Hochschule für Kunst und
              Gesellschaft in Alfter bei Bonn. Außerdem Consultant Editor der
              Basic Income Studies, De Gruyter, Mitbegründer und Vorstand (bis
              2007) des Institut für hermeneutische Sozial- und Kulturforschung
              e.V. in Frankfurt am Main sowie Mitbegründer und aktives Mitglied
              der Initiative Freiheit statt Vollbeschäftigung. Hier spricht er
              über den Widerspruch zwischen heutigem Sozialstaat und Demokratie
              und die Korrespondenz des Grundeinkommens mit der grundlegenden
              Annahme der Autonomie.
            </p>
          </div>
        </div>
      </div>
      <ImageMenu />
    </Layout>
  )
}

export default WarumGrundeinkommen
