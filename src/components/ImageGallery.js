import React, { useState } from "react"
import { Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/*global FB*/

function ImageGallery(props) {
  const data = useStaticQuery(graphql`
    query {
      facebook01: file(
        relativePath: { eq: "BGE_post_facebook_1200x627_1.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      facebook02: file(
        relativePath: { eq: "BGE_post_facebook_1200x627_2.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      facebook03: file(
        relativePath: { eq: "BGE_post_facebook_1200x627_3.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      facebook04: file(
        relativePath: { eq: "BGE_post_facebook_1200x627_4.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      facebook05: file(
        relativePath: { eq: "BGE_post_facebook_1200x627_5.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      facebook06: file(
        relativePath: { eq: "BGE_post_facebook_1200x627_6.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      facebook07: file(
        relativePath: { eq: "BGE_post_facebook_1200x627_7.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      facebook09: file(
        relativePath: { eq: "BGE_post_facebook_1200x627_9.jpg" }
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

  function postToFb(image) {
    FB.ui({
      method: "share",
      hashtag: "#menschInGermany",
      href: "https://www.mensch-in-germany.org/" + image,
    })
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
          <Img fluid={modalData} alt="Facebook 01" />
        </Modal.Body>
        <Modal.Footer className="post-social">
          <span className="font-weight-bold">Jetzt teilen: </span>
          <Button
            className="button facebook"
            onClick={() => postToFb(modalData.src)}
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <div className="img-gallery">
      <p className="mt-4 mb-3 font-weight-bold">
        Teile gern unser Banner direkt auf Facebook:
      </p>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Row>
        <Col xs={6}>
          <div
            className="hover-zoom"
            onClick={() => clickHandler(true, data.facebook01)}
          >
            <Img
              fluid={data.facebook01.childImageSharp.fluid}
              alt="Thumbnail"
              className="img-thumbnail"
            />
          </div>
        </Col>
        <Col xs={6}>
          <div
            className="hover-zoom"
            onClick={() => clickHandler(true, data.facebook02)}
          >
            <Img
              fluid={data.facebook02.childImageSharp.fluid}
              alt="Thumbnail"
              className="img-thumbnail"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div
            className="hover-zoom"
            onClick={() => clickHandler(true, data.facebook03)}
          >
            <Img
              fluid={data.facebook03.childImageSharp.fluid}
              alt="Thumbnail"
              className="img-thumbnail"
            />
          </div>
        </Col>
        <Col xs={6}>
          <div
            className="hover-zoom"
            onClick={() => clickHandler(true, data.facebook04)}
          >
            <Img
              fluid={data.facebook04.childImageSharp.fluid}
              alt="Thumbnail"
              className="img-thumbnail"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div
            className="hover-zoom"
            onClick={() => clickHandler(true, data.facebook05)}
          >
            <Img
              fluid={data.facebook05.childImageSharp.fluid}
              alt="Thumbnail"
              className="img-thumbnail"
            />
          </div>
        </Col>
        <Col xs={6}>
          <div
            className="hover-zoom"
            onClick={() => clickHandler(true, data.facebook06)}
          >
            <Img
              fluid={data.facebook06.childImageSharp.fluid}
              alt="Thumbnail"
              className="img-thumbnail"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div
            className="hover-zoom"
            onClick={() => clickHandler(true, data.facebook07)}
          >
            <Img
              fluid={data.facebook07.childImageSharp.fluid}
              alt="Thumbnail"
              className="img-thumbnail"
            />
          </div>
        </Col>
        <Col xs={6}>
          <div
            className="hover-zoom"
            onClick={() => clickHandler(true, data.facebook09)}
          >
            <Img
              fluid={data.facebook09.childImageSharp.fluid}
              alt="Thumbnail"
              className="img-thumbnail"
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ImageGallery
