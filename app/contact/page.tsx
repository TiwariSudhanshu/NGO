"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
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
            {t("contactTitle")}
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            हमसे जुड़ें और अपने सवाल, सुझाव या सहयोग के लिए संपर्क करें
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  संदेश भेजें
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                        पूरा नाम *
                      </Label>
                      <Input id="name" placeholder="आपका नाम" required />
                    </div>
                    <div>
                      <Label htmlFor="email" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                        ईमेल पता *
                      </Label>
                      <Input id="email" type="email" placeholder="आपका ईमेल" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                        फोन नंबर
                      </Label>
                      <Input id="phone" placeholder="आपका फोन नंबर" />
                    </div>
                    <div>
                      <Label htmlFor="subject" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                        विषय *
                      </Label>
                      <Input id="subject" placeholder="संदेश का विषय" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      संदेश *
                    </Label>
                    <Textarea id="message" placeholder="अपना संदेश यहाँ लिखें..." rows={6} required />
                  </div>

                  <div>
                    <Label htmlFor="interest" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      आप किस क्षेत्र में रुचि रखते हैं?
                    </Label>
                    <select
                      id="interest"
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">चुनें</option>
                      <option value="volunteer">स्वयंसेवक बनना</option>
                      <option value="donate">दान करना</option>
                      <option value="partnership">साझेदारी</option>
                      <option value="education">शिक्षा कार्यक्रम</option>
                      <option value="health">स्वास्थ्य कार्यक्रम</option>
                      <option value="environment">पर्यावरण कार्यक्रम</option>
                      <option value="other">अन्य</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    संदेश भेजें
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Office Details */}
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>कार्यालय की जानकारी</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      {t("address")}
                    </p>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      सेवा संस्थान
                      <br />
                      123, अरेरा कॉलोनी
                      <br />
                      भोपाल, मध्य प्रदेश - 462016
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      {t("phone")}
                    </p>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                    <p className="text-gray-600 text-sm">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      {t("email")}
                    </p>
                    <p className="text-gray-600 text-sm">info@sevasansthan.org</p>
                    <p className="text-gray-600 text-sm">contact@sevasansthan.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      कार्यालय समय
                    </p>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      सोमवार - शुक्रवार: 9:00 AM - 6:00 PM
                      <br />
                      शनिवार: 9:00 AM - 2:00 PM
                      <br />
                      रविवार: बंद
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>त्वरित कार्य</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  स्वयंसेवक बनें
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  दान करें
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  न्यूज़लेटर सदस्यता
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  आपातकालीन संपर्क
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  आपातकालीन स्थिति में 24/7 उपलब्ध
                </p>
                <p className="font-bold text-red-800">+91 98765 43200</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>हमारा स्थान</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>भोपाल, मध्य प्रदेश का नक्शा</p>
                  <p className="text-sm" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                    (इंटरैक्टिव मैप यहाँ होगा)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  मैं स्वयंसेवक कैसे बन सकता हूँ?
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  आप हमारे संपर्क फॉर्म के माध्यम से या सीधे कार्यालय में आकर स्वयंसेवक बन सकते हैं।
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  दान की रसीद कैसे मिलेगी?
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  दान के बाद आपको ईमेल और डाक के माध्यम से 80G प्रमाणपत्र भेजा जाएगा।
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  क्या मैं किसी विशिष्ट परियोजना के लिए दान कर सकता हूँ?
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  हाँ, आप शिक्षा, स्वास्थ्य या पर्यावरण किसी भी विशिष्ट क्षेत्र के लिए दान कर सकते हैं।
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  कार्यक्रमों में भाग कैसे लें?
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                  हमारे इवेंट्स पेज पर जाकर या फोन करके आप किसी भी कार्यक्रम में भाग ले सकते हैं।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
