import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

const Impressum = () => (
  <Layout>
    <SEO
      title="Impressum"
      slug="/impressum"
      description="Mensch in Germany ist eine Initiative von Anna-Sophie Brüning, Beatrice Werner, Leonie Schraven, Susanne Wiest und Uschi Bauer. Realisation www.schippercompany.com, Webentwicklung www.maximilianmeeks.de"
      imgFb="/Logo_Aktionsbubble.png"
    />
    <div className="container impressum">
      <Header url="/impressum" />
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-md-6">
          <h3 className="mb-4">Mensch in Germany</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>
            Eine Initiative von Anna-Sophie Brüning, Beatrice Werner, Leonie
            Schraven, Susanne Wiest und Uschi Bauer
          </p>
          <p>Angaben gemäß § 5 TMG</p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-6">
          <p>
            <strong>Lörrach</strong>
            <br />
            <span>Berner Weg 3</span>
            <br />
            <span>79539 Lörrach</span>
            <br />
            <a
              href="mailto:botschafterIn@mensch-in-germany.org"
              target="_blank"
            >
              botschafterIn@mensch-in-germany.org
            </a>
            <br />
            <a href="https://www.mensch-in-germany.org/" target="_blank">
              www.mensch-in-germany.org
            </a>
            <br />
          </p>
          <span>Realisation: </span>
          <a href="http://www.schippercompany.com" target="_blank">
            www.schippercompany.com
          </a>
          <br />
          <span>Webentwicklung: </span>
          <a href="https://maximilianmeeks.de/" target="_blank">
            www.maximilianmeeks.de
          </a>
        </div>
      </div>
      <div className="mb-5">
        <h3>Haftungsausschluss</h3>
        <h3>Haftung für Inhalte</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten iststets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartigeInhalte umgehend entfernen.
        </p>
      </div>
    </div>
    <footer className="bg-primary pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center footer-primary">
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
  </Layout>
)

export default Impressum
