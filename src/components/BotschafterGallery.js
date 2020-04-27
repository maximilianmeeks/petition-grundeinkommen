import React, { useState } from "react"
import { Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*global FB*/

function BotschafterGallery(props) {
    const data = useStaticQuery(graphql `
    query {
            botschafter01: file(relativePath: { eq: "Botschafter_Contentbild_Steinhaus.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            botschafter02: file(relativePath: { eq: "Statements_facebook_1200x627_Goetz.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
            }
            botschafter03: file(relativePath: { eq: "Statements_facebook_1200x627_Amy.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
            }
            botschafter04: file(relativePath: { eq: "Statements_facebook_1200x627_Susanne.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }

          }

      `)
      const [modalShow, setModalShow] = useState(false);
      const [modalData, setModalData] = useState(null)
      
      function clickHandler(toggleModal, load){
        setModalData(load.childImageSharp.fluid)
        setModalShow(toggleModal)
      }

      function postToFb(image){
        FB.ui({
            method: 'share',
            hashtag: '#menschInGermany',
            href: 'https://www.mensch-in-germany.org/'+image
        });  
      }

      function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton/>
            <Modal.Body>
              <Img fluid={modalData} alt="Botschafter"/>
            </Modal.Body>
            <Modal.Footer className="post-social">
              <span className="font-weight-bold">Jetzt teilen: </span>
              <Button className="button facebook" onClick={() => postToFb(modalData.src)}>
                <FontAwesomeIcon icon={["fab", "facebook"]} size="2x"/>
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }

      return (
        <div className="botschafter">
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            <div onClick={() => clickHandler(true, data.botschafter01)}>
              <Img fluid={data.botschafter01.childImageSharp.fluid} alt="Botschafter"/>
              <p className="mt-3 font-italic">Helena Steinhaus, Gründerin von Sanktionsfrei:</p>
              <p className="px-5 mt-3 mb-5 text-center">
                „Grundeinkommen ist ein Grundpfeiler auf dem Weg zur sozialen und Geschlechtergerechtigkeit.”
              </p>
            </div>
            <div onClick={() => clickHandler(true, data.botschafter02)}>
              <Img fluid={data.botschafter02.childImageSharp.fluid} alt="Botschafter"/>
              <p className="mt-3 mb-5 font-italic">Götz W. Werner, Gründer von dm-drogerie markt</p>
            </div>
            <div onClick={() => clickHandler(true, data.botschafter03)}>
              <Img fluid={data.botschafter03.childImageSharp.fluid} alt="Botschafter"/>
              <p className="mt-3 mb-5 font-italic">Anny Hartmann, politisches Kabarett</p>
            </div>
            <div onClick={() => clickHandler(true, data.botschafter04)}>
              <Img fluid={data.botschafter04.childImageSharp.fluid} alt="Botschafter"/>
              <p className="mt-3 mb-5 font-italic">Susanne Wiest, Bundestagspetition 108191 zur Einführung eines Bedingungslosen Grundeinkommens</p>
            </div>
        </div>  
      )
    }
    
    export default BotschafterGallery
    
