import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const UbiBackBlack = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Grundeinkommen_zurueck_schwarz.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Zurück zur Startseite"/>
}

export default UbiBackBlack
