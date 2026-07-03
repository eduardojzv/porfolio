import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { TechStack } from '@/components/sections/TechStack'
import { useTheme } from '@/themes/useTheme'

export function App() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main className="flex-1">
        <About />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}

export default App
