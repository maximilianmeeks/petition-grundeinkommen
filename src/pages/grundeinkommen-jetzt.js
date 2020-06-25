import React, { useState } from "react"
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"



/*global FB*/


function GrundeinkommenJetzt() {
  const data = useStaticQuery(graphql `
  query {
          previewListe: file(relativePath: { eq: "Preview_BGE_Unterschrift_Auslage.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
          }
          previewKarte: file(relativePath: { eq: "Preview_BGE_Unterschrift.png"}) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
          previewLetter: file(relativePath: { eq: "Offener-Brief-zur-Bundestagspetition-108191_Page_1.png"}) {
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
  <Layout>
    <SEO title="#GrundeinkommenJETZT"
    imgFb="/BGE_post_facebook_1200x627_7.jpg"
    slug="wie-unterstuetzen"/>
    <Container>
      <Header url="/grundeinkommen-jetzt"/>
      <Row className="pb-4 mt-lg-3 pt-md-5">
        <Col lg="8">
          <div>
            <p>
              Das Grundeinkommen ist die politische Idee der Stunde – es muss nur noch
              ankommen im Bundestag. Schnell. Direkt. Unbürokratisch. Deshalb haben sich
              alle Petent*innen verbündet und diesen Offenen Brief formuliert – unterstützt
              von einem<a className="custom-anchor font-weight-bold" href="https://www.mein-grundeinkommen.de/infos/offener-brief" target="_blank"> breiten Bündnis aus der Zivilgesellschaft</a>. Wir sind viele und werden
              immer mehr - eine <a className="custom-anchor font-weight-bold" href="https://expedition-grundeinkommen.de/offenerbrief" target="_blank">kraftvolle Bewegung</a> versammelt sich hinter der
              Bundestagspetition & fordert <a className="custom-anchor font-weight-bold" href="https://grundeinkommenjetzt.de/" target="_blank">#GrundeinkommenJETZT</a>!
            </p>
          </div>
          <div id="letter" className="letter my-5 py-3">
            <span className="text-light">Berlin, Alt Tellin, Zossen, Leipzig und Köln, den 05. Mai 2020</span>
            <h2 className="pt-2 pb-4">
              Offener Brief an die Abgeordneten <span className="nowrap"> des Deutschen Bundestags</span>, <span className="nowrap">das Ministerium für Arbeit und Soziales</span>,
              <span className="nowrap"> das Finanzministerium</span> sowie <span className="nowrap">die Bundeskanzlerin Angela Merkel</span>
            </h2>
            <p>
              Sehr geehrte Abgeordnete des Petitionsausschusses des Deutsches Bundestags,
            </p>
            <p>
              176.134 Menschen fordern mit ihrer Unterschrift unter der <a href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html" target="_blank"> Petition 108191 </a>
              ein existenzsicherndes Grundeinkommen für die Dauer der Coronakrise. Damit wird
              diese Petition von mehr Menschen unterstützt als jede andere Online-Petition
              an den Deutschen Bundestag zuvor.
            </p>
            <p>
              In dieser und<a target="_blank" href="https://www.change.org/p/finanzminister-olaf-scholz-und-wirtschaftsminister-peter-altmaier-mit-dem-bedingungslosen-grundeinkommen-durch-die-coronakrise-coronavirusde-olafscholz-peteraltmaier-bmas-bund-hubertus-heil"> zwei </a>
              <a target="_blank" href="https://www.openpetition.de/petition/online/hilfen-fuer-freiberufler-und-kuenstler-waehrend-des-corona-shutdowns-2"> weiteren </a>
              Petitionen, die wir unabhängig voneinander angestoßen haben, sprechen sich bis heute
              insgesamt mehr als 785.000 Unterzeichnende für ein befristetes Krisen-Grundeinkommen aus. Dies ist keine Forderung Einzelner, sondern Ausdruck einer breiten, gesellschaftlichen Bewegung.
            </p>
            <p>
              Sie haben als Mitglieder des Deutschen Bundestages in den letzten Wochen gezeigt, dass die Politik zu schnellem,
              unbürokratischem und großzügigem Handeln imstande ist, um die Folgen der Corona-Pandemie einzudämmen.
            </p>
            <p className="font-weight-bold">
              Lassen Sie uns jetzt miteinander darüber sprechen: Wie schaffen wir es, dass niemand in dieser beispiellosen Krise ohne ein existenzsicherndes Einkommen bleibt? Wir bitten Sie eindringlich, unser Anliegen
              eines Krisen-Grundeinkommens für Alle so schnell wie möglich auf die politische Tagesordnung zu setzen!
            </p>
            <p>
              Wir alle sind die Wirtschaft, wir alle sind der Staat, wir alle sind die Gesellschaft. Viele Menschen, die bislang zu oft
              übersehen wurden, erkennen wir jetzt als systemrelevant: ihre Arbeit in der Pflege, an den Kassen und Regalen
              der Lebensmittelgeschäfte, in der unbezahlten Betreuung und Unterstützung von Kindern, Familie und Nachbarn.
              Sie alle brauchen jetzt ein Signal von Ihnen, dass ihr Beitrag zum Durchstehen der Coronakrise gesehen und wertgeschätzt wird. Alle brauchen jetzt finanzielle Sicherheit und die Gewissheit, dass unsere Regierung auch in schweren Zeiten für alle da ist.
            </p>
            <p>
              Die bisher beschlossenen Finanzhilfen sind ein großer Schritt in die richtige Richtung – aber sie erzeugen bei vielen
              Menschen anstelle von Sicherheit ein Gefühl der Verunsicherung, weil ihnen die Regeln zur Berechtigung oder
              Rückzahlung unklar sind. Andere Menschen fallen komplett durch das Hilfenetz, trotz der Bemühungen Ihrerseits,
              diese Lücken zu schließen.
            </p>
            <p className="font-weight-bold">
              Sie haben mit der schnellstmöglichen Anhörung dieser Petition am 15. Juni 2020 im Deutschen Bundestag
              die Chance, das vielleicht wichtigste Zeichen in dieser Krise zu setzen: 
            </p>
            <p className="font-weight-bold font-italic">„Wir setzen uns nicht nur für Unternehmen ein, sondern für jeden einzelnen Menschen.“</p>
            <p>Mit freundlichen Grüßen</p>
            <span>Tonia Merz (Petentin auf change.org: <a href="http://www.change.org/grundeinkommen" target="_blank"> change.org/grundeinkommen </a>)</span><br/>
            <span>David Erler (Petent auf openpetition.de: <a href="http://www.openpetition.de/!coronahilfe" target="_blank"> openpetition.de/!coronahilfe </a>)</span><br/>
            <span>Susanne Wiest (Petentin der:<a href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html" target="_blank"> Bundestagsleitpetition 108191</a>)</span><br/>
            <span>Hiltrud Preuß (Petentin der Bundestagspetition 108283, zusammengelegt mit 108191),</span><br/>
            <span>Volkmar Kreiß (Petent der Bundestagspetition 108450, zusammengelegt mit 108191),</span><br/>
            <span>Vivien Putzmann (Petentin der Bundestagspetition 108586, zusammengelegt mit 108191)</span><br/>
          </div>
        </Col>
        <Col lg="4" className="mt-3 mt-lg-0">
          <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              />
          <div className="mb-5 mt-3">
            <div onClick={() => clickHandler(true, data.previewLetter)} className="signature-list-crop cursor-pointer"> 
              <Img fluid={data.previewLetter.childImageSharp.fluid} alt="Offener Brief an den Bundestag"/>
            </div>
            <div className="mt-3">
              <a href="/Offener-Brief-zur-Bundestagspetition-108191.pdf" download className="custom-anchor font-weight-bold">
                Brief herunterladen (172 kB)
              </a>
            </div>
          </div>
          
          <div>
            <p>
              Super, dass wir die
              <a href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html" className="custom-anchor font-weight-bold"> Bundestagspetition </a>
              auch offline immer noch weiter wachsen lassen können.
              Einfach Karte oder Unterschriften-Liste herunterladen, ausdrucken, Name(n) und Adresse(n) 
              eintragen, unterschreiben, in einen Briefumschlag stecken und ab die Post:
            </p>
            <p>
              Deutscher Bundestag<br/>
              Petitionsausschussdienst<br/>
              Platz der Republik 1<br/>
              11011 Berlin<br/>
            </p>
            <p>
              Alternativ auch per Fax unter +49 30 227-36053.
            </p>
            <strong>DANKE!</strong>
          </div>
          <div className="mb-5 mt-5">
            <div onClick={() => clickHandler(true, data.previewKarte)} className="cursor-pointer">
              <Img fluid={data.previewKarte.childImageSharp.fluid} alt="Postkarte zur Unterzeichnung der Petition"/>
            </div>
            <div className="mt-3">
              <a href="/BGE_Unterschrift.pdf" download className="custom-anchor font-weight-bold">
                Karte herunterladen (102 kB)
              </a>
            </div>
          </div>
          <div className="mb-4">
            <div onClick={() => clickHandler(true, data.previewListe)} className="signature-list-crop cursor-pointer">
              <Img fluid={data.previewListe.childImageSharp.fluid} alt="Unterschriftenliste zur Unterzeichnung der Petition"/>
            </div>
            <div className="mt-3">
              <a href="/BGE_Unterschrift_Auslage.pdf" download className="custom-anchor font-weight-bold">
                Unterschriftenliste herunterladen (105 kB)
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <ImageMenu/>
  </Layout>
  )
}

export default GrundeinkommenJetzt