import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageGallery from "../components/ImageGallery"

import BotschafterWerner from "../components/images/botschafterWerner"
import BotschafterSteinhaus from "../components/images/botschafterSteinhaus"
import DownloadIcon from "../components/images/download-icon"
import BtnGrundeinkommenSchwarz from "../components/images/btnGrundeinkommenSchwarz"
import BtnGrundeinkommenOrange from "../components/images/btnGrundeinkommenOrange"
import BotschafterBackBlack from "../components/images/botschafterBackBlack"
import BotschafterBackOrange from "../components/images/botschafterBackOrange"



function WerdeBotschafter() {
  return (
  <Layout>
    <SEO title="Werde Botschafter*in"
    imgFb="/BGE_post_facebook_1200x627_5.jpg"
    slug="/werde-botschafter"/>
    <div className="container">
      <Header url="/werde-botschafterin"/>
      <div className="row pb-4 mt-lg-3 pt-md-5">
        <div className="col-lg-6">
          <BotschafterSteinhaus/>
          <p className="mt-3 font-italic">Helena Steinhaus, Gründerin von Sanktionsfrei:</p>
          <p className="px-5 mt-3 mb-5 text-center">
            „Grundeinkommen ist ein Grundpfeiler auf dem Weg zur sozialen und Geschlechtergerechtigkeit.”
          </p>
          <BotschafterWerner/>
          <p className="mt-3 font-italic">Götz W. Werner, Gründer von dm-drogerie markt:</p>
          <p className="px-5 mt-3 mb-5 text-center">
            „Früher oder später werden wir einsehen, dass an einem Einkommen für alle kein Weg vorbei führt. Je früher, desto besser.”
          </p>
        </div>
        <div className="col-lg-6">
          <p className="font-weight-bold">Unterstütze uns dabei, die größte Petition zum Thema Grundeinkommen zu werden.</p>
          <p>
            Wir haben schon viele Botschafter gewinnen können, wir wollen mehr erreichen.
            Du hilfst uns und der Idee voranzukommen, indem Du auf Deinen Social Media
            Kanälen unsere Posts teilst. Die stehen hier frei zum Download zur Verfügung.
            An allererster Stelle steht die Verbreitung des 
            <a className="font-weight-bold custom-anchor" href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html"> Links zur Bundestagspetition</a>.
          </p>
          <p>Folgende Hashtags unterstützen noch unsere Reichweite:<br/>
            <strong>#menschingermany</strong><br/>
            <strong>#bedingungslosesGrundeinkommen</strong><br/>
            <strong>#bge</strong><br/>
          </p>
          <ImageGallery/>
        </div>
      </div>
    </div>
  <div className="bg-light pb-3">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 py-3 pt-lg-5">
                  <div className="btn-container mx-auto">
                      <Link to="/warum-grundeinkommen">
                        <BtnGrundeinkommenSchwarz/>
                          <div className="overlay col-lg-12 py-3 pt-lg-5">
                            <BtnGrundeinkommenOrange/>
                          </div>
                      </Link>
                  </div>
              </div>
              <div className="col-lg-6 pb-3 pt-lg-5">
                  <div className="btn-container mx-auto">
                      <Link to="/">
                        <BotschafterBackBlack/>
                          <div className="overlay col-lg-12 pb-3 pt-lg-5">
                            <BotschafterBackOrange/>
                          </div>
                      </Link> 
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
}

export default WerdeBotschafter
