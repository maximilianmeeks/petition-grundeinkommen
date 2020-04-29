import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PreviewBGEUnterschrift = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Preview_BGE_Unterschrift.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="Offline Unterzeichnung - Formular hier herunterladen"/>
}

export default PreviewBGEUnterschrift