"use client"

import { useLanguage } from "./language-provider"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function Logo() {
  const { language } = useLanguage()

  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Heart className="h-6 w-6 text-white" />
      </div>
      <div className="font-bold text-xl text-slate-800">
        {language === "hi" ? "सेवा संस्थान" : "Seva Sansthan"}
      </div>
    </Link>
  )
} 