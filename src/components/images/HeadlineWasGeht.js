import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadlineWasGeht = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "HeadlineGrafik_was_geht.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Was Geht"
      style={{ maxWidth: "450px" }}
    />
  )
}

export default HeadlineWasGeht
