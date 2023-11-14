import { NavLink } from './nav-link'

type Link = {
  title: string
  path: string
}
type Props = {
  links: Link[]
}
export function MenuOverlay({ links }: Props) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}
