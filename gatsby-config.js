/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "21ccrnc3lpf1",
        accessToken: "k4AQ8pDKhko_3gWu5hkqPMliZ1l8ri228lnnbEmCPz4",
      },
    },
  ],
}
