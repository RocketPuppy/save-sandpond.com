module.exports = {
  siteMetadata: {
    title: 'Save Sand Pond',
    siteUrl: 'https://save-sandpond.com',
    description: 'Sand pond is a precious resource in need of help'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
