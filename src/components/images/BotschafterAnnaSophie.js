import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BotschafterAnnaSophie = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Statements_facebook_1200x627_Anna-Sophie.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Anna Sophie, 'Ich bin Mensch in Germany - ich bin fürs Grundeinkommen, damit wir angstfreie und selbstbestimmte Entscheidungen treffen können. Für uns selbst und für uns alle zusammen.'"/>
}

export default BotschafterAnnaSophie
