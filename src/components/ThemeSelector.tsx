import { useTranslation } from 'react-i18next'
import { themes } from '@/themes/themes'
import type { ThemeName } from '@/themes/themes'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {
  current: ThemeName
  onChange: (theme: ThemeName) => void
}

export function ThemeSelector({ current, onChange }: Props) {
  const { t } = useTranslation()

  return (
    <Select
      value={current}
      onValueChange={(value) => {
        if (value) onChange(value as ThemeName)
      }}
    >
      <SelectTrigger className="w-40">
        <SelectValue placeholder={t('nav.theme')} />
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem key={theme.name} value={theme.name}>
            <span className="flex items-center gap-2">
              <span
                className="size-3 shrink-0 rounded-full"
                style={{ backgroundColor: theme.color }}
              />
              {theme.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
