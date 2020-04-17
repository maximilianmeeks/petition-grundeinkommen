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
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-md-6">
          <p><strong>Gemeinsam ist das neue Vorne</strong>
          </p>
          <p>
            Wir sind ein Bündnis von Frauen, die sich seit vielen Jahren auf
            unterschiedlichen Wegen für das Bedingungslose Grundeinkommen engagieren. Uns
            fehlt in der öffentlichen Debatte eindeutig die weibliche Perspektive. Gerade
            für den Bereich der unbezahlten oder schlecht bezahlten Care-Arbeit birgt das
            BGE enormes Potential. Das wollen wir
            ausschöpfen und mit Aufklärungskampagnen aufzeigen, dass „Arbeit” viel mehr
            ist als bezahlte Erwerbsarbeit und unsere Gesellschaft ganz entscheidend auf
            dem Fundament der unbezahlten Arbeit gegründet ist.
          </p>
          <p>
            Im Bedingungslosen
            Grundeinkommen sehen wir eine finanzielle Basis, die uns alle trägt und die
            alle Formen von Arbeit ermöglicht. Das BGE gibt Raum
            für eine ökonomische und ökologische Umstrukturierung, die das Wohl und die
            Würde aller in den Mittelpunkt stellt.
          </p>
          
        </div>
        <div className="col-lg-6">
          <p>
            <strong>Lysistratax</strong> – von uns allen für uns alle. Wir haben viel vor und freuen uns über Gleichgesinnte, die
            mit uns an einem Strang ziehen. Danke!
          </p>
          <p>
          Uschi Bauer, Anna-Sophie Brüning, Amira Jehia, Leonie Schraven, Helena Steinhaus, Beatrice Werner, Susanne Wiest
          </p>
        </div>
      </div>
    </div>
    <footer className="bg-primary pb-3">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center footer-primary">
                    <Link to="/impressum/" className="mx-3">Impressum</Link>
                    <Link to="/datenschutz/" className="mx-3">Datenschutz</Link>
                </div>
            </div>
        </div>
    </footer>
</Layout>
)

export default About
