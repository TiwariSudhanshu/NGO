"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const { t } = useLanguage()

  const upcomingEvents = [
    {
      id: 1,
      title: "स्वास्थ्य जांच शिविर",
      date: "15 जनवरी 2024",
      time: "10:00 AM - 4:00 PM",
      location: "सामुदायिक केंद्र, भोपाल",
      description: "मुफ्त स्वास्थ्य जांच और दवाइयों का वितरण",
      image: "/placeholder.svg?height=200&width=300",
      category: "स्वास्थ्य",
      attendees: "200+ लोग",
    },
    {
      id: 2,
      title: "वृक्षारोपण अभियान",
      date: "22 जनवरी 2024",
      time: "7:00 AM - 11:00 AM",
      location: "भोज वेटलैंड, भोपाल",
      description: "500 पेड़ों का रोपण और पर्यावरण जागरूकता",
      image: "/placeholder.svg?height=200&width=300",
      category: "पर्यावरण",
      attendees: "100+ स्वयंसेवक",
    },
    {
      id: 3,
      title: "शिक्षा सामग्री वितरण",
      date: "28 जनवरी 2024",
      time: "11:00 AM - 2:00 PM",
      location: "सरकारी स्कूल, सीहोर",
      description: "जरूरतमंद बच्चों को किताबें और स्टेशनरी",
      image: "/placeholder.svg?height=200&width=300",
      category: "शिक्षा",
      attendees: "300+ बच्चे",
    },
  ]

  const recentNews = [
    {
      id: 1,
      title: "सेवा संस्थान को मिला राज्य स्तरीय पुरस्कार",
      date: "5 जनवरी 2024",
      summary: "सामाजिक सेवा के क्षेत्र में उत्कृष्ट कार्य के लिए मध्य प्रदेश सरकार द्वारा सम्मानित",
      image: "/placeholder.svg?height=150&width=250",
      category: "पुरस्कार",
    },
    {
      id: 2,
      title: "1000वां पेड़ लगाने का मील का पत्थर",
      date: "28 दिसंबर 2023",
      summary: "हरित भोपाल मिशन के तहत 1000 पेड़ लगाने का लक्ष्य पूरा किया गया",
      image: "/placeholder.svg?height=150&width=250",
      category: "पर्यावरण",
    },
    {
      id: 3,
      title: "नया शिक्षा केंद्र का उद्घाटन",
      date: "20 दिसंबर 2023",
      summary: "इंदौर में नए शिक्षा केंद्र की शुरुआत, 100 बच्चों को मिलेगी मुफ्त शिक्षा",
      image: "/placeholder.svg?height=150&width=250",
      category: "शिक्षा",
    },
    {
      id: 4,
      title: "स्वास्थ्य शिविर में 500 लोगों की जांच",
      date: "15 दिसंबर 2023",
      summary: "ग्रामीण क्षेत्र में आयोजित स्वास्थ्य शिविर में बड़ी संख्या में लोगों ने भाग लिया",
      image: "/placeholder.svg?height=150&width=250",
      category: "स्वास्थ्य",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "शिक्षा":
        return "bg-blue-100 text-blue-800"
      case "स्वास्थ्य":
        return "bg-red-100 text-red-800"
      case "पर्यावरण":
        return "bg-green-100 text-green-800"
      case "पुरस्कार":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
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
            {t("eventsTitle")}
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            हमारे आगामी कार्यक्रमों में भाग लें और हाल की गतिविधियों की जानकारी प्राप्त करें
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-gray-800 mb-8"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            {t("upcomingEvents")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>{event.attendees}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    भाग लें
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent News */}
        <div>
          <h2
            className="text-3xl font-bold text-gray-800 mb-8"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            {t("recentNews")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      width={250}
                      height={150}
                      className="w-full h-32 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(news.category)}>{news.category}</Badge>
                      <span
                        className="text-sm text-gray-500"
                        style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                      >
                        {news.date}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      {news.title}
                    </h3>
                    <p
                      className="text-gray-600 text-sm mb-4"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      {news.summary}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      पूरी खबर पढ़ें
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h2
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            हमारे कार्यक्रमों की जानकारी पाएं
          </h2>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
            नवीनतम कार्यक्रमों और समाचारों की जानकारी के लिए हमारे न्यूज़लेटर की सदस्यता लें
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="आपका ईमेल पता"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button
              className="bg-green-600 hover:bg-green-700"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              सदस्यता लें
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
