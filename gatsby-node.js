const { getTemplates } = require('./src/utils/templates')
const { SlugFactory } = require('./src/utils/slug-factory')

/** @type {import('gatsby').GatsbyNode['onCreateNode']} */
const onCreateNode = ({ node, getNode, actions }) => {
  const IS_INTERNAL_TYPE_MARKDOWN_REMARK =
    node.internal.type === 'MarkdownRemark'

  /** @type {string | null} */
  const templateKey = node.frontmatter?.templateKey
  const HAS_TEMPLATE_KEY = templateKey?.length > 0

  if (IS_INTERNAL_TYPE_MARKDOWN_REMARK && HAS_TEMPLATE_KEY) {
    const { createNodeField } = actions

    const IS_UNIQUE = !!node.frontmatter?.isUnique
    const filePath = IS_UNIQUE
      ? templateKey
      : require('gatsby-source-filesystem').createFilePath({
          node,
          getNode,
          basePath: 'pages',
        })

    const slug = new SlugFactory(filePath).createSlug()

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
    reporter.panicOnBuild(
      'Error while running create pages query!',
      result.errors
    )
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
