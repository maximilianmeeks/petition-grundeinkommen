import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BtnBotschafterSchwarz = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Teaser_Botschafter_schwarz_fixed.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Werde Botschafter"/>
}

export default BtnBotschafterSchwarz
