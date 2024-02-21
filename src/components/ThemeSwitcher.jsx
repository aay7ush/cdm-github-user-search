import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode((prev) => !prev)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`theme-switcher ${
        darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'
      } `}
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeSwitcher
