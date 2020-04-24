import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BotschafterBackOrange = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Botschafter_zurueck_orange.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Zurück zur Startseite"/>
}

export default BotschafterBackOrange
