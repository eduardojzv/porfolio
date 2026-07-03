import { useState, useEffect } from 'react'
import type { ThemeName } from './themes'

const STORAGE_KEY = 'portfolio-theme'
const DEFAULT_THEME: ThemeName = 'gridcn'

const VALID_THEMES: ThemeName[] = [
  'gridcn', 'ares', 'poseidon', 'clu', 'athena', 'tron', 'aphrodite',
]

function isThemeName(value: string | null): value is ThemeName {
  return value !== null && VALID_THEMES.includes(value as ThemeName)
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return isThemeName(stored) ? stored : DEFAULT_THEME
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return { theme, setTheme }
}
