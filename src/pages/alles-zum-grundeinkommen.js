import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"

const AllesZumGrundeinkommen = () => (
  <Layout>
    <SEO title="Alles zum Grundeinkommen" />
    <div className="container">
      <Header/>
      <div className="row mb-3">
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
            die soziale und kulturelle Situation im Gemeinwesen nachhaltig zu verbessern.*
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AllesZumGrundeinkommen
