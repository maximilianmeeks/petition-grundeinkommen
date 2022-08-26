import React from "react"
import { Link } from "gatsby"

import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

import BotschafterTonia from "../components/images/BotschafterTonia"
import BotschafterSusanne from "../components/images/BotschafterSusanne"
import BotschafterLeonie from "../components/images/BotschafterLeonie"
import BotschafterUschi from "../components/images/BotschafterUschi"

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
          <p>
            <strong>Gereicht hat es nicht</strong> fürs Grundeinkommen bei{" "}
            <a
              href="https://abstimmung21.de/"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abstimmung21
            </a>
            : Mit 21.686 Stimmen hatten wir keine Chance auf’s Siegertreppchen &
            landeten auf{" "}
            <a
              href="https://abstimmung21.changeverein.org/"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Platz 4 von 244 Themen
            </a>
            . Alle Belange sind wichtig – dennoch denken wir, dass das BGE die
            fundamentale Basis ist, von der aus wir uns mit freiem Kopf allen
            wesentlichen Fragen unserer Zeit widmen können. Warum das nicht mehr
            Menschen so gesehen haben, wissen wir nicht.{" "}
            <a
              href="https://www.change.org/p/abstimmung21-gemeinsam-f%C3%BCr-grundeinkommen/u/28777984"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Was wir wissen
            </a>
            : Konkurrenz ist nicht unser Ding – es widerspricht auch der Idee
            des Grundeinkommens. Zentral ist Solidarität – nur in einem
            zugewandten Miteinander & Füreinander können wir uns
            gesellschaftlich weiterentwickeln. Unser Engagement fürs
            bedingungslose Grundeinkommen geht natürlich mit ungebrochenem Elan
            weiter.
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 mb-3">
              <BotschafterTonia />
            </div>
            <div className="col-md-6 mb-3">
              <BotschafterSusanne />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <BotschafterLeonie />
            </div>
            <div className="col-md-6 mb-3">
              <BotschafterUschi />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-md-5 mb-5">
        <div className="col">
          <p>
            <strong>Mehr denn je:</strong> Nachdem der Petitionsausschuss des
            Deutschen Bundestages seit der{" "}
            <a
              href="https://www.bundestag.de/mediathek?videoid=7466652&url=L21lZGlhdGhla292ZXJsYXk=&mod=mediathek#url=L21lZGlhdGhla292ZXJsYXk/dmlkZW9pZD03NDY2NjUyJnVybD1MMjFsWkdsaGRHaGxhMjkyWlhKc1lYaz0mbW9kPW1lZGlhdGhlaw==&mod=mediathek"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anhörung von Susanne Wiest & Prof. Bernhard Neumärker
            </a>{" "}
            nun zum 2. Mal{" "}
            <a
              href="https://www.susannewiest.de/petition-krisen-grundeinkommen-bundestag-bittet-um-geduld/"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              um Geduld gebeten
            </a>{" "}
            hat, wollen wir die Dinge selbst in die Hand nehmen.{" "}
            <a
              href="https://perspective-daily.de/article/1659/Hrl70o2b"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Micha Bohmeyer
            </a>{" "}
            von{" "}
            <a
              href="https://www.mein-grundeinkommen.de/"
              className="custom-anchor font-weight-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mein Grundeinkommen
            </a>{" "}
            bringt’s auf’n Punkt: „Wir könnten mit jeder Form privater
            Umverteilung experimentieren & eine neue finanzielle Solidarität
            zwischen den Menschen schaffen. Theoretisch ließe sich das
            Grundeinkommen selbstständig von den Menschen einführen, denn es ist
            ja nichts weiter als ein Geldtransfer zwischen den Leuten. Wir
            schielen immer auf den Staat & sagen: Bitte nimm unser Geld & gib es
            uns wieder. Aber warum organisieren wir das eigentlich nicht selbst?
            Denkbar wäre es.“ Wir arbeiten daran – stay tuned!
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
                    <span className="d-none d-md-inline"> – </span>
                    #CALLTOACTION
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
