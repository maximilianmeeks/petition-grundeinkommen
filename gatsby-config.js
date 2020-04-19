module.exports = {
  siteMetadata: {
    title: `Mensch in Germany`,
    description: `Wir alle sind die Wirtschaft. Unterstütze uns dabei, die größte Petition zum Thema Grundeinkommen zu werden. Jetzt bis zum 27.04. unterschreiben.`,
    author: `Maximilian Meeks`,
    url: `https://www.mensch-in-germany.org/`,
    image: `/BGE_post_facebook_1200x627_4.jpg`
  },
  pathPrefix: "/petition-grundeinkommen",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-htaccess`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mensch in Germany`,
        short_name: `Petition Grundeinkommen`,
        start_url: `/`,
        background_color: `#eca400`,
        theme_color: `#eca400`,
        display: `minimal-ui`,
        icon: `favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Oswald, Source Sans Pro"],
          urls: ["fonts.css"],
        },
      },
    }
  ],
}
