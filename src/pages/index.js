import React from "react"
import { Link } from "gatsby"

import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

import BgeWasHeard from "../components/images/BgeWasHeard"
import ParlamentStream from "../components/ParlamentStream"

const IndexPage = () => (
  <Layout ImageMenu="true">
    <SEO
      title="Die Zeit ist reif für's Grundeinkommen."
      description="Grundeinkommen im Bundestag: Die Anhörung im Petitionsausschuss läuft am 26.10.2020 – jede Stimme zählt, unterschreib die Petition noch in Papierform!"
      imgFb="/BGE_post_facebook_1200x627_4.jpg"
    />
    <div className="container">
      <Header />
      <div className="row mt-md-5 mb-5">
        <div className="col">
          <strong>
            „Niemand! Wirklich niemand darf in Existenznot geraten!
          </strong>{" "}
          Mit einem Bedingungslosen Grundeinkommen ziehen wir unserer
          Gesellschaft einen Boden ein, der alle trägt.“ Entschlossen und
          entspannt tritt{" "}
          <a
            href="https://www.susannewiest.de"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Susanne Wiest
          </a>{" "}
          am 26.10.2020 um 12 Uhr vor die Abgeordneten im Petitionsausschuss in
          Berlin, wo{" "}
          <a
            href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            die erfolgreichste Online-Petition aller Zeiten
          </a>{" "}
          an den Bundestag angehört wird. Flankiert von{" "}
          <a
            href="https://www.fribis.uni-freiburg.de/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prof. Dr. Bernhard Neumärker
          </a>{" "}
          vom Freiburger Institut zur Erforschung des Grundeinkommens (FRIBIS) –
          kompetent und knapp erläutert er das{" "}
          <a
            href="https://youtu.be/CbuSgNTpUsE"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netto-Grundeinkommen
          </a>
          , den Lösungsvorschlag für die Einführung des Corona-Grundeinkommens
          während der Krise. Danach kann es problemlos zu einem bedingungslosen
          Grundeinkommen ausgebaut werden. Hier ist die{" "}
          <a
            href="https://www.bundestag.de/mediathek?videoid=7466652&url=L21lZGlhdGhla292ZXJsYXk=&mod=mediathek#url=L21lZGlhdGhla292ZXJsYXk/dmlkZW9pZD03NDY2NjUyJnVybD1MMjFsWkdsaGRHaGxhMjkyWlhKc1lYaz0mbW9kPW1lZGlhdGhlaw==&mod=mediathek"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aufzeichnung
          </a>{" "}
          zu sehen.
        </div>
      </div>
      <div className="row mt-md-5">
        <div className="col-md-7 mb-5">
          <ParlamentStream />
        </div>
        <div className="col-md-5 mb-5">
          <BgeWasHeard />
        </div>
      </div>
      <div className="row mt-md-5 mb-5">
        <div className="col">
          „Ich möchte, dass wir das Bedingungslose Grundeinkommen durch eine
          Volksabstimmung einführen“, sagt Susanne Wiest. „Dann sind wir
          demokratisch und menschlich ein gutes Stück weiter.“ Im
          Kampagnenbündnis mit dem{" "}
          <a
            href="https://youtu.be/Pt9pT3Lxub4"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            OMNIBUS für Direkte Demokratie
          </a>
          ,{" "}
          <a
            href="https://www.change.org/p/finanzminister-olaf-scholz-und-wirtschaftsminister-peter-altmaier-mit-dem-bedingungslosen-grundeinkommen-durch-die-coronakrise-coronavirusde-olafscholz-peteraltmaier-bmas-bund-hubertus-heil/u/27921988"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tonia Merz
          </a>
          ,{" "}
          <a
            href="https://www.openpetition.de/petition/online/hilfen-fuer-freiberufler-und-kuenstler-waehrend-des-corona-shutdowns-2"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            David Erler
          </a>
          ,{" "}
          <a
            href="https://www.mein-grundeinkommen.de/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mein Grundeinkommen
          </a>
          ,{" "}
          <a
            href="https://expedition-grundeinkommen.de/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Expedition Grundeinkommen
          </a>
          ,{" "}
          <a
            href="https://www.change.org/p/finanzminister-olaf-scholz-und-wirtschaftsminister-peter-altmaier-mit-dem-bedingungslosen-grundeinkommen-durch-die-coronakrise-coronavirusde-olafscholz-peteraltmaier-bmas-bund-hubertus-heil"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Change.org
          </a>
          ,{" "}
          <a
            href="https://www.schippercompany.com/agentur/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            you with schipper company
          </a>
          ,{" "}
          <a
            href="https://www.wirkzeit.com/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            WIR[K]ZEIT
          </a>{" "}
          und einem engagierten Team aus der Wissenschaft unternehmen wir, was
          wir können.{" "}
          <a
            href="/Onepage_NGH_de_30-11-2020.pdf"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Jetzt ist die Politik am Zug.</strong>
          </a>
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
