module.exports = {
  siteMetadata: {
    title: `VCN`,
    description: `VCN中文站，搭建与国外对话的桥梁，让更多人了解区块链，爱上区块链，共同构建良好的区块链社区`,
    author: `@VCN`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
     `gatsby-plugin-react-helmet`,
      `gatsby-plugin-antd`,
      {
          resolve: "gatsby-plugin-chakra-ui",
          options: {
              /**
               * @property {boolean} [isResettingCSS=true]
               * if false, this plugin will not use `<CSSReset />
               */
              
              /**
               * @property {boolean} [isUsingColorMode=true]
               * if false, this plugin will not use <ColorModeProvider />
               */
              isUsingColorMode: false,
          },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/post`,
        name: `post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imagesicon`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
