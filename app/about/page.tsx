"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            {t("aboutTitle")}
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            सेवा संस्थान की स्थापना 2015 में भोपाल में हुई थी। हमारा उद्देश्य समुदाय की सेवा करना और जरूरतमंद लोगों की मदद करना है।
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About NGO"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2
              className="text-2xl font-semibold text-gray-800"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              हमारी कहानी
            </h2>
            <p className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              सेवा संस्थान की शुरुआत कुछ समाजसेवी व्यक्तियों के एक छोटे से समूह से हुई थी, जिनका सपना था कि वे अपने समुदाय में सकारात्मक बदलाव
              लाएं। आज हमारे साथ 100 से अधिक स्वयंसेवक जुड़े हुए हैं।
            </p>
            <p className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              पिछले 9 वर्षों में हमने शिक्षा, स्वास्थ्य, और पर्यावरण के क्षेत्र में अनेक परियोजनाओं को सफलतापूर्वक पूरा किया है। हमारा मुख्य
              कार्यालय भोपाल में स्थित है और हम मध्य प्रदेश के विभिन्न जिलों में काम करते हैं।
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                {t("vision")}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                एक ऐसा समाज बनाना जहाँ हर व्यक्ति को शिक्षा, स्वास्थ्य और सम्मानजनक जीवन जीने का अधिकार हो। हमारा सपना है कि हम एक
                न्यायसंगत और समान समाज का निर्माण करें।
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                {t("mission")}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                शिक्षा, स्वास्थ्य और पर्यावरण के क्षेत्र में काम करके समुदाय के जीवन स्तर को बेहतर बनाना। हम गुणवत्तापूर्ण सेवाएं प्रदान करके
                लोगों को आत्मनिर्भर बनाने में मदद करते हैं।
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            हमारे मूल्य
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                सामुदायिक सेवा
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                समुदाय की भलाई हमारी प्राथमिकता है
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                पारदर्शिता
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                हमारे सभी कार्य पारदर्शी और जवाबदेह हैं
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                प्रभावशीलता
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                हमारे कार्यों का वास्तविक प्रभाव होता है
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
