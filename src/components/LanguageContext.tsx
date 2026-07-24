"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, dictionaries } from '@/lib/dictionaries'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof dictionaries.id
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load language from localStorage on mount
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'id' || saved === 'en')) {
      setLanguageState(saved)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Use Indonesian as fallback before mount to avoid hydration mismatch
  const t = mounted ? dictionaries[language] : dictionaries.id

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
