import { useStaticQuery, graphql } from 'gatsby'

export interface SiteMetadata {
  siteUrl: string
  title: string
  description: string
}

type StaticQueryResponse = {
  site: {
    siteMetadata: SiteMetadata
  }
}

export function useSiteMetadata() {
  const data = useStaticQuery<StaticQueryResponse>(graphql/* GraphQL */ `
    query GET_SITE_METADATA_FROM_HOOK {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}
