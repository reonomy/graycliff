/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const write = require('write')
const WebpackNotifierPlugin = require('webpack-notifier')
const path = require('path')
const { toLower, get } = require('lodash')
const { introspectionQuery, graphql, printSchema } = require('gatsby/graphql')
const { createFilePath } = require('gatsby-source-filesystem')

/**
 * Intercept and modify the GraphQL schema
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'Mdx') {
    // Add a new "collection" field which can be accessed from the schema under fields { collection }
    const collection = get(getNode(get(node, 'parent')), 'sourceInstanceName');
    actions.createNodeField({
      node,
      name: 'collection',
      value: collection,
    });

    // Add a new "route" field which can be accessed from the schema under fields { route }
    const route = '/' + collection + toLower(
      createFilePath({
        node,
        getNode,
        trailingSlash: false,
      })
    );
    actions.createNodeField({
      node,
      name: 'route',
      value: route,
    });
  }
}

/**
 * Dynamically create pages for all .mdx content.
 *
 * NOTE: Content located in /pages is created automatically but should be limited
 * to static pages like "About" or "Home", etc, and is subject data limitations
 * since query data resolved below cannot be injected in at build time.
 */
exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query CreatePagesQuery {
          allMdx {
            edges {
              node {
                id
                fields {
                  route
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          actions.createPage({
            // Encode the route
            path: node.fields.route,
            // Layout for the page
            component: path.resolve('./src/Layout.tsx'),
            // Values defined here are injected into the page as props and can
            // be passed to a GraphQL query as arguments
            context: {
              id: node.id,
            },
          })
        })
      })
    )
  })
}

/**
 * Add the file-system as an api proxy:
 * https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
 */
exports.onCreateDevServer = ({ app }) => {
  const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs')
  fsMiddlewareAPI(app)
}

/**
 * Update default Webpack configuration
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new WebpackNotifierPlugin({
        skipFirstNotification: true,
      }),
    ],
    resolve: {
      // Enable absolute import paths
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

/**
 * Generate GraphQL schema.json file to be read by tslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 */
exports.onPostBootstrap = async ({ store }) => {
  try {
    const { schema } = store.getState()
    const jsonSchema = await graphql(schema, introspectionQuery)
    const sdlSchema = printSchema(schema)

    write.sync('schema.json', JSON.stringify(jsonSchema.data), {})
    write.sync('schema.graphql', sdlSchema, {})

    console.log('\n\n[gatsby-plugin-extract-schema] Wrote schema\n') // eslint-disable-line
  } catch (error) {
    console.error(
      '\n\n[gatsby-plugin-extract-schema] Failed to write schema: ',
      error,
      '\n'
    )
  }
}
