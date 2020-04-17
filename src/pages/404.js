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

export default NotFoundPage
