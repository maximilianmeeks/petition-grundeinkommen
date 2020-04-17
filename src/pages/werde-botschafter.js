import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import BotschafterWerner from "../components/images/botschafterWerner"
import DownloadIcon from "../components/images/download-icon"
import ImageMenu from "../components/ImageMenu"

const WerdeBotschafter = () => (
  <Layout>
    <SEO title="Werde Botschafter" />
    <div className="container">
      <Header url="/werde-botschafter"/>
      <div className="row mb-3 mt-lg-5 pt-5">
        <div className="col-lg-6">
          <BotschafterWerner/>
          <p className="my-2 font-italic">Götz W. Werner, Gründer von dm-drogerie markt:</p>
          <p>
            „Früher oder später werden wir einsehen, dass an einem Einkommen für alle kein Weg vorbei führt. Je früher, desto besser.”
          </p>
        </div>
        <div className="col-lg-6">
          <p className="font-weight-bold">Unterstütze uns dabei, die größte Petition zum Thema Grundeinkommen zu werden.</p>
          <p>
            Wir haben schon viele Botschafter gewinnen können, wir wollen mehr erreichen.
            Du hilfst uns und der Idee voranzukommen, indem Du auf Deinen Social Media
            Kanälen unsere Posts teilst. Die stehen hier frei zum Download zur Verfügung.
            An allererster Stelle steht die Verbreitung des Links zur Bundestagspetition:
            <a href="https://www.mensch-in-germany.org">www.mensch-in-germany.org</a>
          </p>
          <p>Folgende Hashtags unterstützen noch unsere Reichweite:<br/>
            <strong>#menschingermany</strong><br/>
            <strong>#bedingungslosesGrundeinkommen</strong><br/>
            <strong>#bge</strong><br/>
          </p>
          <p>
            <a href="#" download><DownloadIcon/></a>
            <a href="#" download><DownloadIcon/></a>
          </p>
        </div>
      </div>
    </div>
    <ImageMenu/>
  </Layout>
)

export default WerdeBotschafter
