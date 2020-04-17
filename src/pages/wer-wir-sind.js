import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

const About = () => (
  <Layout>
    <SEO title="Wer wir sind" />
    <div className="container">
      <Header url="/wer-wir-sind"/>
      <div className="row mb-3 mt-lg-5 pt-5">
        <div className="col-lg-6">
          <p><strong>Gemeinsam ist das neue Vorne</strong><br/>
            Bedingungslos: Von uns allen für uns alle
          </p>
          <p>
            Wir sind ein Bündnis von Frauen mit facettenreichen Potenzialen, die sich seit vielen Jahren für das
            bedingungslose Grundeinkommen engagieren. Unsere schöpferische Energie fließt in das Upgrade zu
            einer besseren Version der Gesellschaft. Ein neues Miteinander & Füreinander soll unser Kompass
            sein, um den Wandel auf allen Ebenen voranzubringen. Das Zeitfenster für wirklichen Wandel steht
            gerade meilenweit offen – und diese Zeitqualität wollen wir entschlossen nutzen.
          </p>
          <p>
            Unser Gründungsimpuls? Zum einen der wegweisende Satz von Götz Werner: „Die Frauen führen das
            Grundeinkommen ein.“ Zum anderen die griechische Komödie Lysistrata (411 v. Chr. uraufgeführt)
            des griechischen Dichters Aristophanes, in der mutige Frauen die Akropolis besetzen, die Kriegskasse
            kapern & sich den Männern so lange verweigern, bis sie die ständigen Kriege beenden. Im Hier &
            Jetzt setzen wir auf das kraftvolle Zusammenspiel weiblicher Energie, um eine geschlechtergerechte
            Arbeits- & Lebenswelt zu erreichen, den Geldschleier zu lüften für Steuerfairness & sozialen Frieden
            zu etablieren durch die Einführung des bedingungslosen Grundeinkommens. Wir wollen, dass alle
            Menschen ein gutes Leben haben, um Selbstbestimmung, Zeitsouveränität & Potenzialentfaltung zu
            ermöglichen.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Ja, Corona macht uns kirre: Einerseits greift die Existenzangst um sich – andererseits zeigt sich das
            Gute im Menschen. Solidarität, Freundlichkeit, Menschlichkeit nehmen <strong>Raum</strong> ein – für den vor
            Corona kaum Zeit blieb. Um diese Werte dauerhaft zu verankern, brauchen wir das
            Grundeinkommen. Denn wenn die Angst weg ist, kommt die <strong>Liebe</strong>.
          </p>
          <p>
            Wir haben viel vor. Und freuen uns über Gleichgesinnte, die mit uns an einem Strang ziehen. Danke!
          </p>
          <p>
            Susanne Wiest, Beatrice Werner, Helena Steinhaus, Leonie Schraven, Amira Jehia, Claudia Cornelsen,
            Anna-Sophie Brüning, Uschi Bauer
          </p>
        </div>
      </div>
    </div>
    <footer className="bg-primary pb-3">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <Link to="/impressum/" className="mx-3 text-light">Impressum</Link>
                    <Link to="/datenschutz/" className="mx-3 text-light">Datenschutz</Link>
                </div>
            </div>
        </div>
    </footer>
</Layout>
)

export default About
