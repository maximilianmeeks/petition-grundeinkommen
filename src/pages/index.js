import React from "react"

import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

const IndexPage = () => (
  <Layout ImageMenu="true">
    <SEO title="Petition Bedingungsloses Grundeinkommen" description="Wir alle sind die Wirtschaft. Unterstütze uns dabei, die größte Petition zum Thema Grundeinkommen zu werden. Jetzt bis zum 27.04. unterschreiben."/>
    <div className="container">
      <Header/>
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-lg-6">
          <p>
            Wir alle sind die Wirtschaft. Um einen Zusammenbruch in Zeiten von Corona zu verhindern und ein
            neues Miteinander zum Blühen zu bringen, liegt die Lösung auf der Hand: <strong>Die Menschen brauchen
            Geld</strong>. Schnell. Direkt. Unbürokratisch. Die Zeit ist reif für eine mächtige Idee: <strong>Das Grundeinkommen</strong>.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Jetzt geht es darum, die Kräfte zu bündeln und sich gemeinsam für die Einführung auszusprechen – direkt im Bundestag.
            Um das Grundeinkommen möglichst schnell zu etablieren, ist
            die Bundestagspetition von Susanne Wiest der wirksamste Weg, da sie rechtlich bindend ist – sei ein
            Teil davon und gib deine Stimme für uns alle ab. Unterschreiben darf jede und jeder: unabhängig von Staatsangehörigkeit und Alter. Wie viele Stimmen schaffen wir in der
            verbleibenden Mitzeichnungsfrist bis zum <strong>27. April 2020</strong>?
          </p>
        </div>
      </div>
      <div className="row">
        <div className="mx-auto">
          <div className="row mx-0">
            <div className="mx-auto">
              <p className="abbinder mb-3 mb-lg-0 m-0 mx-auto">
                Existenzsicherung ist ein Menschenrecht. Vertrauen die neue Währung.<br/>
              </p>
            </div>
          </div>
          <div className="row mx-0 mb-5">
            <div className="mx-auto">
              <p className="abbinder m-0 mx-auto">
                Willkommen bei #MenschInGermany!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="mx-auto">
          <a href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html" target="_blank" rel="noopener noreferrer">
            <Button variant="dark" className="btn btn-lg">Jetzt Unterschreiben</Button>
          </a>
        </div>
      </div>
    </div>
    <ImageMenu/>
  </Layout>
)

export default IndexPage
