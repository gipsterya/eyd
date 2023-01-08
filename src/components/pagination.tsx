import Link from './link'

interface Slug {
  title: string
  slug: string
}

export interface PaginationProps {
  prev: Slug
  next: Slug
}

export default function Pagination({ prev, next }: PaginationProps) {
  const style =
    'block text-sm text-gray-800 bg-blue-50 border border-blue-200 rounded p-3 mb-6 md:text-base dark:text-gray-200 dark:bg-slate-800 dark:border-gray-800 md:dark:text-gray-100'

  return (
    <nav id="pagination" className="mx-auto w-full pt-10 pb-6 md:pt-14">
      <ul className="flex flex-col md:flex-row">
        <li className="text-left md:mr-4 md:w-1/2">
          {prev && (
            <Link href={`/${prev.slug}`} rel="prev" className={style}>
              {`← ${prev.title}`}
            </Link>
          )}
        </li>
        <li className="text-right md:ml-4 md:w-1/2">
          {next && (
            <Link href={`/${next.slug}`} rel="next" className={style}>
              {`${next.title} →`}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
