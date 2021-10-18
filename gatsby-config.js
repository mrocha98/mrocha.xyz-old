require('dotenv').config()
const colors = require('tailwindcss/colors')
const { __DEV__, __PROD__ } = require('./utils/env')

const siteUrl = process.env.SITE_META_SITE_URL || 'https://mrocha.xyz'
const title = process.env.SITE_META_TITLE || 'mrocha.xyz'
const description =
  process.env.SITE_META_DESCRIPTION || 'Portfólio e blog técnico.'

/** @type {import('./src/hooks/useSiteMetadata').SiteMetadata} */
const siteMetadata = {
  siteUrl,
  title,
  description,
}

/** @type {import('gatsby').GatsbyConfig['plugins']} */
const plugins = [
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      htmlTitle: `Admin | ${siteMetadata.title}`,
      htmlFavicon: 'src/images/admin-favicon.ico',
    },
  },
  __DEV__ && 'gatsby-plugin-dts-css-modules',
  'gatsby-plugin-postcss',
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'uploads',
      path: './static/assets/uploads/',
    },
    __key: 'uploads',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'categories',
      path: `./content/categories`,
    },
    __key: 'categories',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: `./content/posts`,
    },
    __key: 'posts',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'projects',
      path: `./content/projects`,
    },
    __key: 'projects',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'tags',
      path: `./content/tags`,
    },
    __key: 'tags',
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: siteMetadata.title,
      short_name: siteMetadata.title,
      description: siteMetadata.description,
      lang: 'pt-BR',
      start_url: '/',
      background_color: colors.gray[900],
      theme_color: colors.emerald[700],
      display: 'minimal-ui',
      cache_busting_mode: 'none',
      icon: 'src/images/icon.png',
      icon_options: {
        purpose: `any maskable`,
      },
    },
  },
  __PROD__ && {
    resolve: 'gatsby-plugin-offline',
    options: {
      workboxConfig: {
        globPatterns: ['**/icons/*', '**/assets/uploads/*'],
      },
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-plugin-netlify-cms-paths',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1280,
            quality: 75,
            linkImagesToOriginal: false,
            withWebp: true,
          },
        },
        'gatsby-remark-lazy-load',
        {
          resolve: 'gatsby-remark-autolink-headers',
          options: {
            removeAccents: true,
            isIconAfterHeader: true,
          },
        },
        'gatsby-remark-external-links',
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            showLineNumbers: true,
          },
        },
        'gatsby-remark-embedder',
        'gatsby-remark-responsive-iframe',
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-use-dark-mode',
    options: {
      classNameDark: 'dark',
      classNameLight: 'light',
      minify: __PROD__,
    },
  },
  __PROD__ && 'gatsby-plugin-netlify',
].filter(Boolean)

module.exports = {
  siteMetadata,
  plugins,
}
