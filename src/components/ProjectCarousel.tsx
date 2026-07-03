import useEmblaCarousel from 'embla-carousel-react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

type Props = {
  images: string[]
  alt: string
}

export function ProjectCarousel({ images, alt }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  if (images.length === 0) return null

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((src, index) => (
            <div key={src} className="min-w-0 flex-[0_0_100%]">
              <img
                src={src}
                alt={`${alt} ${index + 1}`}
                className="aspect-video w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <IconChevronLeft className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            aria-label="Next image"
          >
            <IconChevronRight className="size-4" />
          </Button>
        </>
      )}
    </div>
  )
}
