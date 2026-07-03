import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconMenu2 } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LangSelect } from '@/components/LangSelect'
import { ThemeSelector } from '@/components/ThemeSelector'
import type { ThemeName } from '@/themes/themes'
import { contact } from '@/config/contact'

type Props = {
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

const navLinks = [
  { href: '#about', key: 'nav.about' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#stack', key: 'nav.stack' },
] as const

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </a>
  )
}

export function Navbar({ theme, onThemeChange }: Props) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const closeSheet = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#about" className="text-sm font-semibold tracking-tight">
          {contact.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={t(link.key)} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangSelect />
          <ThemeSelector current={theme} onChange={onThemeChange} />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon-sm" className="md:hidden" />
            }
          >
            <IconMenu2 className="size-5" />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{contact.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={t(link.key)}
                  onClick={closeSheet}
                />
              ))}
            </nav>
            <div className="flex flex-col gap-4 px-4 pt-4">
              <LangSelect />
              <ThemeSelector current={theme} onChange={onThemeChange} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
