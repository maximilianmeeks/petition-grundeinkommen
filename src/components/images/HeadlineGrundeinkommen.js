import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadlineGrundeinkommen = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "HeadlineGrafik_grundeinkommen_konkret.png" }
      ) {
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
      alt="Grundeinkommen Konkret"
      style={{ maxWidth: "450px" }}
    />
  )
}

export default HeadlineGrundeinkommen
