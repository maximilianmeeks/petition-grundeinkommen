import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BotschafterHartmann = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Statements_facebook_1200x627_Amy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Anny Hartmann, Die Corona-Krise zeigt, dass die Finanzierbarkeit von Maßnahmen nie eine Rolle spielt. Alles, was politisch gewollt ist, ist auch finanzierbar. Die Frage ist also nicht: 'Was kostet ein Grundeinkommen?', sondern sie lautet: 'Ist die Freiheit des Individuums politisch gewollt?'"/>
}

export default BotschafterHartmann
