module.exports = {
  siteMetadata: {
    title: `Awesome Mule`,
    description: `An extensive list of useful links related to MuleSoft architecture, design, implementation, and operations.`,
    author: `Nasir Bilal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/favicon-32x32.png`,
      },
    },
  ],
}
