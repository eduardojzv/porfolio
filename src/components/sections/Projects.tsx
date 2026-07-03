import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '@/components/ProjectCard'
import { TechFilter } from '@/components/TechFilter'
import { projects, getUniqueTags, type TechTag } from '@/data/projects'

export function Projects() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<TechTag | 'all'>('all')
  const uniqueTags = useMemo(() => getUniqueTags(projects), [])

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((p) => p.tags.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">{t('projects.title')}</h2>
        <TechFilter
          value={activeFilter}
          onChange={setActiveFilter}
          tags={uniqueTags}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
