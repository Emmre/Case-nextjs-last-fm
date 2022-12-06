import React, { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext({
  isDark: false,
  toggleDarkMode: () => {},
})

interface IProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: IProps) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    applyTheme(isDark ? darkTheme : lightTheme)
  }, [isDark])

  const applyTheme = (theme : string[]) => {
    const root = document.getElementsByTagName("html")[0]
    root.style.cssText = theme.join(";")
  }

  const toggleDarkMode = () => {
    const body = document.getElementsByTagName("body")[0]
    body.style.cssText = "transition: background .5s ease"
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

const lightTheme = [
  "--border: rgba(0,0,0,.2)",
  "--shadow: #000",
  "--heading: #fff",
  "--main: #fff",
  "--text: #000",
  "--textAlt: #fff",
  "--inactive: rgba(0,0,0,.3)",
  "--background: white",
]

const darkTheme = [
  "--border: rgba(255,255,255,.1)",
  "--shadow: #000",
  "--heading: rgba(255,255,5,.9)",
  "--main: #79248f",
  "--text: gray",
  "--textAlt: #fff",
  "--inactive: rgba(255,255,255,.3)",
  "--background: #2D2D2D",
]
export default ThemeProvider
