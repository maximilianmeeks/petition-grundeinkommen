import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadlineBotschafter = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Unterseite_Werde_Botschafter_Headlinegrafik_NEU.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="Wie Unterstützen!" style={{maxWidth: "450px"}}/>
}

export default HeadlineBotschafter
