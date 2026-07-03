export type TechTag =
  | 'React' | 'Next.js' | 'Shadcn' | 'Python'
  | 'FastAPI' | 'CSS' | 'NestJS' | 'Zustand'
  | 'Nuqs' | 'Tailwind' | 'MySQL' | 'PostgreSQL'
  | 'Prisma' | 'Drizzle' | 'SQL Server' | 'TypeScript' | 'Vite' | 'Clerk'

export type Project = {
  id: string
  title: string
  descriptionKey: string
  images: string[]
  liveUrl?: string
  githubUrl?: string
  tags: TechTag[]
}

export const projects: Project[] = [
  {
    id: 'hotel-fiesta',
    title: 'Hotel Fiesta Clon',
    descriptionKey: 'projects.items.hotel-fiesta.description',
    images: [
      '/images/projects/hotel/hotel.webp',
      '/images/projects/hotel/rooms.webp',
    ],
    liveUrl: 'https://hotelifiesta-clon.netlify.app',
    githubUrl: 'https://github.com/eduardojzv/Hotel',
    tags: ['React', 'Vite', 'TypeScript', 'CSS'],
  },
  {
    id: 'pro-salud',
    title: 'Pro Salud Clon',
    descriptionKey: 'projects.items.pro-salud.description',
    images: [
      '/images/projects/pro-salud/pro-salud.webp',
      '/images/projects/pro-salud/our-brands.webp',
      '/images/projects/pro-salud/jobs.webp',
    ],
    liveUrl: 'https://prosalud-clon.netlify.app',
    githubUrl: 'https://github.com/eduardojzv/proSalud',
    tags: ['React', 'Vite', 'CSS', 'FastAPI', 'MySQL'],
  },
  {
    id: 'tico-gym',
    title: 'Tico Gym',
    descriptionKey: 'projects.items.tico-gym.description',
    images: [
      '/images/projects/tico-gym/home.webp',
      '/images/projects/tico-gym/suscribe.webp',
      '/images/projects/tico-gym/jobs.webp',
    ],
    tags: ['Next.js', 'Tailwind', 'PostgreSQL','Drizzle','Clerk'],
  }
]

export function getUniqueTags(projectList: Project[]): TechTag[] {
  const tagSet = new Set<TechTag>()
  for (const project of projectList) {
    for (const tag of project.tags) {
      tagSet.add(tag)
    }
  }
  return Array.from(tagSet).sort()
}
