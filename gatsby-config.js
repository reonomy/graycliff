module.exports = {
  siteMetadata: {
    title: "Graycliff",
    description: "A Reonomy Design Style Guide",
    author: "techadmin@reonomy.com",
  },
  plugins: [
    {
      resolve: "gatsby-mdx",
      options: {
        extensions: [".mdx", ".md"],

        // Default layouts are meta wrappers around .mdx pages. Can be useful to
        // share queries across different types of pages.
        defaultLayouts: {
          default: require.resolve("./src/components/Layout/index.tsx"),
        },

        // Imports here are available globally to .mdx files, with the exception
        // of automatically created pages located in /pages. This is a bug in
        // gatsby-mdx. See https://github.com/ChristopherBiscardi/gatsby-mdx/issues/243
        //
        // Also note: For mdx to work in NetlifyCMS, global scope passed in here
        // also must be passed into `cms.js`, under the `scope` key.
        //
        globalScope: `
          import { UIComponents } from 'Theme'
          export default {
            ...UIComponents
          }
        `,

        // mdPlugins: [],
        // gatsbyRemarkPlugins: [{}],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.jsx`,
        enableIdentityWidget: false,
        publicPath: "admin",
        htmlTitle: "Admin",
        manualInit: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/content/components/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "brand",
        path: `${__dirname}/content/brand/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "code",
        path: `${__dirname}/content/code/`,
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
