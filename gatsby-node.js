const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: {order: ASC, fields: [frontmatter___book, frontmatter___date]}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              book
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge, index) => {
      const id = edge.node.id

      const prev = index === 0 ? null : chapterPathOrNull(posts[index - 1].node, edge.node)
      const next = index === (posts.length - 1) ? null : chapterPathOrNull(posts[index + 1].node, edge.node)
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          prev,
          next
        },
      })
    })



  })
}

const chapterPathOrNull = (node, otherNode) => {

  if (node.frontmatter.book !== otherNode.frontmatter.book) {
    return null
  }
  const path = node.fields.slug;
  return path.includes('chapters') ? path : null;
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions


  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
