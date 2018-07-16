require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Illinois PT and PTA Programs'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    }
  ]
};
