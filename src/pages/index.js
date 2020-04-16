import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Grundeinkommen" />
    <div className="container">
      <Header/>
      <div className="row mb-3">
        <div className="col-lg-6">
          <p className="font-weight-bold">
            Wir alle sind die Wirtschaft. Um einen Zusammenbruch in Zeiten von Corona zu verhindern und ein
            neues Miteinander zum Blühen zu bringen, liegt die Lösung auf der Hand: Die Menschen brauchen
            Geld. Schnell. Direkt. Unbürokratisch. Die Zeit ist reif für eine mächtige Idee: Das Grundeinkommen.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Jetzt geht es darum, die Kräfte zu bündeln und sich gemeinsam für die Einführung auszusprechen.
            Um das Grundeinkommen nach dem Ausnahmezustand bedingungslos & dauerhaft zu etablieren, ist
            die Bundestagspetition von Susanne Wiest der wirksamste Weg, da sie rechtlich bindend ist – sei ein
            Teil davon und gib deine Stimme für uns alle ab. Wie viele Stimmen schaffen wir in der
            verbleibenden Mitzeichnungsfrist bis zum 27. April 2020?
          </p>
        </div>
      </div>
      <div className="row">
        <div className="mx-auto">
          <div className="row">
            <div className="mx-auto">
              <p className="abbinder m-0">
                Existenzsicherung ist ein Menschenrecht. Vertrauen die neue Währung.<br/>
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="mx-auto">
              <p className="abbinder m-0">
                Willkommen bei #MenschInGermany!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="mx-auto">
          <a href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html" target="_blank">
            <Button variant="dark" className="btn btn-lg">Jetzt Unterschreiben</Button>
          </a>
        </div>
      </div>
    </div>
    <div className="bg-light">
      <div className="container">
        <div className="col-lg-6">
          <Link to="/alles-zum-grundeinkommen/">Alles zum Grundeinkommen</Link>
        </div>
        <div className="col-lg-6">
          <Link to="/werde-botschafter/">Werde Botschafter</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
