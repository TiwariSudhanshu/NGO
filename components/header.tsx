"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-xl text-slate-800">Seva Sansthan</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", key: "home" },
              { href: "/about", key: "about" },
              { href: "/projects", key: "projects" },
              { href: "/team", key: "team" },
              { href: "/events", key: "events" },
              { href: "/contact", key: "contact" },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-slate-600 hover:text-green-600 transition-all duration-300 font-medium relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Donate Button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                  language === "en" ? "bg-white text-green-600 shadow-sm" : "text-slate-600 hover:text-slate-800"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                  language === "hi" ? "bg-white text-green-600 shadow-sm" : "text-slate-600 hover:text-slate-800"
                }`}
              >
                हिं
              </button>
            </div>
            <Link href="/donate">
              <Button className="bg-green-600 hover:bg-green-700 interactive-button shadow-lg">{t("donate")}</Button>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {[
                { href: "/", key: "home" },
                { href: "/about", key: "about" },
                { href: "/projects", key: "projects" },
                { href: "/team", key: "team" },
                { href: "/events", key: "events" },
                { href: "/contact", key: "contact" },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-slate-600 hover:text-green-600 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
