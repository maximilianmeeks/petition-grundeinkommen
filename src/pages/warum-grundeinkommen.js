import React from "react"
import { Link } from "gatsby"

import BtnBotschafterSchwarz from "../components/images/btnBotschafterSchwarz"
import BtnBotschafterOrange from "../components/images/btnBotschafterOrange"
import UbiBackBlack from "../components/images/ubiBackBlack"
import UbiBackOrange from "../components/images/ubiBackOrange"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

const WarumGrundeinkommen = () => (
  <Layout>
    <SEO title="Warum Grundeinkommen" 
    imgFb="/BGE_post_facebook_1200x627_1.jpg"/>
    <div className="container">
      <Header url="/warum-grundeinkommen"/>
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-lg-6 font-weight-bold">
          <p>
            Das bedingungslose Grundeinkommen ist ein Einkommen für alle Menschen,
          </p>
          <ul>
            <li>
              das Existenz sichernd ist und gesellschaftliche Teilhabe ermöglicht,
            </li>
            <li>
              auf das ein individueller Rechtsanspruch besteht
            </li>
            <li>
              das ohne Bedürftigkeitsprüfung und
            </li>
            <li>
              ohne Zwang zu Arbeit oder anderen Gegenleistungen
            </li>
          </ul>
          <p>garantiert wird.</p>
        </div>
        <div className="col-lg-6">
          <p>
            Das Grundeinkommen soll dazu beitragen, Armut und soziale Notlagen zu beseitigen, den
            individuellen Freiheitsspielraum zu vergrößern sowie die Entwicklungschancen jedes Einzelnen und
            die soziale und kulturelle Situation im Gemeinwesen nachhaltig zu verbessern.
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
                            <UbiBackBlack/>
                            <div className="overlay col-lg-12 py-3 pt-lg-5">
                                <UbiBackOrange/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 pb-3 pt-lg-5">
                    <div className="btn-container mx-auto">
                        <Link to="/werde-botschafterin/">
                            <BtnBotschafterSchwarz/>
                            <div className="overlay col-lg-12 pb-3 pt-lg-5">
                                <BtnBotschafterOrange/>
                            </div>
                        </Link>
                        <p className="text-dark pt-2 pr-3 mb-0 text-right font-italic">Götz W. Werner, Gründer von dm-drogerie markt</p>
                    </div>
                </div>
            </div>
        </div>
        <footer class="py-2">
          <div className="container">
              <div className="row">
                  <div className="col-12 text-center">
                      <Link to="/impressum/" className="mx-3">Impressum</Link>
                      <Link to="/datenschutz/" className="mx-3">Datenschutz</Link>
                  </div>
              </div>
          </div>
        </footer>
    </div>
  </Layout>
)

export default WarumGrundeinkommen
