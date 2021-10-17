import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export type SeoProps = {
  title?: string
  description?: string
}

export const Seo = ({ title, description }: SeoProps) => {
  const { pathname } = useLocation()
  const {
    siteUrl,
    title: defaultTitle,
    description: defaultDescription,
  } = useSiteMetadata()

  const seo = {
    title: `${title || defaultTitle}`.trim(),
    description: `${description || defaultDescription}`.trim(),
    url: `${siteUrl}${pathname}`,
  }

  const IS_HOME_PAGE = pathname === '/'
  const titleTemplate = IS_HOME_PAGE ? defaultTitle : `%s | ${defaultTitle}`

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: 'pt-BR' }}
    >
      <meta name="description" content={seo.description} />

      <meta name="og:site_name" content={defaultTitle} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />

      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  )
}
