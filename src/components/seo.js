/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `Nach der Krise ist vor dem Grundeinkommen.`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `/BGE_post_facebook_1200x627_4.jpg`,
        },
        {
          property: `og:image:alt`,
          content: `Das Grundeinkommen kommt! Jetzt abstimmen und die Petition unterzeichnen!`
        },
        {
          name: `twitter:card`,
          content: `Wir alle sind die Wirtschaft. Unterstütze uns dabei, die größte Petition zum Thema Grundeinkommen zu werden. Jetzt bis zum 27.04. unterschreiben.`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  description: `Wir alle sind die Wirtschaft. Unterstütze uns dabei, die größte Petition zum Thema Grundeinkommen zu werden. Jetzt bis zum 27.04. unterschreiben.`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
