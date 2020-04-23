import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FacebookFrame = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "facebook_frame_website.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="Profilbild Bilderrahmen für Facebook"/>
}

export default FacebookFrame