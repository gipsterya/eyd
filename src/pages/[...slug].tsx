import { GetStaticPaths, GetStaticProps } from 'next'
import { getPaths, getDocs, getFields, FrontMatter } from 'lib/content'
import { generateSitemap } from 'lib/sitemap'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Container from 'components/container'
import SEO from 'components/seo'
import Pagination, { PaginationProps } from 'components/pagination'
import Link from 'components/link'
import config from 'utils/config'

interface PageProps {
  content: MDXRemoteSerializeResult
  pagination: PaginationProps
}

export default function Page({ content, pagination }: PageProps) {
  const { frontmatter } = content
  const { prev, next } = pagination

  const MDXComponents = {
    a: Link,
    blockquote: (props) => (
      <blockquote
        className="rounded bg-green-100 dark:bg-green-200"
        {...props}
      />
    ),
    Note: (props) => (
      <>
        <div className="-mb-6 mt-6 rounded-t bg-blue-600 py-4 px-6 text-white md:-mb-8 md:py-6 md:px-8">
          Catatan:
        </div>
        <blockquote className="rounded-b bg-blue-100 py-8" {...props} />
      </>
    ),
  }

  return (
    <Container>
      <SEO title={`${frontmatter.title} | ${config.site.title}`} isArticle />
      <article className="prose mx-auto w-full bg-light pt-8 dark:bg-dark dark:prose-dark md:prose-lg">
        <header className="border-b border-gray-300">
          <h1>{frontmatter.title}</h1>
        </header>
        <MDXRemote {...content} components={MDXComponents} />
        <Link
          href={`${config.site.repo}/blob/main/docs/${frontmatter.slug}.md`}
        >
          Edit di GitHub
        </Link>
      </article>
      <Pagination prev={prev} next={next} />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths()

  return {
    paths: paths.map((path) => ({
      params: {
        slug: path.replace(/\.md/, '').split('/'),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params.slug as string[]).join('/')

  // Documents
  const docs = await getDocs<FrontMatter>(slug)

  // Pagination
  const fields = await getFields()
  const docIndex = fields.findIndex((docs) => docs.slug === slug)
  const prev: PaginationProps['prev'] = fields[docIndex - 1] || null
  const next: PaginationProps['next'] = fields[docIndex + 1] || null

  // Sitemap
  await generateSitemap(fields)

  return {
    props: {
      ...docs,
      pagination: {
        prev,
        next,
      },
    },
  }
}
