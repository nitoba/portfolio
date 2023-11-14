import { SheetClose, SheetContent } from '../ui/sheet'
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
    <SheetContent>
      <ul className="flex flex-col items-center py-4">
        {links.map((link, index) => (
          <SheetClose asChild key={index}>
            <li>
              <NavLink href={link.path} title={link.title} />
            </li>
          </SheetClose>
        ))}
      </ul>
    </SheetContent>
  )
}
