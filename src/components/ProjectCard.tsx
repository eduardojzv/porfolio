import { useTranslation } from 'react-i18next'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const { t } = useTranslation()

  return (
    <Card
      className={cn(
        'overflow-hidden border border-border bg-card py-0 ring-0',
        'transition-shadow hover:shadow-[0_0_20px_var(--glow)]',
      )}
    >
      <ProjectCarousel images={project.images} alt={project.title} />

      <CardContent className="space-y-3 pt-4">
        <h3 className="text-base font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(project.descriptionKey)}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      {(project.liveUrl || project.githubUrl) && (
        <CardFooter className="gap-2 border-t border-border bg-transparent">
          {project.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              render={
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="gap-1.5 transition-shadow hover:shadow-[0_0_12px_var(--glow)]"
            >
              <IconExternalLink className="size-3.5" />
              {t('projects.live')}
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              render={
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="gap-1.5 transition-shadow hover:shadow-[0_0_12px_var(--glow)]"
            >
              <IconBrandGithub className="size-3.5" />
              {t('projects.github')}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
