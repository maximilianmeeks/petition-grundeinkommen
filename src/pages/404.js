import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <Header url="/404"/>
      <div className="col-12 text-center mb-5">
        <h3><Link to="/" className="font-oswald font-weight-bold text-light">Zurück zur Startseite</Link></h3>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
