import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"

const Impressum = () => (
  <Layout>
    <SEO title="Impressum" />
    <div className="container impressum">
      <Header url="/impressum"/>    
      <div className="row">
        <div className="col-6">
          <h3 className="mb-4">Mensch in Germany</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>
            Eine Initiative von Lysistratax e.V.
          </p>
          <p>
          Susanne Wiest, Beatrice Werner, Helena Steinhaus, Leonie Schraven, Amira Jehia, Claudia Cornelsen,
          Anna-Sophie Brüning, Uschi Bauer
          </p>
          <p>
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>
            <strong>Berlin</strong><br/>
            <span>Zossener Str. 41</span><br/>
            <span>10961 Berlin</span><br/>
            <a href="mailto:hallo@lysistratax.org">hallo@lysistratax.org</a><br/>
            <a href="http://www.lysistratax.org">www.lysistratax.org</a><br/>
          </p>
          <span>Realisation: </span>
          <a href="http://www.schippercompany.com">www.schippercompany.com</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Impressum
