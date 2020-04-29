import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"

const About = () => (
  <Layout>
    <SEO title="Wer wir sind" 
    imgFb="/BGE_post_facebook_1200x627_3.jpg"
    slug="/wer-wir-sind"/>
    <div className="container">
      <Header url="/wer-wir-sind"/>
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-md-6">
          <p><strong>Gemeinsam ist das neue Vorne</strong></p>
          <p>
            Wir sind ein Bündnis von Frauen, die sich seit vielen Jahren auf
            unterschiedlichen Wegen für das Bedingungslose Grundeinkommen engagieren. Uns
            fehlt in der öffentlichen Debatte eindeutig die
            weibliche Perspektive. Das wollen wir ändern!
          </p>
          <p>
            Im Bedingungslosen Grundeinkommen sehen wir eine finanzielle Basis, die uns
            alle trägt und die alle Formen von Arbeit ermöglicht. Gerade für den Bereich
            der unbezahlten oder schlecht bezahlten Care-Arbeit birgt das BGE enormes
            Potential. Arbeit ist viel mehr als bezahlte Erwerbsarbeit und unsere
            Gesellschaft ist ganz entscheidend auf dem Fundament der unbezahlten Arbeit
            gegründet. Das BGE gibt Raum für eine ökonomische und ökologische
            Umstrukturierung, die das Wohl und die Würde aller in den Mittelpunkt stellt.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Wir haben viel vor und freuen uns über Gleichgesinnte, die
            mit uns an einem Strang ziehen.
          </p>
          <p>
            Uschi Bauer, Anna-Sophie Brüning, Amira Jehia, Leonie Schraven, Helena Steinhaus, Beatrice Werner, Susanne Wiest
          </p>
        </div>
      </div>
    </div>
  <ImageMenu/>
</Layout>
)

export default About
