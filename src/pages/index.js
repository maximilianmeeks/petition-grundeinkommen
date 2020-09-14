import React from "react"
import { Link } from "gatsby"

import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

import ZuhoerungEvent from "../components/images/ZuhoerungEvent"

const IndexPage = () => (
  <Layout ImageMenu="true">
    <SEO
      title="Die Zeit ist reif für's Grundeinkommen."
      description="Der Film zum Grundeinkommen ist da - teile ihn und hole so noch mehr UnterstützerInnen an Bord. Zusammen können wir es schaffen, zusammen sind wir mehr!"
      imgFb="/BGE_post_facebook_1200x627_4.jpg"
    />
    <div className="container">
      <Header />
      <div className="row mt-md-5">
        <div className="col-md-10 mx-auto">
          <strong>#GrundeinkommenKonkret</strong> – das Thema ist in aller
          Munde: Rund{" "}
          <a
            href="https://grundeinkommenjetzt.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            1 Million Menschen
          </a>{" "}
          haben verschiedene Petitionen zum Grundeinkommen unterschrieben,{" "}
          <a
            href="https://www.mein-grundeinkommen.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            Mein Grundeinkommen
          </a>{" "}
          lanciert mit fulminanter Resonanz das{" "}
          <a
            href="https://www.pilotprojekt-grundeinkommen.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            Pilotprojekt Grundeinkommen
          </a>
          ,{" "}
          <a
            href="https://expedition-grundeinkommen.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            Expedition Grundeinkommen
          </a>{" "}
          startet in ganz Deutschland Volksabstimmungen zum BGE und wir stellen
          die{" "}
          <Link
            to="/grundeinkommen-konkret"
            className="custom-anchor font-weight-bold"
          >
            wissenschaftlichen Modelle
          </Link>{" "}
          zur Einführung zur Diskussion - temporär in der Corona-Krise,
          permanent & bedingungslos danach. Die PolitikerInnen brauchen nur noch
          zuhören, um sich in die Materie vertiefen zu können.
        </div>
      </div>
      <div className="row mt-3 mt-md-5">
        <div className="col-md-8 mx-auto my-5 my-md-0">
          <ZuhoerungEvent />
        </div>
      </div>
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-md-10 mx-auto mb-5">
          <strong>
            Deshalb laden wir am{" "}
            <a
              href="https://www.facebook.com/events/768403120398310"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-anchor font-weight-bold"
            >
              15. September
            </a>{" "}
            und{" "}
            <a
              href="https://www.facebook.com/events/762339227666034"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-anchor font-weight-bold"
            >
              17. September
            </a>{" "}
            jeweils um 10 Uhr auch zur Zuhörung ein:
          </strong>{" "}
          Die Professoren Bernhard Neumärker, Alexander Spermann, Friedrich
          Schneider & Sascha Liebermann stellen sich auf{" "}
          <a
            href="https://www.youtube.com/channel/UC5i7oVQWuutVxpCIwuEDESQ"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            YouTube Live
          </a>{" "}
          den Fragen der PolitikerInnen & der interessierten Öffentlichkeit.
          Danach spannen wir jeden Dienstag mit neuen GesprächspartnerInnen den
          Bogen zur{" "}
          <a
            href="https://www.susannewiest.de/anhoerung-im-bundestag-am-26-10-20"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            Anhörung am 26. Oktober
          </a>
          , wo im Petitionsausschuss die{" "}
          <a
            href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            erfolgreichste Online-Petition aller Zeiten
          </a>{" "}
          an den Bundestag zur Einführung eines Bedingungslosen Grundeinkommens
          verhandelt wird – unterstützt vom{" "}
          <a
            href="https://www.omnibus.org"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-anchor font-weight-bold"
          >
            OMNIBUS für Direkte Demokratie
          </a>
          , der uns den ganzen Tag vor Ort begleiten wird. Von uns allen für uns
          alle - #läuft!
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
