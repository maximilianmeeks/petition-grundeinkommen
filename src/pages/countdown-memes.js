import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"
import CountdownGallery from "../components/CountdownGallery"

function CountdownMemeGallery() {
  return (
    <Layout>
      <SEO
        title="Wir sind viele"
        imgFb="/2020_0010_Goetz.png"
        description="Willkommen im Club der BotschafterInnen! Schickt uns euer Foto samt Zitat an botschafterIn@mensch-in-germany.org."
        slug="/countdown-memes"
      />
      <Container className="pb-lg-5">
        <Header url="/countdown-memes" />
        <Row className="mt-5"></Row>
        <CountdownGallery />
      </Container>
      <ImageMenu />
    </Layout>
  )
}

export default CountdownMemeGallery
