import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadlineGrundeinkommen = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Unterseite_WarumGrundeinkommen_Headlinegrafik.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="Warum Grundeinkommen" style={{maxWidth: "450px"}}/>
}

export default HeadlineGrundeinkommen