module.exports = {
  siteMetadata: {
    title: `Mensch in Germany`,
    description: `Die größte Online-Petition sind wir schon – jetzt per Post fürs Grundeinkommen abstimmen. Danke!`,
    author: `Maximilian Meeks`,
    image: `/BGE_post_facebook_1200x627_4.jpg`,
    url: `https://www.mensch-in-germany.org`
  },
  pathPrefix: "/petition-grundeinkommen",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'wir-sind-viele',
        path: `${__dirname}/src/images/wir-sind-viele`,
      },
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mensch in Germany`,
        short_name: `Petition Grundeinkommen`,
        start_url: `/`,
        background_color: `#eca400`,
        theme_color: `#eca400`,
        display: `minimal-ui`
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
    },
    {
      resolve: `gatsby-plugin-facebook-sdk`,
      options: {
        appId: '842438696234921',
        status: true,
        xfbml: true,
        version: 'v2.7'
      },
    },
    {
      resolve: "gatsby-source-graphql",
          options: {
          // The top level query type, can be anything you want!
          typeName: "GCMS",
          // The field you'll query against, can also be anything you want.
          fieldName: "gcms",
          // Your API endpoint, available from the dashboard and settings window.
          // You can use this endpoint that features US mountains for now.
          url: "https://api-eu-central-1.graphcms.com/v2/ckainqc32083201utcklgf7pq/master",
      },
  },
    
  ],
}
