"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Users, Heart, Award } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      id: 1,
      name: "राजेश शर्मा",
      position: "संस्थापक एवं अध्यक्ष",
      image: "/placeholder.svg?height=300&width=300",
      bio: "20 वर्षों का सामाजिक कार्य का अनुभव। शिक्षा के क्षेत्र में विशेष रुचि।",
      email: "rajesh@sevasansthan.org",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      name: "प्रिया गुप्ता",
      position: "कार्यकारी निदेशक",
      image: "/placeholder.svg?height=300&width=300",
      bio: "स्वास्थ्य सेवाओं में 15 वर्षों का अनुभव। परियोजना प्रबंधन में विशेषज्ञता।",
      email: "priya@sevasansthan.org",
      phone: "+91 98765 43211",
    },
    {
      id: 3,
      name: "अमित वर्मा",
      position: "शिक्षा कार्यक्रम प्रमुख",
      image: "/placeholder.svg?height=300&width=300",
      bio: "शिक्षा के क्षेत्र में 12 वर्षों का अनुभव। बच्चों के विकास में विशेष रुचि।",
      email: "amit@sevasansthan.org",
      phone: "+91 98765 43212",
    },
    {
      id: 4,
      name: "सुनीता पटेल",
      position: "स्वास्थ्य कार्यक्रम प्रमुख",
      image: "/placeholder.svg?height=300&width=300",
      bio: "सामुदायिक स्वास्थ्य में 10 वर्षों का अनुभव। महिला स्वास्थ्य में विशेषज्ञता।",
      email: "sunita@sevasansthan.org",
      phone: "+91 98765 43213",
    },
    {
      id: 5,
      name: "विकास जैन",
      position: "पर्यावरण कार्यक्रम प्रमुख",
      image: "/placeholder.svg?height=300&width=300",
      bio: "पर्यावरण संरक्षण में 8 वर्षों का अनुभव। वृक्षारोपण अभियान के नेता।",
      email: "vikas@sevasansthan.org",
      phone: "+91 98765 43214",
    },
    {
      id: 6,
      name: "अनीता सिंह",
      position: "स्वयंसेवक समन्वयक",
      image: "/placeholder.svg?height=300&width=300",
      bio: "स्वयंसेवी गतिविधियों का समन्वय। युवाओं को प्रेरित करने में विशेषज्ञता।",
      email: "anita@sevasansthan.org",
      phone: "+91 98765 43215",
    },
  ]

  const volunteers = [
    { name: "रोहित कुमार", field: "शिक्षा", experience: "3 वर्ष" },
    { name: "पूजा शर्मा", field: "स्वास्थ्य", experience: "2 वर्ष" },
    { name: "अरुण गुप्ता", field: "पर्यावरण", experience: "4 वर्ष" },
    { name: "मीरा पटेल", field: "महिला सशक्तिकरण", experience: "1 वर्ष" },
    { name: "संजय वर्मा", field: "आपदा राहत", experience: "5 वर्ष" },
    { name: "रीता जैन", field: "वृद्ध सेवा", experience: "2 वर्ष" },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            {t("teamTitle")}
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            हमारी टीम समर्पित व्यक्तियों से मिलकर बनी है जो समुदाय की सेवा के लिए प्रतिबद्ध हैं
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            मुख्य टीम
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                    {member.name}
                  </h3>
                  <p
                    className="text-green-600 font-medium mb-3"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                    {member.bio}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteers Section */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            {t("volunteers")}
          </h2>
          <div className="bg-green-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteers.map((volunteer, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                        {volunteer.name}
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                        {volunteer.field}
                      </p>
                      <p className="text-xs text-green-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                        अनुभव: {volunteer.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">15</div>
              <div className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                मुख्य टीम सदस्य
              </div>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
              <div className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                सक्रिय स्वयंसेवक
              </div>
            </div>
            <div>
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                वर्षों का संयुक्त अनुभव
              </div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="text-center bg-green-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
            {t("becomeVolunteer")}
          </h2>
          <p className="text-xl mb-8 text-green-100" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
            हमारे साथ जुड़ें और समुदाय की सेवा में अपना योगदान दें
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              स्वयंसेवक के रूप में जुड़ें
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-green-700 bg-transparent"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              और जानकारी प्राप्त करें
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
