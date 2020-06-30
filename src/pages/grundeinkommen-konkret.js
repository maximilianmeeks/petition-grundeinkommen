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
        imgFb="/BGE_post_facebook_1200x627_1.jpg"
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
            <p>
              Das Grundeinkommen soll dazu beitragen, Armut und soziale Notlagen
              zu beseitigen, den individuellen Freiheitsspielraum zu vergrößern
              sowie die Entwicklungschancen jedes Einzelnen und die soziale und
              kulturelle Situation im Gemeinwesen nachhaltig zu verbessern.
            </p>
          </div>
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
            <div className="my-4">
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
                  href="/NGE-Paper Neumärker FRIBIS_def.pdf"
                  download
                  className="custom-anchor font-weight-bold"
                >
                  Paper herunterladen (89 kB)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageMenu />
    </Layout>
  )
}

export default WarumGrundeinkommen
