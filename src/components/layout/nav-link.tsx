import Link from 'next/link'

type Props = {
  href: string
  title: string
}

export function NavLink({ href, title }: Props) {
  return (
    <Link
      href={href}
      className="block rounded py-2 pl-3 pr-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary md:p-0"
    >
      {title}
    </Link>
  )
}
