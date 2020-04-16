import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/images/logo"
import Header from "../components/header"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Grundeinkommen" />
    <Header/>
    <h1>Under Construction</h1>
    <p>Existenzsicherung ist ein Menschenrecht</p>
    <p>Under Construction</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
    <Link to="/alles-zum-grundeinkommen/">Alles zum Grundeinkommen</Link>
    <Link to="/werde-botschafter/">Werde Botschafter</Link>
  </Layout>
)

export default IndexPage
