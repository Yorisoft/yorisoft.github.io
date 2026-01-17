import { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch"

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check localStorage first, then system preference
        const savedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        
        const shouldBeDark = savedTheme === "dark" || (savedTheme === null && prefersDark)
        
        if (shouldBeDark) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")  // ← This is the missing piece!
        }
        setIsDark(shouldBeDark)
    }, [])

    const toggleTheme = () => {
        const newIsDark = !isDark
        document.documentElement.classList.toggle("dark", newIsDark)
        localStorage.setItem("theme", newIsDark ? "dark" : "light")
        setIsDark(newIsDark)
    } 

    return <Switch id="theme" className="" checked={isDark} onClick={toggleTheme}/>
}

export default ThemeToggle
