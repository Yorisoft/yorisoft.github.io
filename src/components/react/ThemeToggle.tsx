import { useEffect } from 'react'
import { Switch } from "@/components/ui/switch"

function ThemeToggle() {
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }

  return <Switch id="theme" className="" onClick={toggleTheme}/>
}

export default ThemeToggle
