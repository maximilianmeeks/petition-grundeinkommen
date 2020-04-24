import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BotschafterAmira = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Statements_facebook_1200x627_Amira.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Amira Jehia, 'Grundeinkommen befähigt uns dazu, unser Leben wirklich selbst in die Hand zu nehmen. Vor allem für Frauen und Kinder birgt es ein enormes Potential für echte Emanuipation.'"/>
}

export default BotschafterAmira
