import React from "react"
import { Link } from "gatsby"

import BtnBotschafterSchwarz from "../components/images/BtnBotschafterSchwarz"
import BtnBotschafterOrange from "../components/images/BtnBotschafterOrange"
import UbiBackBlack from "../components/images/UbiBackBlack"
import UbiBackOrange from "../components/images/UbiBackOrange"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

const WarumGrundeinkommen = () => (
  <Layout>
    <SEO
      title="Grundeinkommen Konkret"
      imgFb="/BGE_post_facebook_1200x627_1.jpg"
      slug="/grundeinkommen-konkret"
    />
    <div className="container">
      <Header url="/grundeinkommen-konkret" />
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-lg-6">
          <strong>
            <p>
              Das bedingungslose Grundeinkommen ist ein Einkommen für alle
              Menschen,
            </p>
            <ul>
              <li>
                das Existenz sichernd ist und gesellschaftliche Teilhabe
                ermöglicht,
              </li>
              <li>auf das ein individueller Rechtsanspruch besteht</li>
              <li>das ohne Bedürftigkeitsprüfung und</li>
              <li>ohne Zwang zu Arbeit oder anderen Gegenleistungen</li>
            </ul>
            <p>garantiert wird.</p>
          </strong>
          <p>
            Das Grundeinkommen soll dazu beitragen, Armut und soziale Notlagen
            zu beseitigen, den individuellen Freiheitsspielraum zu vergrößern
            sowie die Entwicklungschancen jedes Einzelnen und die soziale und
            kulturelle Situation im Gemeinwesen nachhaltig zu verbessern.
          </p>
        </div>
        <div className="col-lg-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/CbuSgNTpUsE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            Prof. Bernhard Neumärker stellt sein Modell eines
            Netto-Grundeinkommens vor, das in der Krise eingeführt und danach zu
            einem vollen Bedingungslosen Grundeinkommen ausgebaut werden kann.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-light pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 pt-lg-5">
            <div className="btn-container mx-auto">
              <Link to="/">
                <UbiBackBlack />
                <div className="overlay col-lg-12 py-3 pt-lg-5">
                  <UbiBackOrange />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 pb-3 pt-lg-5">
            <div className="btn-container mx-auto">
              <Link to="was-geht/">
                <BtnBotschafterSchwarz />
                <div className="overlay col-lg-12 pb-3 pt-lg-5">
                  <BtnBotschafterOrange />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Link to="/impressum/" className="mx-3">
                Impressum
              </Link>
              <Link to="/datenschutz/" className="mx-3">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Layout>
)

export default WarumGrundeinkommen
