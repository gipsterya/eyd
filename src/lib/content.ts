import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import rehypePresetMinify from 'rehype-preset-minify'

// Documents dir
const docs = join(process.cwd(), 'docs')

// Get all files recursively
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)

const flattenArray = (input) =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  )

const map = (fn) => (input) => input.map(fn)

const walkDir = (fullPath) => {
  return statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix) => (extraPath) => join(prefix, extraPath)

const getAllFilesRecursively = (folder) =>
  pipe(
    readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder)

// Get all paths
export async function getPaths() {
  const files = getAllFilesRecursively(docs)
  // Only return docs/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(docs.length + 1).replace(/\\/g, '/'))
}

// Get all documents
export async function getDocs<Type>(slug: string | string[]) {
  const source = slug ? readFileSync(join(docs, `${slug}.md`), 'utf8') : null

  const content = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePresetMinify],
    },
    parseFrontmatter: true,
  })

  return {
    content: {
      ...content,
      frontmatter: {
        ...content.frontmatter,
        slug: slug,
      },
    },
  }
}

// Get all frontmatter
export interface FrontMatter {
  id: number
  title: string
  slug: string
  fileName: string
}

export async function getFields() {
  const files = getAllFilesRecursively(docs)

  const allFrontmatter: FrontMatter[] = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(docs.length + 1).replace(/\\/g, '/')

    const source = readFileSync(file, 'utf8')
    const { data } = matter(source)
    const frontmatter = data as FrontMatter

    allFrontmatter.push({ ...frontmatter, slug: fileName.replace(/\.md/, '') })
  })

  // Sort docs by id for pagination
  return allFrontmatter.sort((a, b) => a.id - b.id)
}
