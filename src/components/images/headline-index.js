import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadlineIndex = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "HeadlineGrafik.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="Wann, wenn nicht jetzt? Das Grundeinkommen ist dran!"/>
}

export default HeadlineIndex
