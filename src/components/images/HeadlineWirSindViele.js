import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadlineWirSindViele = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "headline_wir_sind_viele.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="Wir sind viele" style={{maxWidth: "320px"}}/>
}

export default HeadlineWirSindViele
