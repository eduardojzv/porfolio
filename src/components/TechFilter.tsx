import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { TechTag } from '@/data/projects'

type FilterValue = TechTag | 'all'

type Props = {
  value: FilterValue
  onChange: (value: FilterValue) => void
  tags: TechTag[]
}

export function TechFilter({ value, onChange, tags }: Props) {
  const { t } = useTranslation()

  return (
    <Select
      value={value}
      onValueChange={(val) => onChange(val as FilterValue)}
    >
      <SelectTrigger className="w-52">
        <SelectValue placeholder={t('projects.filter_placeholder')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">{t('projects.all')}</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag} value={tag}>
            {tag}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
