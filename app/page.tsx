"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Heart,
  Leaf,
  ArrowRight,
  Users,
  Award,
  Target,
  CheckCircle,
  Calendar,
  MapPin,
  Star,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Dedicated to Community Service & Social Change
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Seva Sansthan is a committed NGO based in Bhopal, working tirelessly in education, healthcare, and
                environmental conservation to create lasting positive impact in our communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/about">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 interactive-button shadow-lg">
                    Learn About Our Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 interactive-button bg-white shadow-lg"
                  >
                    Support Our Cause
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Registered NGO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>80G Tax Benefits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>9+ Years Trusted</span>
                </div>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Community Service"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl interactive-card">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-3xl text-slate-900">9+</div>
                      <div className="text-slate-600">Years of Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Over the years, we've made significant contributions to our community through various initiatives and
              programs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Children Educated", icon: BookOpen, color: "from-blue-500 to-blue-600" },
              { number: "50+", label: "Health Camps", icon: Heart, color: "from-red-500 to-red-600" },
              { number: "1000+", label: "Trees Planted", icon: Leaf, color: "from-green-500 to-green-600" },
              { number: "100+", label: "Volunteers", icon: Users, color: "from-purple-500 to-purple-600" },
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

      {/* Our Focus Areas */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Focus Areas</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We work across multiple sectors to address the most pressing needs of our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Education",
                description:
                  "Providing quality education and learning opportunities to underprivileged children, including free books, uniforms, and digital literacy programs.",
                image: "/placeholder.svg?height=200&width=300",
                stats: "500+ children supported",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Heart,
                title: "Healthcare",
                description:
                  "Organizing free health camps, providing medical assistance, and promoting health awareness in rural and urban communities.",
                image: "/placeholder.svg?height=200&width=300",
                stats: "2000+ people served",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Leaf,
                title: "Environment",
                description:
                  "Environmental conservation through tree plantation drives, waste management programs, and sustainable development initiatives.",
                image: "/placeholder.svg?height=200&width=300",
                stats: "1000+ trees planted",
                color: "from-green-500 to-green-600",
              },
            ].map((area, index) => (
              <Card key={index} className="interactive-card overflow-hidden">
                <div className="relative">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                    <area.icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-600">{area.stats}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50 interactive-button bg-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent initiatives that are making a difference in the community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Digital Learning Center",
                location: "Bhopal, MP",
                date: "December 2023",
                description:
                  "Established a new digital learning center providing computer education to 100+ children from underprivileged families.",
                image: "/placeholder.svg?height=250&width=400",
                category: "Education",
              },
              {
                title: "Community Health Drive",
                location: "Rural Bhopal",
                date: "November 2023",
                description:
                  "Conducted comprehensive health checkups for 500+ villagers, providing free medicines and health awareness sessions.",
                image: "/placeholder.svg?height=250&width=400",
                category: "Healthcare",
              },
            ].map((project, index) => (
              <Card key={index} className="professional-card overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects">
              <Button className="bg-green-600 hover:bg-green-700 professional-button">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Support Seva Sansthan?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Proven Track Record",
                    description:
                      "9+ years of consistent community service with measurable impact and transparent operations.",
                  },
                  {
                    icon: Target,
                    title: "Focused Approach",
                    description:
                      "Strategic focus on education, healthcare, and environment for maximum community benefit.",
                  },
                  {
                    icon: Users,
                    title: "Community-Driven",
                    description:
                      "Local volunteers and community members actively participate in planning and execution.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Full Transparency",
                    description:
                      "Regular reports, financial transparency, and open communication with all stakeholders.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Team at work"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="font-bold text-2xl text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Transparent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your support can help us reach more people and create lasting positive change in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 interactive-button shadow-lg">
                Donate Now
              </Button>
            </Link>
            <Link href="/team">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 interactive-button bg-transparent"
              >
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
