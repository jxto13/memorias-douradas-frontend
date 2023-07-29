import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Moon from '@modules/common/icons/moon'
import Sun from '@modules/common/icons/sun'
import Button from "@modules/common/components/button"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
      className="flex items-center justify-center  focus:outline-none"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeSwitch
