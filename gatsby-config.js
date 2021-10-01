const siteMetadata = {
  siteUrl: 'https://mrocha.xyz',
  title: 'mrocha.xyz',
}

const plugins = [
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      htmlTitle: `Admin | ${siteMetadata.title}`,
      htmlFavicon: 'src/images/admin-favicon.ico',
    },
  },
  'gatsby-plugin-postcss',
  'gatsby-plugin-dts-css-modules',
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'assets',
      path: `./static/assets/`,
    },
    __key: 'assets',
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
      name: 'tags',
      path: `./content/tags`,
    },
    __key: 'tags',
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
          options: {
            staticFolderName: 'static',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1280,
            quality: 75,
            backgroundColor: '#3F3F46',
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
    resolve: 'gatsby-omni-font-loader',
    options: {
      preconnect: ['https://fonts.gstatic.com'],
      web: [
        {
          name: 'Raleway',
          file: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap',
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-use-dark-mode',
    options: {
      classNameDark: 'dark',
      classNameLight: 'light',
      minify: true,
    },
  },
]

module.exports = {
  siteMetadata,
  plugins,
}
