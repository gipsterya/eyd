import Link from './link'
import config from 'utils/config'

function Copyleft() {
  return (
    <div className="flex gap-2 pb-8 text-4xl text-gray-200 md:text-5xl">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fillRule="nonzero"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9 8c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0-.001 2.828l1.414 1.413A4.001 4.001 0 0 1 5 12c0-2.208 1.792-4 4-4zm7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0-.001 2.828l1.414 1.413A4.001 4.001 0 0 1 12 12c0-2.208 1.792-4 4-4z"
          ></path>
        </g>
      </svg>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fillRule="nonzero"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 6a1 1 0 0 1 1 1v4h-1.5v4h-3v-4H9v-4a1 1 0 0 1 1-1h4zm-2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
          ></path>
        </g>
      </svg>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fillRule="nonzero"
            d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.415 0-8 3.585-8 8s3.585 8 8 8 8-3.585 8-8-3.585-8-8-8zm0 2c2.761 0 5 2.686 5 6s-2.239 6-5 6c-2.177 0-4.029-1.67-4.715-4l2.117.001C9.92 15.196 10.89 16 12 16c1.657 0 3-1.79 3-4s-1.343-4-3-4c-1.11 0-2.08.805-2.599 2H11l-2.5 3L6 10h1.284C7.971 7.67 9.823 6 12 6z"
          ></path>
        </g>
      </svg>
    </div>
  )
}

export default function Footer() {
  const links = [
    {
      title: 'Lisensi',
      href: '/lisensi',
    },
    {
      title: 'Kode sumber',
      href: config.site.repo,
    },
    {
      title: 'Sponsor',
      href: 'https://github.com/sponsors/gipsterya',
    },
  ]

  return (
    <footer className="flex w-full flex-col bg-black px-8 py-10 md:px-10">
      <div className="flex w-full flex-col items-start justify-between md:flex-row">
        <div className="flex flex-col space-y-6">
          <h3 className="text-base font-semibold text-gray-200 md:text-lg">
            Komunitas
          </h3>
          <ul className="space-y-4 pb-10">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 md:text-base"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <Copyleft />
          <div className="text-sm text-gray-400 md:text-right md:text-base">
            &#169; 2023{' '}
            <Link href={config.author.url} className="text-gray-300">
              {config.author.name}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
