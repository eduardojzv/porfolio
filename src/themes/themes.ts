export type ThemeName =
  | 'gridcn' | 'ares' | 'poseidon'
  | 'clu' | 'athena' | 'tron' | 'aphrodite'

export type ThemeMeta = {
  name: ThemeName
  label: string
  color: string
  description: string
}

export const themes: ThemeMeta[] = [
  { name: 'gridcn',    label: 'Gridcn',    color: '#4f8ef7', description: 'Default · azul sobre negro' },
  { name: 'ares',      label: 'Ares',      color: '#e05a2b', description: 'Rojo sangre · agresivo' },
  { name: 'poseidon',  label: 'Poseidon',  color: '#3d6fcf', description: 'Azul oceánico · profundo' },
  { name: 'clu',       label: 'Clu',       color: '#e8a020', description: 'Naranja neón · TRON legacy' },
  { name: 'athena',    label: 'Athena',    color: '#d4c44a', description: 'Dorado · sabio y sobrio' },
  { name: 'tron',      label: 'Tron',      color: '#3dd8d8', description: 'Cian eléctrico · grid puro' },
  { name: 'aphrodite', label: 'Aphrodite', color: '#d45fa0', description: 'Rosa y lila · elegante' },
]
