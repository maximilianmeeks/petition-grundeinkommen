import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"

const About = () => (
  <Layout>
    <SEO title="Wer wir sind" />
    <div className="container">
      <Header url="/wer-wir-sind"/>
    </div>
  </Layout>
)

export default About
