import type { ComponentType } from 'react'
import { useTranslation } from 'react-i18next'
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandPython,
  IconCode,
  IconDatabase,
  IconServer,
  IconBrandMysql,
  IconBrandPrisma,
  IconBrandCss3,
} from '@tabler/icons-react'
import { cn } from '@/lib/utils'

type TechItem = {
  name: string
  icon: ComponentType<{ className?: string }>
}

const stackCategories: { key: string; items: TechItem[] }[] = [
  {
    key: 'stack.frontend',
    items: [
      { name: 'React', icon: IconBrandReact },
      { name: 'Next.js', icon: IconBrandNextjs },
      { name: 'TypeScript', icon: IconBrandTypescript },
      { name: 'Tailwind', icon: IconBrandTailwind },
      { name: 'CSS', icon: IconBrandCss3 },
      { name: 'Shadcn', icon: IconCode },
      { name: 'Zustand', icon: IconCode },
      { name: 'Nuqs', icon: IconCode },
    ],
  },
  {
    key: 'stack.backend',
    items: [
      { name: 'Python', icon: IconBrandPython },
      { name: 'FastAPI', icon: IconServer },
      { name: 'NestJS', icon: IconServer },
    ],
  },
  {
    key: 'stack.database',
    items: [
      { name: 'MySQL', icon: IconBrandMysql },
      { name: 'PostgreSQL', icon: IconDatabase },
      { name: 'SQL Server', icon: IconDatabase },
    ],
  },
  {
    key: 'stack.orm',
    items: [
      { name: 'Prisma', icon: IconBrandPrisma },
      { name: 'Drizzle', icon: IconDatabase },
    ],
  },
]

function TechItemCard({ name, icon: Icon }: TechItem) {
  return (
    <div
      className={cn(
        'group flex flex-col items-center gap-2 rounded-lg border border-border bg-card/50 p-4',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_var(--glow-muted)]'
      )}
    >
      <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
      <span className="text-xs font-medium">{name}</span>
    </div>
  )
}

export function TechStack() {
  const { t } = useTranslation()

  return (
    <section id="stack" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="mb-10 text-2xl font-bold tracking-tight">{t('stack.title')}</h2>

      <div className="space-y-10">
        {stackCategories.map((category) => (
          <div key={category.key}>
            <h3 className="mb-4 border-b border-border pb-2 text-sm font-medium text-muted-foreground">
              {t(category.key)}
            </h3>
            <div className="group grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {category.items.map((item) => (
                <TechItemCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
