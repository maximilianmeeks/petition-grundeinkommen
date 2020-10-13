import React from "react"
import { Link } from "gatsby"

import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

import CountdownMemes from "../components/CountdownMemes"

const IndexPage = () => (
  <Layout ImageMenu="true">
    <SEO
      title="Die Zeit ist reif für's Grundeinkommen."
      description="Grundeinkommen im Bundestag: Die Anhörung im Petitionsausschuss läuft am 26.10.2020 – jede Stimme zählt, unterschreib die Petition noch in Papierform!"
      imgFb="/BGE_post_facebook_1200x627_4.jpg"
    />
    <div className="container">
      <Header />
      <div className="row mt-md-5">
        <div className="col-md-12 mx-auto">
            Der{" "}
            <a
              href="https://www.instagram.com/stories/highlights/17864145224115824/"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              #CountDown
            </a>{" "}
            läuft: Am 26.10.2020 von 12-13 Uhr läuft die Anhörung der 
            <a
              href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Petition zur Einführung eines Grundeinkommens
            </a>
             im Marie-Elisabeth-Lüders-Haus in Berlin, Raum 3.101. Temporär
            während der Krise, bedingungslos danach - einen konkreten Vorschlag
            stellt Prof. Dr. Bernhard Neumärker in unserer{" "}
            <a
              href="https://youtu.be/J7ZxDtKgtwk?t=136"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zuhörung
            </a>{" "}
            vor. Coronabedingt gibt es nur für 34 Interessierte abzgl.
            Pressevertretern Platz im Petitionsausschuss - trotz{" "}
            <a
              href="https://www.bundestag.de/ausschuesse/a02/aktuelles-547294"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anmeldung
            </a>{" "}
            jedoch ohne Sitzplatzgarantie. Dennoch könnt ihr mit euerm{" "}
            <Link
              to="/wir-sind-viele"
              className="custom-anchor font-weight-bold"
            >
              #JAzumGrundeinkommen
            </Link>{" "}
            dabei sein &{" "}
            <a
              href="https://www.susannewiest.de/anhoerung-im-bundestag-am-26-10-20/"
              className="font-weight-bold custom-anchor"
            >
              Susanne Wiest
            </a>{" "}
            den Rücken stärken – unterschreibt die Petition{" "}
            <Link
              to="/grundeinkommen-jetzt"
              className="custom-anchor font-weight-bold"
            >
              jetzt noch in Papierform
            </Link>{" "}
            & schickt sie an den Deutschen Bundestag. Je mehr Stimmen dort
            eintreffen, desto mehr Gewicht hat unser gemeinsames
            Herzensanliegen.
        </div>
      </div>
      <div className="row mt-md-5">
        <div className="col mx-auto">
          <CountdownMemes />
        </div>
      </div>
      <div className="row mt-md-5">
        <div className="col-md-12 mx-auto">
          <p>
            Tagsüber begleitet uns der{" "}
            <a
              href="https://www.omnibus.org/projekte/grundeinkommen"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-anchor font-weight-bold"
            >
              OMNIBUS für Direkte Demokratie
            </a>
            , der unser Ansinnen perfekt unterstützt: Wenn wir das
            Bedingungslose Grundeinkommen durch eine{" "}
            <a
              href="https://www.wirwollenabstimmen.de/videos/enno-schmidt-will-abstimmen"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              bundesweite Volksinitiative
            </a>{" "}
            eingeführt haben, sind wir demokratisch & menschlich ein gutes Stück
            weiter. Beim OMNIBUS können wir die Live-Übertragung via
            Parlamentsfernsehen mitverfolgen - er steht in der Nähe des Eingangs
            zum Petitionsausschuss. Natürlich könnt ihr auch gemütlich von
            zuhause aus zuschauen - auf welchem Wege auch immer, wir freuen uns
            auf euch & eure Unterstützung!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="mx-auto">
          <div className="row mx-0">
            <div className="mx-auto">
              <p className="abbinder mb-3 mb-lg-0 m-0 mx-auto">
                Existenzsicherung ist ein Menschenrecht. Vertrauen die neue
                Währung.
                <br />
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row mb-5 mt-3">
              <div className="mx-auto">
                <a
                  href="https://www.youtube.com/watch?v=HdwbNECDqJE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="dark" className="btn btn-md-lg">
                    {" "}
                    TEILEN UND GEWINNEN <br className="d-md-none" />
                    <span className="d-none d-md-inline"> – </span>#CALLTOACTION
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ImageMenu />
  </Layout>
)

export default IndexPage
