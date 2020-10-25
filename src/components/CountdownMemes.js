import React, { useState, useEffect } from "react"
import { Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ParlamentStream from "./ParlamentStream"
import CountdownMonday from "./images/CountdownMonday"

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
  const [date, setDate] = useState(new Date())
  const [currentDay, setCurrentDay] = useState(date.getDate())
  const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1)
  const [currentHour, setCurrentHour] = useState(date.getHours())
  const [currentMinute, setCurrentMinute] = useState(date.getMinutes())
  const [parlamentStreamActive, setParlamentStreamActive] = useState()
  const [youtubeStreamActive, setYoutubeStreamActive] = useState()

  useEffect(() => {
    timedContent()
  }, [])

  useEffect(() => {
    setInterval(() => setNewDay(), 30000)
  })

  function setNewDay() {
    let newDate = new Date()
    let day = newDate.getDate()
    let hour = newDate.getHours()
    let minutes = newDate.getMinutes()

    setCurrentDay(day)
    setCurrentHour(hour)
    setCurrentMinute(minutes)
    timedContent()
  }

  function timedContent() {
    if (currentDay === 26 && currentHour >= 11 && currentMinute >= 45) {
      setParlamentStreamActive(true)
    }
    if (currentDay === 26 && currentHour >= 12) {
      setParlamentStreamActive(true)
      setYoutubeStreamActive(true)
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
      <div>
        {parlamentStreamActive ? (
          <div>
            <Row>
              <Col xs={12} md={6}>
                <ParlamentStream />
              </Col>
              <Col xs={12} md={6}>
                <CountdownMonday />
              </Col>
            </Row>
          </div>
        ) : (
          <Row>
            {data.allFile.nodes.map(node => {
              return (
                <Col xs={12} md={10} key={node.name} className="offset-md-1">
                  {currentDay.toString() + currentMonth.toString() ===
                  node.name ? (
                    <div
                      onClick={() =>
                        clickHandler(true, node.childImageSharp.fluid)
                      }
                    >
                      <Img
                        fluid={node.childImageSharp.fluid}
                        alt=""
                        className="mb-3 mb-md-0"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              )
            })}
          </Row>
        )}
      </div>
    </div>
  )
}

export default CountdownMemes
