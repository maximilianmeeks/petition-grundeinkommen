import React from "react"
import { Link } from "gatsby"

import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

const IndexPage = () => (
  <Layout ImageMenu="true">
    <SEO title="Die Zeit ist reif für's Grundeinkommen." 
        description="Wir alle sind die Wirtschaft. Unterstütze uns dabei, die größte Petition zum Thema Grundeinkommen zu werden. Jetzt bis zum 27.04. unterschreiben."
        imgFb="/BGE_post_facebook_1200x627_4.jpg" 
        />
    <div className="container">
      <Header/>
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-lg-6">
          <p>
            Geschafft! Mit vereinten Kräften haben wir das bedingungslose Grundeinkommen in den Bundestag
            gehievt und einen neuen Rekord aufgestellt: Unsere Online-Petition ist die 
            <a href="https://www.tag24.de/berlin/politik-wirtschaft/online-petition-bundestag-bedingungsloses-grundeinkommen-bge-susanne-wiest-1496934" className="custom-anchor font-weight-bold"> größte aller Zeiten</a> –
            DANKE an euch alle, die ihr das ermöglicht habt! 
            <a href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html" className="custom-anchor font-weight-bold"> 176.134 #GameChanger </a> sind wir bis jetzt.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Und es geht direkt weiter: Solange die Petition im Bundestag bearbeitet wird, kann offline
            mitgezeichnet werden – per Brief, per Karte, per Unterschriftenliste. Also haben wir eine Karte
            vorbereitet, die ihr ausfüllt, unterschreibt, in einen Briefumschlag steckt und dann fluten wir den
            Bundestag mit der frohen Botschaft <strong>#GrundeinkommenJETZT!</strong> Wie viele Stimmen schaffen wir auf
            dem Postweg? Um zu zeigen, wie viele wir sind und warum wir das Grundeinkommen wollen, könnt
            ihr als <Link to="werde-botschafterin" className="custom-anchor font-weight-bold"> Botschafter*in </Link> an Bord sein und euer Foto plus Statement an 
            <a href="mailto:botschafterIn@mensch-in-germany.org" className="custom-anchor font-weight-bold"> botschafterIn@mensch-in-germany.org </a> 
            schicken. Wir freuen uns.
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
              <p className="abbinder m-0 mx-auto px-2">
                Willkommen bei #MenschInGermany!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="mx-auto">
          <Link to="/grundeinkommen-jetzt">
            <Button variant="dark" className="btn btn-lg">Jetzt Unterschreiben</Button>
          </Link>
        </div>
      </div>
    </div>
    <ImageMenu/>
  </Layout>
)

export default IndexPage
