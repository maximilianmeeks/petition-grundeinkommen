import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BotschafterSusanne = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Statements_facebook_1200x627_Susanne.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Susanne Wiest, 'Mit dem Bedingungslosen Grundeinkommen von allen für alle ziehen wir unserer Gesellschaft einen Boden ein, der alle trägt'"/>
}

export default BotschafterSusanne
