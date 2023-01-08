import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from './link'
import routes from 'data/routes'
import useLayoutEffect from 'utils/isomorphic-effect'

interface RouteProps {
  title: string
  path: string
}

interface RoutesProps extends RouteProps {
  tree: Array<RouteProps>
}

function Routes({ title, path, tree }: RoutesProps) {
  const [isRouteOpen, setIsRouteOpen] = useState<boolean>(false)
  const { asPath } = useRouter()

  // Open route on page that contains path
  useLayoutEffect(() => {
    if (asPath.includes(path)) {
      setIsRouteOpen(true)
    }
  }, [path, asPath])

  function Route() {
    return (
      <Link
        href={path}
        className="relative flex w-full border-b border-gray-200 pb-4 text-left text-sm font-semibold md:text-base"
      >
        <span
          className={[
            'w-full px-4 py-2',
            path === asPath
              ? 'rounded-lg bg-gray-200 text-blue-600 dark:bg-gray-600 dark:text-blue-300'
              : 'text-gray-700 dark:text-white',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {title}
        </span>
      </Link>
    )
  }

  function RouteTree() {
    return (
      <>
        <button
          type="button"
          aria-label="Sidebar Menu"
          onClick={() => setIsRouteOpen(!isRouteOpen)}
          className={[
            'relative flex w-full border-b border-gray-200 px-4 pb-4 text-left text-sm font-semibold text-gray-700 dark:text-white md:text-base',
            `after:absolute after:top-2 after:right-2 after:h-2.5 after:w-2.5 after:content-['']`,
            'after:border-l-2 after:border-b-2 after:border-gray-900 dark:after:border-gray-200',
            isRouteOpen ? 'after:-rotate-45' : 'after:-rotate-135',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {title}
        </button>
        <ul
          className={['gap-1', !isRouteOpen && 'hidden']
            .filter(Boolean)
            .join(' ')}
        >
          {tree.map((routeTree) => (
            <li key={routeTree.path} className="border-b border-gray-200 py-2">
              <Link
                href={path + routeTree.path}
                className={[
                  'relative flex w-full cursor-pointer py-2 pl-8 text-left text-sm font-semibold md:text-base',
                  path + routeTree.path === asPath
                    ? 'rounded-lg bg-gray-200 text-blue-600 dark:bg-gray-600 dark:text-blue-300'
                    : 'text-gray-700 dark:text-white',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {routeTree.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <div className="flex flex-col gap-1 py-2">
      {tree ? <RouteTree /> : <Route />}
    </div>
  )
}

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { asPath } = useRouter()

  // While Mobile Menu is open, disable body scroll
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.classList.remove('overflow-hidden')
    } else {
      setIsMenuOpen(true)
      document.body.classList.add('overflow-hidden')
    }
  }

  // Close Mobile Menu after user click on link
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.classList.remove('overflow-hidden')
  }, [asPath])

  return (
    <aside className="block">
      <nav
        id="sidebar"
        className="w-0 md:sticky md:top-0 md:flex md:h-full md:max-h-screen md:w-80 md:grow md:flex-col"
      >
        <button
          type="button"
          aria-label="Mobile Menu"
          onClick={toggleMenu}
          className="fixed right-6 bottom-8 z-20 h-10 w-10 rounded-3xl border border-white bg-black md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-2/4 left-2/4 h-6 w-6 -translate-x-1/2 -translate-y-1/2 scale-100 text-white"
          >
            {isMenuOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
        <div
          className={[
            'fixed top-0 bottom-0 left-0 right-0 z-10 overflow-y-auto overflow-x-hidden bg-light dark:bg-dark',
            !isMenuOpen && 'hidden',
            'md:relative md:block md:border-r-2 md:border-gray-200 dark:md:border-gray-400',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="h-screen w-full gap-2 px-6 pt-6 pb-2">
            {routes &&
              routes.map((route) => (
                <Routes
                  key={route.path}
                  title={route.title}
                  path={route.path}
                  tree={route.tree}
                />
              ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
