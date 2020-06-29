import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Modal } from "react-bootstrap"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

function About() {
  const data = useStaticQuery(graphql`
    query {
      uschi: file(relativePath: { eq: "uschi_leer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      annasophie: file(relativePath: { eq: "annasophie_leer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      leonie: file(relativePath: { eq: "leonie_leer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      beatrice: file(relativePath: { eq: "beatrice_leer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      susanne: file(relativePath: { eq: "susanne_leer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      logo: file(relativePath: { eq: "logo_kachel.png" }) {
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
          <Img fluid={modalData} alt=" " />
        </Modal.Body>
      </Modal>
    )
  }
  return (
    <Layout>
      <SEO
        title="Wer wir sind"
        imgFb="/BGE_post_facebook_1200x627_3.jpg"
        slug="/wer-wir-sind"
      />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="container">
        <Header url="/wer-wir-sind" />
        <div className="row mb-3 mt-lg-3 pt-md-5">
          <div className="col-md-6">
            <p>
              <strong>Mensch in Germany - gemeinsam zum Grundeinkommen</strong>
            </p>
            <p>
              Ein Bedingungsloses Grundeinkommen für alle – wir möchten, dass
              dieser Gedanke Realität wird! Lasst uns jeden einzelnen Menschen
              in unserer Gesellschaft sehen und wertschätzen, um selbstbestimmt
              und in gegenseitigem Vertrauen zu leben. Wir sind fünf Frauen, die
              an die Idee des Grundeinkommens glauben und sich seit vielen
              Jahren dafür engagieren. Im BGE sehen wir eine finanzielle Basis,
              die uns alle trägt und die alle Formen von Arbeit ermöglicht. Denn
              Arbeit ist viel mehr als bezahlte Erwerbsarbeit und unsere
              Gesellschaft ist ganz entscheidend auf dem Fundament der
              unbezahlten Arbeit gegründet. Wir möchten den Begriff der Arbeit
              neu denken und gemeinsam neue Wege gehen.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Grundeinkommen schenkt Freiheit. Echten Freiraum, in dem wir
              selbst bestimmen, wie unser Beitrag zur Gesellschaft aussieht. Wir
              wünschen uns, dass jede*r selbstbestimmte und angstfreie
              Entscheidungen treffen kann. Wir möchten ein Bedingungsloses
              Grundeinkommen von allen für alle, um einen Boden für unsere
              Gesellschaft zu schaffen, der uns alle trägt. Lasst uns gemeinsam
              Neuland erkunden, lasst uns gemeinsam anders denken, lasst uns
              gemeinsam mutig sein!
            </p>
            <p>
              Wir wollen ein gutes Leben für alle und freuen uns über viele
              Unterstützer*Innen!
            </p>
            <p>
              Uschi Bauer, Anna-Sophie Brüning, Leonie Schraven, Beatrice
              Werner, Susanne Wiest
            </p>
          </div>
        </div>
        <div className="row row flex-row-reverse mb-3 mt-lg-3">
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-4 col-md-4 my-2">
                <div
                  className="hover-zoom"
                  onClick={() => clickHandler(true, data.uschi)}
                >
                  <Img
                    fluid={data.uschi.childImageSharp.fluid}
                    alt="Uschi Bauer"
                    className="img-thumbnail"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 my-2">
                <div
                  className="hover-zoom"
                  onClick={() => clickHandler(true, data.annasophie)}
                >
                  <Img
                    fluid={data.annasophie.childImageSharp.fluid}
                    alt="Anna-Sophie Brüning"
                    className="img-thumbnail"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 my-2">
                <div
                  className="hover-zoom"
                  onClick={() => clickHandler(true, data.leonie)}
                >
                  <Img
                    fluid={data.leonie.childImageSharp.fluid}
                    alt="Leonie Schraven"
                    className="img-thumbnail"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 my-2">
                <div
                  className="hover-zoom"
                  onClick={() => clickHandler(true, data.beatrice)}
                >
                  <Img
                    fluid={data.beatrice.childImageSharp.fluid}
                    alt="Beatrice-Werner"
                    className="img-thumbnail"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 my-2">
                <div
                  className="hover-zoom"
                  onClick={() => clickHandler(true, data.susanne)}
                >
                  <Img
                    fluid={data.susanne.childImageSharp.fluid}
                    alt="Susanne Wiest"
                    className="img-thumbnail"
                  />
                </div>
              </div>
              <div className="col-4 my-2">
                <Img
                  fluid={data.logo.childImageSharp.fluid}
                  alt="Logo Mensch in Germany"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <p>
              Mit im Team für die Realisation: Frank Bannöhr, Eva Dittberner,
              Michael Schipper, Maximilian Meeks.
            </p>
          </div>
        </div>
      </div>
      <ImageMenu />
    </Layout>
  )
}

export default About
