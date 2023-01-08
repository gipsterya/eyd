import { ReactNode } from 'react'
import NextLink from 'next/link'

interface LinkProps {
  href: string
  rel?: string
  className?: string
  children: ReactNode
}

export default function Link(props: LinkProps) {
  const { href, children, ...rest } = props

  if (href.startsWith('/')) {
    return (
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    )
  }

  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}
