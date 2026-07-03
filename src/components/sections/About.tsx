import { useTranslation } from 'react-i18next'
import {
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ContactLink } from '@/components/ContactLink'
import { contact } from '@/config/contact'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        <Avatar size="lg" className="size-28">
          <AvatarImage src="/images/avatar.svg" alt={t('about.name')} />
          <AvatarFallback className="text-2xl">EJ</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('about.greeting')}{' '}
            <span className="text-primary">{t('about.name')}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {t('about.bio')}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <ContactLink
              href={contact.whatsapp}
              icon={<IconBrandWhatsapp className="size-4" />}
              label="WhatsApp"
              external
            />
            <ContactLink
              href={contact.email}
              icon={<IconMail className="size-4" />}
              label="Email"
            />
            <ContactLink
              href={contact.linkedin}
              icon={<IconBrandLinkedin className="size-4" />}
              label="LinkedIn"
              external
            />
          </div>
        </div>
      </div>
    </section>
  )
}
