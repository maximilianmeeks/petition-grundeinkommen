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
        description="Die größte Online-Petition sind wir schon – jetzt per Post fürs Grundeinkommen abstimmen. Danke!"
        imgFb="/BGE_post_facebook_1200x627_4.jpg" 
        />
    <div className="container">
      <Header/>
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-lg-6">
          <p>
            Geschafft! Unsere Online-Petition ist die größte aller Zeiten – DANKE an euch
            alle, die ihr das ermöglicht habt!             <a
              href='https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html'
              className='custom-anchor font-weight-bold'
            >
              {' '}
              176.134 #GameChanger{' '}
            </a>{' '} sind wir bis jetzt.
            Und doch viel mehr: Zusammen mit weiteren Petitionen auf anderen Portalen sind
            wir praktisch #1MillionFürsGrundeinkommen. <Link to="/grundeinkommen-jetzt" className="custom-anchor font-weight-bold"> Hier </Link> findet ihr den Offenen Brief aller Petent*innen an den Bundestag,
            der von einem breiten gesellschaftlichen Bündnis unterstützt wird und die
            zeitnahe Anhörung am 15. Juni 2020 fordert.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Außerdem: Solange die Petition im Bundestag bearbeitet wird, kann offline
            mitgezeichnet werden – per Brief, per Karte oder Unterschriften-Liste. Also
            haben wir Vorlagen zum Download erstellt, die ihr ausfüllt, unterschreibt, in
            einen Briefumschlag steckt und dann fluten wir den Bundestag mit der frohen
            Botschaft{' '}
            <Link to='/grundeinkommen-jetzt' className='custom-anchor font-weight-bold'>
              {' '}
              #GrundeinkommenJETZT!{' '}
            </Link>{' '}
            Wie viele Stimmen schaffen wir auf dem Postweg? Um zu zeigen, wie viele wir
            sind und warum wir das Grundeinkommen wollen, könnt ihr als{' '}
            <Link to='/wir-sind-viele' className='custom-anchor font-weight-bold'>
              {' '}
              Botschafter*in{' '}
            </Link>{' '}
            an Bord sein oder unsere{' '}
            <Link to='/wie-unterstuetzen' className='custom-anchor font-weight-bold'>
              {' '}
              Tools für Social Media{' '}
            </Link>{' '}
            nutzen. Wir freuen uns.
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="mx-auto">
          <a href="https://grundeinkommenjetzt.de/">
            <Button variant="dark" className="btn btn-lg">Offener Brief an den Bundestag</Button>
          </a>
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
