"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from "lucide-react"
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
      description: "समुदाय के लिए मुफ्त स्वास्थ्य जांच और दवा वितरण",
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
      description: "500 पेड़ लगाना और पर्यावरण जागरूकता अभियान",
      image: "/placeholder.svg?height=200&width=300",
      category: "पर्यावरण",
      attendees: "100+ स्वयंसेवक",
    },
    {
      id: 3,
      title: "शैक्षिक सामग्री वितरण",
      date: "28 जनवरी 2024",
      time: "11:00 AM - 2:00 PM",
      location: "सरकारी स्कूल, सीहोर",
      description: "जरूरतमंद बच्चों को किताबें और स्टेशनरी प्रदान करना",
      image: "/placeholder.svg?height=200&width=300",
      category: "शिक्षा",
      attendees: "300+ बच्चे",
    },
  ]

  const recentNews = [
    {
      id: 1,
      title: "सेवा संस्थान को राज्य स्तरीय पुरस्कार मिला",
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
      title: "नए शिक्षा केंद्र का उद्घाटन",
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
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t("eventsTitle")}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("eventsSubtitle")}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t("freeEvents")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t("openToAll")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{t("communityFocused")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("upcomingEvents")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("upcomingEventsSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="interactive-card overflow-hidden">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 interactive-button"
                  >
                    {t("joinEvent")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("recentNews")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("recentNewsSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentNews.map((news) => (
              <Card key={news.id} className="interactive-card">
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
                      <Badge className={getCategoryColor(news.category)}>
                        {news.category}
                      </Badge>
                      <span className="text-sm text-slate-500">{news.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {news.summary}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 text-green-600 border-green-600 hover:bg-green-50 interactive-button bg-white"
                    >
                      {t("readMore")}
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Statistics */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("eventImpact")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("eventImpactSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: t("eventsOrganized"), icon: Calendar, color: "from-blue-500 to-blue-600" },
              { number: "2000+", label: t("peopleReached"), icon: Users, color: "from-red-500 to-red-600" },
              { number: "100+", label: t("activeVolunteers"), icon: Star, color: "from-green-500 to-green-600" },
              { number: "95%", label: t("satisfactionRate"), icon: CheckCircle, color: "from-purple-500 to-purple-600" },
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
          <h2 className="text-4xl font-bold mb-4">{t("joinNextEvent")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t("joinNextEventSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 interactive-button shadow-lg">
              {t("registerForEvents")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 interactive-button bg-transparent"
            >
              {t("becomeVolunteer")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
