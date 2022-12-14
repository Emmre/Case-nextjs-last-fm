import { useEffect, useState } from "react"

export function useMediaQuery(): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(
    getMatches("(max-width: 480px)")
  )

  function handleChange() {
    setMatches(getMatches("(max-width: 480px)"))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia("(max-width: 480px)")

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener("change", handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener("change", handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ["(max-width: 480px)"])

  return matches
}

export const useSessionStorage = (name: string) => {
  const [value, setValue] = useState<any>(null)

  useEffect(() => {
    const item: any = sessionStorage.getItem(name)
    try {
      return setValue(JSON.parse(item))
    } catch (e) {
      return setValue(item)
    }
  }, [])

  return value
}

export const setSessionStorage = (name: string, value: any) => {
  if (typeof value === "object") {
    sessionStorage.setItem(name, JSON.stringify(value))
  } else {
    sessionStorage.setItem(name, value)
  }
}
