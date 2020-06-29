/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, imgFb, slug }) {
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
          content: `Die Zeit ist reif für's Grundeinkommen.`,
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
          content: imgFb,
        },
        {
          property: `url`,
          content: `https://www.mensch-in-germany.org${slug}`,
        },
        {
          property: `og:image:alt`,
          content: `Das Grundeinkommen kommt! Jetzt abstimmen und die Petition unterzeichnen!`,
        },
        {
          property: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `Lysistratax e.V.`,
        },
        {
          property: `twitter:image`,
          content: `https://www.mensch-in-germany.org/BGE_post_twitter_1200x675_4.jpg`,
        },
        {
          name: `twitter:image:alt`,
          content: `Das Grundeinkommen kommt! Jetzt abstimmen und die Petition unterzeichnen!`,
        },
        {
          name: `twitter:title`,
          content: `Die Zeit ist reif für's Grundeinkommen.`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="icon" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  description: `Der Film zum Grundeinkommen ist da - teile ihn und hole so noch mehr UnterstützerInnen an Bord. Zusammen können wir es schaffen, zusammen sind wir mehr!`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
