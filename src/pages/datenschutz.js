import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

const Datenschutz = () => (
  <Layout>
    <SEO title="Datenschutzverordnung" />
    <div className="container">
      <Header url="/datenschutz"/>
      <div className="row">
        <div className="col-6">
          <h3 className="mb-4">Mensch in Germany</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default Datenschutz
