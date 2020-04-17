import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <Header url="/404"/>
      <div className="col-6 mx-auto">
        <h4>Ungültiger Pfad</h4>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
