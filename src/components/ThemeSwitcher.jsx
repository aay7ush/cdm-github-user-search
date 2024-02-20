import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode((prev) => !prev)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-full ${
        darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'
      } transition-colors duration-200`}
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeSwitcher
