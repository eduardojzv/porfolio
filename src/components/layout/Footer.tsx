import { useTranslation } from 'react-i18next'
import {
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { contact } from '@/config/contact'

const socialLinks = [
  { href: contact.whatsapp, icon: IconBrandWhatsapp, label: 'WhatsApp' },
  { href: contact.email, icon: IconMail, label: 'Email' },
  { href: contact.linkedin, icon: IconBrandLinkedin, label: 'LinkedIn' },
] as const

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <span className="text-sm font-medium">{contact.name}</span>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon-sm"
              render={
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                />
              }
              className="transition-shadow hover:shadow-[0_0_12px_var(--glow)]"
            >
              <Icon className="size-4" />
            </Button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {year} · {t('footer.built')}
        </p>
      </div>
    </footer>
  )
}
