import React, { useState, useEffect } from "react"
import { Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/*global FB*/

function CountdownMemes(props) {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "countdown-memes" } }
        sort: { fields: relativePath, order: ASC }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  `)

  const [modalShow, setModalShow] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [currentDay, setCurrentDay] = useState(new Date().getDate())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)

  useEffect(() => {
    setInterval(() => setNewDay(), 1000)
  })

  function setNewDay() {
    if (currentDay) {
      const date = new Date().getDate()
      setCurrentDay(date)
    }
  }


  function clickHandler(toggleModal, load) {
    setModalData(load)
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
          <Img fluid={modalData} alt="Botschafter" />
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
    <div className="mt-3">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Row>
      {data.allFile.nodes.map((node) => {
        return(
          <Col xs={12} md={10} key={node.name} className="offset-md-1">
              {(currentDay.toString() + currentMonth.toString() === node.name) ? 
                <div onClick={() => clickHandler(true, node.childImageSharp.fluid)}>
                  <Img fluid={node.childImageSharp.fluid} alt="" className="mb-5 mb-md-0"/>
                </div> : ""} 
          </Col>
        )
      })}
      </Row>
    </div>
  )
}

export default CountdownMemes
