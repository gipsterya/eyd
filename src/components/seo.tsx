import { useRouter } from 'next/router'
import Head from 'next/head'
import config from 'utils/config'

interface SEOProps {
  title?: string
  isArticle?: boolean
}

export default function SEO({
  title = config.site.title,
  isArticle,
}: SEOProps) {
  const { asPath } = useRouter()
  const canonical = config.site.url + asPath
  const logo = config.site.url + '/logo.png'
  const image = config.site.url + '/social-card.png'
  const sitemap = config.site.url + '/sitemap.xml'

  const schemaOrgJSONLD: any[] = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.site.url + '/',
      name: config.site.title,
      alternateName: 'EYD Daring',
      sameAs: [config.site.repo],
      image: {
        '@type': 'ImageObject',
        url: logo,
      },
    },
  ]

  if (isArticle) {
    schemaOrgJSONLD.push({
      '@context': 'http://schema.org',
      '@type': 'Article',
      url: canonical,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      description: config.site.description,
      version: 5,
      author: {
        '@type': 'Person',
        name: config.author.name,
      },
      publisher: {
        '@type': 'organization',
        name: 'Badan Pengembangan dan Pembinaan Bahasa - Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kemdikbud.go.id/assets/icon/favicon-96x96.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical,
      },
    })
  }

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="author" content={config.author.name} />
      <meta name="description" content={config.site.description} />

      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content={config.site.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={config.site.description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={config.site.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={config.author.username} />

      <link rel="alternate" type="application/xml" href={sitemap} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
    </Head>
  )
}
