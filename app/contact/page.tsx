"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Star } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t("contactTitle")}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("contactSubtitle")}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t("quickResponse")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>{t("support247")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{t("friendlyTeam")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
<section className="section-padding bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card className="interactive-card">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {t("sendMessage")}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">
                    {t("fullName")} *
                  </Label>
                  <Input
                    id="name"
                    placeholder={t("fullName")}
                    required
                    className="mt-2 border-slate-300 focus:border-green-500 focus:ring-green-500 placeholder:text-slate-500 bg-white autofill:bg-white autofill:shadow-[0_0_0_30px_white_inset]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    {t("emailAddress")} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("emailAddress")}
                    required
                    className="mt-2 border-slate-300 focus:border-green-500 focus:ring-green-500 placeholder:text-slate-500 bg-white autofill:bg-white autofill:shadow-[0_0_0_30px_white_inset]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-slate-700 font-medium">
                    {t("phoneNumber")}
                  </Label>
                  <Input
                    id="phone"
                    placeholder={t("phoneNumber")}
                    className="mt-2 border-slate-300 focus:border-green-500 focus:ring-green-500 placeholder:text-slate-500 bg-white autofill:bg-white autofill:shadow-[0_0_0_30px_white_inset]"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-slate-700 font-medium">
                    {t("subject")} *
                  </Label>
                  <Input
                    id="subject"
                    placeholder={t("subject")}
                    required
                    className="mt-2 border-slate-300 focus:border-green-500 focus:ring-green-500 placeholder:text-slate-500 bg-white autofill:bg-white autofill:shadow-[0_0_0_30px_white_inset]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-700 font-medium">
                  {t("message")} *
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("writeMessage")}
                  rows={6}
                  required
                  className="mt-2 border-slate-300 focus:border-green-500 focus:ring-green-500 placeholder:text-slate-500 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="interest" className="text-slate-700 font-medium">
                  {t("areaOfInterest")}
                </Label>
                <select
                  id="interest"
                  className="w-full mt-2 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white"
                >
                  <option value="">{t("selectOption")}</option>
                  <option value="volunteer">{t("becomeVolunteer")}</option>
                  <option value="donate">{t("makeDonation")}</option>
                  <option value="partnership">{t("partnership")}</option>
                  <option value="education">{t("educationPrograms")}</option>
                  <option value="health">{t("healthPrograms")}</option>
                  <option value="environment">{t("environmentPrograms")}</option>
                  <option value="other">{t("other")}</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 interactive-button shadow-lg"
              >
                <Send className="mr-2 h-4 w-4" />
                {t("sendMessage")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        {/* Office Details */}
        <Card className="interactive-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t("officeInformation")}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-slate-900">{t("address")}</p>
                  <p className="text-slate-600 text-sm whitespace-pre-line">
                    {t("officeAddress")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-slate-900">{t("phone")}</p>
                  <p className="text-slate-600 text-sm">+91 98765 43210</p>
                  <p className="text-slate-600 text-sm">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-slate-900">{t("email")}</p>
                  <p className="text-slate-600 text-sm">info@sevasansthan.org</p>
                  <p className="text-slate-600 text-sm">contact@sevasansthan.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-slate-900">{t("officeHours")}</p>
                  <p className="text-slate-600 text-sm whitespace-pre-line">
                    {t("officeHoursText")}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="interactive-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t("quickActions")}</h3>
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 interactive-button">
                {t("becomeVolunteer")}
              </Button>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 interactive-button bg-white"
              >
                {t("makeDonation")}
              </Button>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 interactive-button bg-white"
              >
                {t("joinPrograms")}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="interactive-card bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-red-900 mb-4">{t("emergencyContact")}</h3>
            <p className="text-red-700 text-sm mb-3">{t("emergencyText")}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-red-800 font-medium">+91 98765 43212</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-red-800">emergency@sevasansthan.org</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>


      {/* Map Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("findUs")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("findUsSubtitle")}
            </p>
          </div>
          <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">{t("mapComingSoon")}</p>
              <p className="text-sm text-slate-500 mt-2">123, Arera Colony, Bhopal, MP</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
