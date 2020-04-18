import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BtnGrundeinkommenSchwarz = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Teaser_Grundeinkommen.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Warum Grundeinkommen?"/>
}

export default BtnGrundeinkommenSchwarz
