import Link from 'next/link'
import { Menu } from 'lucide-react'
import { NavLink } from './nav-link'
import { MenuOverlay } from './menu-overlay'
import { Sheet, SheetTrigger } from '../ui/sheet'

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
]

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto border border-border bg-zinc-950 bg-opacity-100">
      <Sheet>
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
          <Link
            href={'/'}
            className="text-2xl font-semibold text-white md:text-5xl"
          >
            LOGO
          </Link>

          <div className="mobile-menu block md:hidden">
            <SheetTrigger asChild>
              <button className="flex items-center rounded border border-border px-3 py-2 text-slate-200 hover:border-white hover:text-white">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            {/* {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
              >
                <Menu className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )} */}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <MenuOverlay links={navLinks} />
      </Sheet>
    </nav>
  )
}
