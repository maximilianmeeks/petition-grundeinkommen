import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BotschafterLeonie = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Statements_facebook_1200x627_Leonie.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Leonie Schraven, 'Wer sagt denn, dass es nicht auch anders sein kann? Lasst uns gemeinsam Neuland erkunden, lasst uns gemeinsam anders denken, lasst uns gemeinsam mutig sein!'"/>
}

export default BotschafterLeonie
