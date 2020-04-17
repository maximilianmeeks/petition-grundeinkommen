import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DownloadIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Download_icon.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
    
  return <Img fluid={data.image.childImageSharp.fluid} alt="Download" style={{maxWidth: "50px"}}/>
}

export default DownloadIcon
