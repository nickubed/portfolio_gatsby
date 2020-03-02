module.exports = {
  pathPrefix: "portfolio-gatsby",
  siteMetadata: {
    title: `Nick Quandt`,
    description: ``,
    author: `Nick Quandt`,
  },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `N_Quandt Portfolio`,
        short_name: `nq_folio`,
        start_url: `/`,
        background_color: `#FFC176`,
        theme_color: `#FFC176`,
        display: `minimal-ui`,
        icon: `src/images/portfolio_icon.jpg`, // This path is relative to the root of the site.
      },
    }
  ],
}
