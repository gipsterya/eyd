import { writeFileSync } from 'fs'
import prettier from 'prettier'
import config from 'utils/config'

export async function generateSitemap(posts) {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc')

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${config.site.url}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${posts
        .map(
          (post) => `
        <url>
          <loc>${config.site.url}/${post.slug}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join('')}
      <url>
        <loc>${config.site.url}/lisensi</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  writeFileSync('public/sitemap.xml', formatted)
}
