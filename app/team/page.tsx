"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Users, Heart, Award, CheckCircle, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      id: 1,
      name: "राजेश शर्मा",
      position: "संस्थापक और अध्यक्ष",
      image: "/placeholder.svg?height=300&width=300",
      bio: "सामाजिक कार्य में 20 वर्षों का अनुभव। शिक्षा क्षेत्र में विशेष रुचि।",
      email: "rajesh@sevasansthan.org",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      name: "प्रिया गुप्ता",
      position: "कार्यकारी निदेशक",
      image: "/placeholder.svg?height=300&width=300",
      bio: "स्वास्थ्य और महिला सशक्तिकरण कार्यक्रमों में विशेषज्ञता।",
      email: "priya@sevasansthan.org",
      phone: "+91 98765 43211",
    },
    {
      id: 3,
      name: "अमित कुमार",
      position: "परियोजना प्रबंधक",
      image: "/placeholder.svg?height=300&width=300",
      bio: "पर्यावरण संरक्षण और सामुदायिक विकास में 8 वर्षों का अनुभव।",
      email: "amit@sevasansthan.org",
      phone: "+91 98765 43212",
    },
    {
      id: 4,
      name: "सुनीता वर्मा",
      position: "शिक्षा समन्वयक",
      image: "/placeholder.svg?height=300&width=300",
      bio: "बाल शिक्षा और कौशल विकास कार्यक्रमों में विशेषज्ञ।",
      email: "sunita@sevasansthan.org",
      phone: "+91 98765 43213",
    },
    {
      id: 5,
      name: "Vikas Jain",
      position: "Environment Program Head",
      image: "/placeholder.svg?height=300&width=300",
      bio: "8 years of experience in environmental conservation. Leader of tree plantation drives.",
      email: "vikas@sevasansthan.org",
      phone: "+91 98765 43214",
    },
    {
      id: 6,
      name: "Anita Singh",
      position: "Volunteer Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Coordinates volunteer activities. Expert in motivating youth participation.",
      email: "anita@sevasansthan.org",
      phone: "+91 98765 43215",
    },
  ]

  const volunteers = [
    {
      id: 1,
      name: "मोहन सिंह",
      area: "स्वास्थ्य शिविर",
      experience: "5 वर्ष",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "लक्ष्मी देवी",
      area: "शिक्षा कार्यक्रम",
      experience: "3 वर्ष",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "रमेश पटेल",
      area: "पर्यावरण संरक्षण",
      experience: "4 वर्ष",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "गीता यादव",
      area: "महिला सशक्तिकरण",
      experience: "6 वर्ष",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Sanjay Verma",
      field: "Disaster Relief",
      experience: "5 years",
    },
    {
      id: 6,
      name: "Rita Jain",
      field: "Elderly Care",
      experience: "2 years",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t("teamTitle")}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("teamSubtitle")}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t("experiencedTeam")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t("dedicatedVolunteers")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{t("communityDriven")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("coreTeam")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("coreTeamSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="interactive-card text-center">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-100 p-2 rounded-full">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("ourVolunteers")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("volunteersSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteers.map((volunteer) => (
              <Card key={volunteer.id} className="interactive-card text-center">
                <CardContent className="p-6">
                  <Image
                    src={volunteer.image || "/placeholder.svg"}
                    alt={volunteer.name}
                    width={200}
                    height={200}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {volunteer.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">
                    {volunteer.area}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {volunteer.experience} {t("yearsOfExperience")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Impact */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("teamImpact")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("teamImpactSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4", label: t("coreTeamMembers"), icon: Users, color: "from-blue-500 to-blue-600" },
              { number: "100+", label: t("volunteers"), icon: Heart, color: "from-red-500 to-red-600" },
              { number: "50+", label: t("yearsOfExperience"), icon: Award, color: "from-green-500 to-green-600" },
              { number: "95%", label: t("satisfactionRate"), icon: Star, color: "from-purple-500 to-purple-600" },
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

      {/* Join Our Team */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("joinOurTeam")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("joinTeamSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="interactive-card">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("supportOurWork")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("supportWorkText")}
                </p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 interactive-button"
                >
                  {t("makeDonation")}
                </Button>
              </CardContent>
            </Card>

            <Card className="interactive-card">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t("readyToMakeDifference")}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t("readySubtitle")}
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 interactive-button"
                >
                  {t("applyNow")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t("readyToMakeDifference")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t("readySubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 interactive-button shadow-lg">
              {t("joinAsVolunteer")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 interactive-button bg-transparent"
            >
              {t("contactUs")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
