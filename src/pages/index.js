import React from "react"
import { Link } from "gatsby"

import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

import UpdateAbstimmung from "../components/images/UpdateAbstimmung"

const IndexPage = () => (
  <Layout ImageMenu="true">
    <SEO
      title="Die Zeit ist reif für's Grundeinkommen."
      description="#GemeinsamFürGrundeinkommen: Unterstützt unsere Petition für die 1. bundesweite Volksabstimmung zur Einführung des BGE bei Abstimmung21 auf Change.org – DANKE!"
      imgFb="/BGE_post_facebook_1200x627_4.jpg"
    />
    <div className="container">
      <Header />
      <div className="row mt-md-5 mb-5">
        <div className="col">
          {" "}
          <a
            href="https://www.susannewiest.de/wp-content/uploads/Bildschirmfoto-2021-02-03-um-11.59.28-1024x935.png"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Geduld
          </a>{" "}
          erwartet der Deutsche Bundestag von uns. Als erste Reaktion zwei
          Monate nach Der{" "}
          <a
            href="https://dbtg.tv/cvid/7466652"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anhörung
          </a>{" "}
          im Petitionsausschuss am 26.10.2020 zur Einführung eines
          bedingungslosen Grundeinkommens in der Krise. Und angesichts der
          Corona-Krise, die seit März 2020 andauert und unzählige Menschen ohne
          Einkommen dastehen lässt. Unser Lösungsvorschlag eines{" "}
          <a
            href="https://www.fribis.uni-freiburg.de/wp-content/uploads/2020/11/OnePage-NGH_de_aa.pdf"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Krisengrundeinkommens
          </a>
          , entwickelt vom Team um Prof. Bernhard Neumärker von{" "}
          <a
            href="https://www.fribis.uni-freiburg.de/policy_debate/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            FRIBIS
          </a>{" "}
          (Freiburger Institut zur Erforschung des Grundeinkommens), befindet
          sich nach wie vor in der Prüfung. „Den Wind für die Veränderungen, die
          wir wollen, müssen wir selbst erzeugen“, schreibt Petentin{" "}
          <a
            href="https://www.susannewiest.de/petition-krisen-grundeinkommen-bundestag-bittet-um-geduld/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Susanne Wiest
          </a>{" "}
          in ihrem Blogpost. „So kommt Politik in Bewegung.“
        </div>
      </div>
      <div className="row mt-md-5 mb-5">
        <div className="col-md-10 mx-auto">
          <UpdateAbstimmung />
        </div>
      </div>
      <div className="row mt-md-5 mb-5">
        <div className="col">
          <a
            href="https://www.susannewiest.de/gemeinsamfuergrundeinkommen/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            #GemeinsamFürGrundeinkommen
          </a>{" "}
          – mit diesem Hashtag bringen wir Bewegung in die Demokratie. Abstimmen
          statt bitten: Zusammen mit weiteren Initiativen organisiert{" "}
          <a
            href="https://abstimmung21.de/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abstimmung 21
          </a>{" "}
          die erste bundesweite Volksabstimmung parallel zur Bundestagswahl –
          auf dem Stimmzettel stehen neben Klimawende 1,5 Grad und Bundesweite
          Volksabstimmung zwei weitere Themen, die auf{" "}
          <a
            href="https://abstimmung21.changeverein.org/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Change.org
          </a>{" "}
          und{" "}
          <a
            href="https://www.openpetition.de/abstimmung21"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            openPetition
          </a>{" "}
          bis zum 31. März 2021 ermittelt werden. Bestellt am besten gleich die{" "}
          <a
            href="https://abstimmung21.de/#abstimmungsunterlagen"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abstimmungsunterlagen
          </a>
          , mögliche{" "}
          <a
            href="https://abstimmung21.de/faq/"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fragen
          </a>{" "}
          werden ebenfalls beantwortet. Wenn ihr also im September über die
          Einführung des bedingungslosen Grundeinkommens abstimmen wollt, freuen
          wir uns über eure Unterstützung unserer Petition –{" "}
          <a
            href="https://www.change.org/p/abstimmung21-gemeinsam-für-grundeinkommen"
            className="custom-anchor font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            hier mitzeichnen
          </a>{" "}
          und teilen, teilen, teilen. DANKE!
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
