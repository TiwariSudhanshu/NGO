"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Leaf, Users, Calendar, MapPin, ArrowRight, CheckCircle, Star } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: "शिक्षा सहायता कार्यक्रम",
      category: "education",
      description: "जरूरतमंद बच्चों को मुफ्त शिक्षा और स्कूल सामग्री प्रदान करना",
      image: "/placeholder.svg?height=200&width=300",
      location: "भोपाल, इंदौर",
      duration: "2020 - वर्तमान",
      beneficiaries: "500+ बच्चे",
    },
    {
      id: 2,
      title: "स्वास्थ्य जागरूकता अभियान",
      category: "health",
      description: "ग्रामीण क्षेत्रों में मुफ्त स्वास्थ्य जांच और दवाइयां",
      image: "/placeholder.svg?height=200&width=300",
      location: "भोपाल जिले के गांव",
      duration: "2019 - वर्तमान",
      beneficiaries: "2000+ लोग",
    },
    {
      id: 3,
      title: "हरित भोपाल मिशन",
      category: "environment",
      description: "वृक्षारोपण और पर्यावरण संरक्षण कार्यक्रम",
      image: "/placeholder.svg?height=200&width=300",
      location: "भोपाल शहर",
      duration: "2021 - वर्तमान",
      beneficiaries: "1000+ पेड़",
    },
    {
      id: 4,
      title: "महिला सशक्तिकरण",
      category: "empowerment",
      description: "महिलाओं के लिए कौशल विकास और रोजगार के अवसर",
      image: "/placeholder.svg?height=200&width=300",
      location: "भोपाल, सीहोर",
      duration: "2022 - वर्तमान",
      beneficiaries: "200+ महिलाएं",
    },
    {
      id: 5,
      title: "वृद्धाश्रम सेवा",
      category: "elderly",
      description: "बुजुर्गों की देखभाल और सामाजिक सहायता",
      image: "/placeholder.svg?height=200&width=300",
      location: "भोपाल",
      duration: "2018 - वर्तमान",
      beneficiaries: "100+ बुजुर्ग",
    },
    {
      id: 6,
      title: "आपदा राहत कार्य",
      category: "disaster",
      description: "प्राकृतिक आपदाओं के दौरान तत्काल सहायता",
      image: "/placeholder.svg?height=200&width=300",
      location: "मध्य प्रदेश",
      duration: "आवश्यकतानुसार",
      beneficiaries: "1000+ परिवार",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "education":
        return <BookOpen className="h-5 w-5" />
      case "health":
        return <Heart className="h-5 w-5" />
      case "environment":
        return <Leaf className="h-5 w-5" />
      default:
        return <Users className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education":
        return "bg-blue-100 text-blue-600"
      case "health":
        return "bg-red-100 text-red-600"
      case "environment":
        return "bg-green-100 text-green-600"
      default:
        return "bg-purple-100 text-purple-600"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t("projectsTitle")}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("projectsSubtitle")}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t("activeProjects")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t("measurableImpact")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{t("communityDriven")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("projectCategories")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("projectCategoriesSubtitle")}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 interactive-button bg-white"
            >
              {t("allProjects")}
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 interactive-button bg-white"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              {t("education")}
            </Button>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 interactive-button bg-white"
            >
              <Heart className="h-4 w-4 mr-2" />
              {t("health")}
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 interactive-button bg-white"
            >
              <Leaf className="h-4 w-4 mr-2" />
              {t("environment")}
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="interactive-card overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full flex items-center space-x-1 ${getCategoryColor(project.category)}`}
                  >
                    {getCategoryIcon(project.category)}
                    <span className="text-sm font-medium">
                      {project.category === "education" && t("education")}
                      {project.category === "health" && t("health")}
                      {project.category === "environment" && t("environment")}
                      {project.category === "empowerment" && t("empowerment")}
                      {project.category === "elderly" && t("elderlyCare")}
                      {project.category === "disaster" && t("disasterRelief")}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2 text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{project.beneficiaries}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-green-600 border-green-600 hover:bg-green-50 interactive-button bg-white"
                  >
                    {t("learnMore")}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("projectImpact")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("projectImpactSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6", label: t("activeProjects"), icon: BookOpen, color: "from-blue-500 to-blue-600" },
              { number: "500+", label: t("childrenEducated"), icon: Heart, color: "from-red-500 to-red-600" },
              { number: "2000+", label: t("peopleServed"), icon: Leaf, color: "from-green-500 to-green-600" },
              { number: "1000+", label: t("treesPlanted"), icon: Users, color: "from-purple-500 to-purple-600" },
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

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t("supportProjects")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t("supportProjectsSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 interactive-button shadow-lg">
              {t("makeDonation")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 interactive-button bg-transparent"
            >
              {t("partnerWithUs")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
