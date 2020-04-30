import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadlineWerWirSind = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "headline_wer_wir_sind.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="Wer wir sind" style={{maxWidth: "320px"}}/>
}

export default HeadlineWerWirSind
