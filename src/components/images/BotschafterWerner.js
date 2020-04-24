import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BotschafterWerner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Statements_facebook_1200x627_Goetz.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Prof. Götz W. Werner, 'Früher oder später werden wir einsehen, dass an einem Einkommen für alle kein Weg vorbei führt. Je früher, desto besser."/>
}

export default BotschafterWerner