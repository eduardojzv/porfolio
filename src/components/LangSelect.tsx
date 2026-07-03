import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const languages = [
  { value: 'es', labelKey: 'nav.lang_es' },
  { value: 'en', labelKey: 'nav.lang_en' },
] as const

export function LangSelect() {
  const { i18n, t } = useTranslation()
  const currentLang = i18n.language.startsWith('es') ? 'es' : 'en'

  const handleChange = (lang: string | null) => {
    if (!lang) return
    i18n.changeLanguage(lang)
    localStorage.setItem('portfolio-lang', lang)
  }

  return (
    <Select value={currentLang} onValueChange={handleChange}>
      <SelectTrigger className="w-36">
        <SelectValue placeholder={t('nav.language')} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {t(lang.labelKey)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
