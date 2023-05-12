/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Juliane Cassidy`,
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [{
    resolve: `gatsby-source-ghost`,
    options: {
      apiUrl: `http://localhost:2368`,
      contentApiKey: `0faf74bc1118b49086a8f6f1ca`,
    }
  }],
}
