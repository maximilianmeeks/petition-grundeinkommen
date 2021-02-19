import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UpdateAbstimmung = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "Bildelement_Petition_Abstimmung21.jpg" }
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
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Leonie Schraven, Uschi Bauer, Tonia Merz, Susanne Wiest #GemeinsamFürGrundeinkommen"
    />
  )
}

export default UpdateAbstimmung
