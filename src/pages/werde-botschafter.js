import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import BotschafterWerner from "../components/images/botschafterWerner"
import DownloadIcon from "../components/images/download-icon"

import BtnGrundeinkommenSchwarz from "../components/images/btnGrundeinkommenSchwarz"
import BtnGrundeinkommenOrange from "../components/images/btnGrundeinkommenOrange"
import BotschafterBackBlack from "../components/images/botschafterBackBlack"
import BotschafterBackOrange from "../components/images/botschafterBackOrange"

const WerdeBotschafter = () => (
  <Layout>
    <SEO title="Werde Botschafter" />
    <div className="container">
      <Header url="/werde-botschafter"/>
      <div className="row mb-3 mt-lg-3 pt-5">
        <div className="col-lg-6">
          <BotschafterWerner/>
          <p className="mt-2 mb-3 font-italic">Götz W. Werner, Gründer von dm-drogerie markt:</p>
          <p className="px-4 text-center">
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
          <div className="my-4">
            <a href="/BGE_post_facebook_1200x627_9.zip" download className="custom-anchor">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-2"><DownloadIcon/></div>
                <div className="col-8 pl-0">
                  <strong >Grafiken für Facebook herunterladen (1,9 MB)</strong>
                </div>     
              </div>
            </a>
          </div>
          <div className="my-4">
            <a href="/BGE_post_insta_1080x1080_9.zip" download className="custom-anchor">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-2 position-relative"><DownloadIcon/></div>
                <div className="col-8 pl-0">
                  <strong >Grafiken für Instagram herunterladen (2,6 MB)</strong>
                </div>  
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-light pb-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 py-3 py-lg-4">
                    <div className="btn-container mx-auto">
                      <Link to="/warum-grundeinkommen/">
                        <BtnGrundeinkommenSchwarz/>
                        <div className="overlay col-lg-12 py-3 py-lg-4">
                            <BtnGrundeinkommenOrange/>
                        </div>
                      </Link>
                    </div>
                </div>
                <div className="col-lg-6 pb-3 py-lg-4">
                    <div className="btn-container mx-auto">
                          <Link to="/">
                            <BotschafterBackBlack/>
                            <div className="overlay col-lg-12 pb-3 py-lg-4">
                                <BotschafterBackOrange/>
                            </div>
                        </Link>
                        <p className="text-dark pt-2 pr-3 text-right font-italic">Götz W. Werner, Gründer von dm-drogerie markt</p>
                    </div>
                </div>
                <div className="row">
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
        <footer>
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

export default WerdeBotschafter
