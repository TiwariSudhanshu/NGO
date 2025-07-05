"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="font-bold text-xl">Seva Sansthan</div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A dedicated NGO based in Bhopal, working continuously in education, health, and environmental sectors to
              serve the community and create positive change.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer"
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-green-400">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", key: "about" },
                { href: "/projects", key: "projects" },
                { href: "/team", key: "team" },
                { href: "/events", key: "events" },
              ].map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-green-400">{t("contactTitle")}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Bhopal, Madhya Pradesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@sevasansthan.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
