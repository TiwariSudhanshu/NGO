"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "hi" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  hi: {
    // Navigation
    home: "मुखपृष्ठ",
    about: "हमारे बारे में",
    projects: "परियोजनाएँ",
    team: "हमारी टीम",
    donate: "दान करें",
    events: "कार्यक्रम और समाचार",
    contact: "संपर्क करें",

    // Home Page
    heroTitle: "समुदाय की सेवा में समर्पित",
    heroSubtitle: "भोपाल स्थित हमारी संस्था शिक्षा, स्वास्थ्य और पर्यावरण के क्षेत्र में निरंतर कार्य कर रही है",
    ourMission: "हमारे उद्देश्य",
    learnMore: "और जानें",
    joinUs: "हमसे जुड़ें",

    // About
    aboutTitle: "हमारे बारे में",
    vision: "हमारा दृष्टिकोण",
    mission: "हमारा मिशन",

    // Projects
    projectsTitle: "हमारी परियोजनाएँ",
    education: "शिक्षा",
    health: "स्वास्थ्य",
    environment: "पर्यावरण",
    readMore: "और पढ़ें",

    // Team
    teamTitle: "हमारी टीम",
    volunteers: "स्वयंसेवक",
    becomeVolunteer: "स्वयंसेवक बनें",

    // Donate
    donateTitle: "दान करें",
    donateSubtitle: "आपका योगदान हमारे काम को आगे बढ़ाने में मदद करता है",

    // Events
    eventsTitle: "कार्यक्रम और समाचार",
    upcomingEvents: "आगामी कार्यक्रम",
    recentNews: "हाल की खबरें",

    // Contact
    contactTitle: "संपर्क करें",
    address: "पता",
    phone: "फोन",
    email: "ईमेल",

    // Footer
    quickLinks: "त्वरित लिंक",
    followUs: "हमें फॉलो करें",
    copyright: "© 2024 सेवा संस्थान। सभी अधिकार सुरक्षित।",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    projects: "Projects",
    team: "Our Team",
    donate: "Donate",
    events: "Events & News",
    contact: "Contact",

    // Home Page
    heroTitle: "Dedicated to Community Service",
    heroSubtitle: "Our Bhopal-based organization works continuously in education, health, and environment",
    ourMission: "Our Mission",
    learnMore: "Learn More",
    joinUs: "Join Us",

    // About
    aboutTitle: "About Us",
    vision: "Our Vision",
    mission: "Our Mission",

    // Projects
    projectsTitle: "Our Projects",
    education: "Education",
    health: "Health",
    environment: "Environment",
    readMore: "Read More",

    // Team
    teamTitle: "Our Team",
    volunteers: "Volunteers",
    becomeVolunteer: "Become a Volunteer",

    // Donate
    donateTitle: "Donate",
    donateSubtitle: "Your contribution helps us advance our work",

    // Events
    eventsTitle: "Events & News",
    upcomingEvents: "Upcoming Events",
    recentNews: "Recent News",

    // Contact
    contactTitle: "Contact Us",
    address: "Address",
    phone: "Phone",
    email: "Email",

    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    copyright: "© 2024 Seva Sansthan. All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["hi"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
