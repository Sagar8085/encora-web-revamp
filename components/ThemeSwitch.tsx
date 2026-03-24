"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // To avoid hydration mismatch, prevent rendering anything theme-dependent
  // on the server by checking if we have mounted on the client first.
  if (!mounted) {
    return (
      <button
        className="relative p-2 rounded-lg bg-encora-gray dark:bg-encora-mint/20 text-encora-green dark:text-white hover:bg-encora-mint/20 dark:hover:bg-encora-mint/30 transition-all duration-300 group"
        aria-label="Toggle Dark Mode"
        style={{ visibility: "hidden" }} // Prevents layout shift but hides content
      >
        <div className="relative w-6 h-6" />
      </button>
    )
  }

  const isDark = theme === "dark" || resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-lg bg-encora-gray dark:bg-encora-mint/20 text-encora-green dark:text-white hover:bg-encora-mint/20 dark:hover:bg-encora-mint/30 transition-all duration-300 group"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-6 h-6">
        <AiOutlineSun
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`}
        />
        <AiOutlineMoon
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
            }`}
        />
      </div>
    </button>
  )
}

export default ThemeSwitch