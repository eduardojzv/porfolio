import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  icon: ReactNode
  label: string
  external?: boolean
}

export function ContactLink({ href, icon, label, external = false }: Props) {
  return (
    <Button
      variant="outline"
      render={
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        />
      }
      className={cn(
        'gap-2 transition-shadow hover:shadow-[0_0_12px_var(--glow)]'
      )}
    >
      {icon}
      {label}
    </Button>
  )
}
