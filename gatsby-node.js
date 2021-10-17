const { getTemplates } = require('./utils/templates')

/** @type {import('gatsby').GatsbyNode['onCreateNode']} */
const onCreateNode = ({ node, getNode, actions }) => {
  const IS_INTERNAL_TYPE_MARKDOWN_REMARK =
    node.internal.type === 'MarkdownRemark'
  const HAS_TEMPLATE_KEY = node.frontmatter?.templateKey?.length > 0

  if (IS_INTERNAL_TYPE_MARKDOWN_REMARK && HAS_TEMPLATE_KEY) {
    const { createFilePath } = require('gatsby-source-filesystem')
    const { createNodeField } = actions

    const filePath = createFilePath({ node, getNode, basePath: 'pages' })

    const DATE_PART_LENGTH = '/YYYY-MM-DD-'.length
    const SLASH_IN_END_LENGTH = -1 // credits: https://flaviocopes.com/how-to-remove-last-char-string-js/

    // gets only the text after the date
    // example: /2021-10-17-lorem/ -> lorem
    const slug = filePath.slice(DATE_PART_LENGTH, SLASH_IN_END_LENGTH)

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

/** @type {import('gatsby').GatsbyNode['createPages']} */
const createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(/* GraphQL */ `
    fragment contents on MarkdownRemarkConnection {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
          }
        }
      }
    }

    query GET_CREATE_PAGES_DATA {
      contentsRemark: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { ne: null } } }
      ) {
        ...contents
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query!')
    return
  }

  const {
    contentsRemark: { edges: contents },
  } = result.data

  const templates = await getTemplates()

  const { createPage } = actions

  reporter.info('creating pages')
  contents.forEach(({ node }) => {
    const {
      id,
      fields: { slug },
      frontmatter: { templateKey },
    } = node

    createPage({
      path: slug,
      component: templates.get(templateKey),
      context: {
        id,
        slug,
      },
    })
    reporter.success(slug)
  })
}

module.exports = {
  onCreateNode,
  createPages,
}
