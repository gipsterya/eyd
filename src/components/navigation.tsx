import Link from './link'
import config from 'utils/config'

declare global {
  interface Window {
    __theme: string
    __setPreferredTheme: (theme: string) => void
  }
}

export default function Navigation() {
  const toggleTheme = () => {
    if (window.__theme === 'light') {
      window.__setPreferredTheme('dark')
    } else {
      window.__setPreferredTheme('light')
    }
  }

  return (
    <nav
      id="navigation"
      className="flex h-16 flex-col justify-center border-b border-white bg-black px-8 py-2 text-gray-100 md:py-4 md:px-4"
    >
      <div className="mx-auto flex w-full">
        <a
          href="#skip"
          className="absolute -left-1/4 -top-8 -translate-y-12 transform px-4 py-3 transition-transform duration-200 focus:top-4 focus:translate-y-3"
        >
          Skip to content
        </a>
        <div className="flex-1">
          <Link
            href="/"
            className="inline-block py-2 font-semibold text-white transition-all md:px-6 md:text-lg"
          >
            <span className="before:mb-cpsb after:mt-cpsa before:table before:content-[''] after:table after:content-['']">
              EYD
            </span>
          </Link>
        </div>
        <div className="md:px-4">
          <div className="flex justify-end py-2">
            <Link
              aria-label="GitHub Repo"
              href={config.site.repo}
              className="px-6"
            >
              <svg
                height="1em"
                viewBox="2 2 20 20"
                fill="none"
                aria-hidden="true"
                className="h-6 w-6 bg-transparent outline-none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <button
              type="button"
              aria-label="Dark Mode"
              onClick={toggleTheme}
              className="block bg-transparent outline-none dark:hidden md:px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Light Mode"
              onClick={toggleTheme}
              className="hidden bg-transparent outline-none dark:block md:px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
