import React, { useState } from "react"
import { Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*global FB*/

function WirSindVieleGallery(props) {
    const data = useStaticQuery(graphql `
    query {
            botschafter01: file(relativePath: { eq: "Statements_facebook10.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            botschafter02: file(relativePath: { eq: "Statements_facebook8.png"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
            }
            botschafter03: file(relativePath: { eq: "Statements_facebook_1200x627_Goetz.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
            }
            botschafter04: file(relativePath: { eq: "Statements_facebook_1200x627_Amy.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
            botschafter05: file(relativePath: { eq: "Statements_facebook_1200x627_Leonie.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
            botschafter06: file(relativePath: { eq: "Statements_facebook9.png"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
            botschafter07: file(relativePath: { eq: "Statements_facebook_1200x627_Anna-Sophie.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
            botschafter08: file(relativePath: { eq: "Statements_facebook_1200x627_Susanne.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
            botschafter09: file(relativePath: { eq: "Statements_facebook_1200x627_Amira.jpg"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
            botschafter10: file(relativePath: { eq: "Statements_facebook_Helena.png"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
            botschafter11: file(relativePath: { eq: "Statements_facebook_Uschi.png"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
            botschafter12: file(relativePath: { eq: "Statements_facebook_Beatrice.png"}) {
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
        <div className="wir-sind-viele mt-3">
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
          <Row>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter01)}>
                <Img fluid={data.botschafter01.childImageSharp.fluid} alt="Dr. Valentine Reimer, 'Wir brauchen ein bedingungsloses Grundeinkommen, damit unser umfangreiches und wertvolles Know-how besser mit dem Know-why verknüpft wird."/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter02)}>
                <Img fluid={data.botschafter02.childImageSharp.fluid} alt="Wilfried Schmickler, 'Ich bin für ein Grundeinkommen, damit alle ein Auskommen haben."/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter03)}>
                <Img fluid={data.botschafter03.childImageSharp.fluid} alt="Götz Werner, 'Früher oder später werden wir einsehen, dass an einem Einkommen für alle kein Weg vorbei führt. Je früher, desto besser."/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter04)}>
                <Img fluid={data.botschafter04.childImageSharp.fluid} alt={`Anny Hartmann, "Die Corona-Krise zeigt, dass die Finanzierbarkeit von Maßnahmen nie eine Rolle spielt. Alles, was politisch gewollt ist, ist auch finanzierbar. Die Frage ist also nicht 'Was kostet ein Grundeinkommen?', sondern sie lautet 'ist die Freiheit des Individuums politisch gewollt'"`}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter05)}>
                <Img fluid={data.botschafter05.childImageSharp.fluid} alt="Leonie Schraven, 'Wer sagt denn, dass es nicht auch anders sein kann? Lasst uns gemeinsam Neuland erkunden, lasst uns gemeinsam anders denken, lasst uns gemeinsam mutig sein!"/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter06)}>
                <Img fluid={data.botschafter06.childImageSharp.fluid} alt="Diogenes von der Töss, 'Mit einem bedingungslosen Grundeinkommen haben wir alle wieder mehr Zeit und Lust zum Zusammenwirken, Zusammenhalten und unser Leben lebenswert zu gestalten!'"/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter07)}>
                <Img fluid={data.botschafter07.childImageSharp.fluid} alt="Anna-Sophie Brüning, 'Ich bin Mensch in Germany - ich bin fürs Grundeinkommen, damit wir angsqtfreie und selbstbestimmte Entscheidungen treffen können. Für uns selbst und für uns alle zusammen.'"/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter08)}>
                <Img fluid={data.botschafter08.childImageSharp.fluid} alt="Susanne Wiest, 'Mit dem Bedingungslosen Grundeinkommen von allen für alle ziehen wir unserer Gesellschaft einen Boden ein, der alle trägt.'"/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter09)}>
                <Img fluid={data.botschafter09.childImageSharp.fluid} alt="Amira Jehia, 'Grundeinkommen befähigt uns dazu, unser Leben wirklich selbst in die Hand zu nehmen. Vor allem für Frauen und Kinder birgt es ein enormes Potential für echte Emanzipation.'"/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter10)}>
                <Img fluid={data.botschafter10.childImageSharp.fluid} alt="Helena Steinhaus, 'Grundeinkommen ist ein Grundpfeiler auf dem Weg zur sozialen und Geschlechter-Gerechtigkeit"/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter11)}>
                <Img fluid={data.botschafter11.childImageSharp.fluid} alt="Uschi Bauer, 'Grundeinkommen macht glücklich. Weil es bedingungslos ist. Und uns Freiheit schenkt - echten Freiraum, in dem wir selbst bestimmen, wie unser Beitrag zur Gesellschaft aussieht."/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div onClick={() => clickHandler(true, data.botschafter12)}>
                <Img fluid={data.botschafter12.childImageSharp.fluid} alt="Beatrice Werner, 'Lasst uns jeden einzelnen Menschen in unserer Gesellschaft sehen und wertschätzen, um selbstbestimmt und in gegenseitigem Vertrauen zu leben'"/>
              </div>
            </Col>
          </Row>
        </div>  
      )
    }
    
    export default WirSindVieleGallery
    
