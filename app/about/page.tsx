"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Award, CheckCircle, Star } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t("aboutTitle")}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("aboutSubtitle")}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
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
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="About NGO"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {t("ourStory")}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t("storyText1")}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t("storyText2")}
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-slate-900">100+</div>
                  <div className="text-slate-600">{t("activeVolunteers")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("vision")} & {t("mission")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("valuesSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="interactive-card">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("vision")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("visionText")}
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("mission")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("missionText")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("ourValues")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("valuesSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="interactive-card text-center">
              <CardContent className="p-8">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t("communityService")}
                </h3>
                <p className="text-slate-600">
                  {t("communityServiceText")}
                </p>
              </CardContent>
            </Card>
            <Card className="interactive-card text-center">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t("transparency")}
                </h3>
                <p className="text-slate-600">
                  {t("transparencyText")}
                </p>
              </CardContent>
            </Card>
            <Card className="interactive-card text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t("effectiveness")}
                </h3>
                <p className="text-slate-600">
                  {t("effectivenessText")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("impactOverYears")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("impactSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: t("childrenEducated"), icon: Target, color: "from-blue-500 to-blue-600" },
              { number: "50+", label: t("healthCamps"), icon: Award, color: "from-red-500 to-red-600" },
              { number: "1000+", label: t("treesPlanted"), icon: Eye, color: "from-green-500 to-green-600" },
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
    </div>
  )
}
