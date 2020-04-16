import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Datenschutz = () => (
  <Layout>
    <SEO title="DSGVO" />
    <h1>Datenschutz</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Datenschutz
