"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Heart,
  Leaf,
  ArrowRight,
  Users,
  Award,
  Target,
  CheckCircle,
  Calendar,
  MapPin,
  Star,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {t("heroTitle")}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {t("heroSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/about">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 interactive-button shadow-lg">
                    {t("learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 interactive-button bg-white shadow-lg"
                  >
                    {t("joinUs")}
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t("registeredNGO")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t("taxBenefits")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{t("yearsTrusted")}</span>
                </div>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="relative">
                <Image
                  src="https://i.pinimg.com/736x/64/e2/2d/64e22d8e703a88bdc502babcfa95b530.jpg"
                  alt="Community Service"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl interactive-card">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-3xl text-slate-900">9+</div>
                      <div className="text-slate-600">{t("yearsOfExperience")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("impactOverYears")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("impactSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: t("childrenEducated"), icon: BookOpen, color: "from-blue-500 to-blue-600" },
              { number: "50+", label: t("healthCamps"), icon: Heart, color: "from-red-500 to-red-600" },
              { number: "1000+", label: t("treesPlanted"), icon: Leaf, color: "from-green-500 to-green-600" },
              { number: "100+", label: t("volunteers"), icon: Users, color: "from-purple-500 to-purple-600" },
            ].map((stat, index) => (
              <Card key={index} className="interactive-card text-center">
                <CardContent className="p-6">
                  <div
                    className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("ourValues")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("valuesSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: t("education"),
                description: t("communityServiceText"),
                image: "https://i.pinimg.com/736x/22/ba/24/22ba24c0100b46b64d854e58b076cb0d.jpg",
                stats: "500+ " + t("childrenEducated").toLowerCase(),
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Heart,
                title: t("health"),
                description: t("transparencyText"),
                image: "https://i.pinimg.com/736x/91/00/9f/91009f89b475188fb48b8001527f8925.jpg",
                stats: "2000+ " + t("peopleServed").toLowerCase(),
                color: "from-red-500 to-red-600",
              },
              {
                icon: Leaf,
                title: t("environment"),
                description: t("effectivenessText"),
                image: "https://i.pinimg.com/736x/7a/64/38/7a643897119e74139f7244ec400b4bd1.jpg",
                stats: "1000+ " + t("treesPlanted").toLowerCase(),
                color: "from-green-500 to-green-600",
              },
            ].map((area, index) => (
              <Card key={index} className="interactive-card overflow-hidden">
                <div className="relative">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                    <area.icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-600">{area.stats}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50 interactive-button bg-white"
                    >
                      {t("learnMore")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("projectsTitle")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("projectsSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "डिजिटल लर्निंग सेंटर",
                location: "भोपाल, मध्य प्रदेश",
                date: "दिसंबर 2023",
                description: "जरूरतमंद परिवारों के 100+ बच्चों को कंप्यूटर शिक्षा प्रदान करने के लिए नया डिजिटल लर्निंग सेंटर स्थापित किया गया।",
                image: "https://i.pinimg.com/736x/7f/06/e5/7f06e5f515d65c70641d1c7fe6394fd5.jpg",
                category: t("education"),
              },
              {
                title: "सामुदायिक स्वास्थ्य अभियान",
                location: "ग्रामीण भोपाल",
                date: "नवंबर 2023",
                description: "500+ ग्रामीणों के लिए व्यापक स्वास्थ्य जांच आयोजित की गई, मुफ्त दवाइयां और स्वास्थ्य जागरूकता सत्र प्रदान किए गए।",
                image: "https://i.pinimg.com/736x/da/24/8c/da248c44d66f6ea7b18a5e85daab6ff2.jpg",
                category: t("health"),
              },
            ].map((project, index) => (
              <Card key={index} className="professional-card overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects">
              <Button className="bg-green-600 hover:bg-green-700 professional-button">
                {t("allProjects")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("readyToMakeDifference")}</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: t("transparency"),
                    description: t("transparencyText"),
                  },
                  {
                    icon: Target,
                    title: t("effectiveness"),
                    description: t("effectivenessText"),
                  },
                  {
                    icon: Users,
                    title: t("communityService"),
                    description: t("communityServiceText"),
                  },
                  {
                    icon: CheckCircle,
                    title: t("transparency"),
                    description: t("transparencyText"),
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://i.pinimg.com/736x/71/c2/9f/71c29f49f8d79392d2a911a2474862c0.jpg"
                alt="Team at work"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="font-bold text-2xl text-green-600">100%</div>
                  <div className="text-sm text-gray-600">{t("transparency")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t("joinNextEvent")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t("joinNextEventSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 interactive-button shadow-lg">
                {t("makeDonation")}
              </Button>
            </Link>
            <Link href="/team">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 interactive-button bg-transparent"
              >
                {t("becomeVolunteer")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
