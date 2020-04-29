import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadlineGrundeinkommenJetzt = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Headline_Grundeinkommen_Jetzt.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="#GrundeinkommenJetzt!"/>
}

export default HeadlineGrundeinkommenJetzt
