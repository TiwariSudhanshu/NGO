"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Leaf, Users, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: "शिक्षा सहायता कार्यक्रम",
      category: "education",
      description: "गरीब बच्चों को मुफ्त शिक्षा और स्कूल सामग्री प्रदान करना",
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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            {t("projectsTitle")}
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            हमारी विभिन्न परियोजनाओं के माध्यम से हम समुदाय के जीवन में सकारात्मक बदलाव लाने का प्रयास कर रहे हैं
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            सभी परियोजनाएं
          </Button>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            {t("education")}
          </Button>
          <Button
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            <Heart className="h-4 w-4 mr-2" />
            {t("health")}
          </Button>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            <Leaf className="h-4 w-4 mr-2" />
            {t("environment")}
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full flex items-center space-x-1 ${getCategoryColor(project.category)}`}
                >
                  {getCategoryIcon(project.category)}
                  <span className="text-sm font-medium">
                    {project.category === "education" && t("education")}
                    {project.category === "health" && t("health")}
                    {project.category === "environment" && t("environment")}
                    {project.category === "empowerment" && "सशक्तिकरण"}
                    {project.category === "elderly" && "वृद्ध सेवा"}
                    {project.category === "disaster" && "आपदा राहत"}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  {project.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>{project.beneficiaries}</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-green-600 hover:bg-green-700"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  {t("readMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-green-50 rounded-lg p-8">
          <h2
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            क्या आप भी हमारी परियोजनाओं का हिस्सा बनना चाहते हैं?
          </h2>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
            आपका योगदान हमारे कार्यों को और भी प्रभावशाली बना सकता है
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-green-600 hover:bg-green-700"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              {t("donate")}
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              स्वयंसेवक बनें
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
