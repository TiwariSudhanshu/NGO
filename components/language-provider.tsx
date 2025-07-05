"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "hi" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  hi: {
    // Navigation
    home: "मुखपृष्ठ",
    about: "हमारे बारे में",
    projects: "परियोजनाएँ",
    team: "हमारी टीम",
    donate: "दान करें",
    events: "कार्यक्रम और समाचार",
    contact: "संपर्क करें",

    // Home Page
    heroTitle: "समुदाय की सेवा में समर्पित",
    heroSubtitle: "भोपाल स्थित हमारी संस्था शिक्षा, स्वास्थ्य और पर्यावरण के क्षेत्र में निरंतर कार्य कर रही है",
    ourMission: "हमारे उद्देश्य",
    learnMore: "और जानें",
    joinUs: "हमसे जुड़ें",

    // About Page
    aboutTitle: "हमारे बारे में",
    aboutSubtitle: "सेवा संस्थान की स्थापना 2015 में भोपाल में हुई थी। हमारा उद्देश्य समुदाय की सेवा करना और जरूरतमंद लोगों की मदद करना है।",
    ourStory: "हमारी कहानी",
    storyText1: "सेवा संस्थान की शुरुआत कुछ समाजसेवी व्यक्तियों के एक छोटे से समूह से हुई थी, जिनका सपना था कि वे अपने समुदाय में सकारात्मक बदलाव लाएं। आज हमारे साथ 100 से अधिक स्वयंसेवक जुड़े हुए हैं।",
    storyText2: "पिछले 9 वर्षों में हमने शिक्षा, स्वास्थ्य, और पर्यावरण के क्षेत्र में अनेक परियोजनाओं को सफलतापूर्वक पूरा किया है। हमारा मुख्य कार्यालय भोपाल में स्थित है और हम मध्य प्रदेश के विभिन्न जिलों में काम करते हैं।",
    activeVolunteers: "सक्रिय स्वयंसेवक",
    vision: "हमारा दृष्टिकोण",
    visionText: "एक ऐसा समाज बनाना जहाँ हर व्यक्ति को शिक्षा, स्वास्थ्य और सम्मानजनक जीवन जीने का अधिकार हो। हमारा सपना है कि हम एक न्यायसंगत और समान समाज का निर्माण करें।",
    mission: "हमारा मिशन",
    missionText: "शिक्षा, स्वास्थ्य और पर्यावरण के क्षेत्र में काम करके समुदाय के जीवन स्तर को बेहतर बनाना। हम गुणवत्तापूर्ण सेवाएं प्रदान करके लोगों को आत्मनिर्भर बनाने में मदद करते हैं।",
    ourValues: "हमारे मूल्य",
    valuesSubtitle: "हमारे कार्य और संबंधों को निर्देशित करने वाले सिद्धांत",
    communityService: "सामुदायिक सेवा",
    communityServiceText: "समुदाय की भलाई हमारी प्राथमिकता है। हम समर्पण और करुणा के साथ सेवा करते हैं।",
    transparency: "पारदर्शिता",
    transparencyText: "हमारे सभी कार्य पारदर्शी और जवाबदेह हैं। हम खुला संवाद बनाए रखते हैं।",
    effectiveness: "प्रभावशीलता",
    effectivenessText: "हमारे कार्यों का वास्तविक प्रभाव होता है। हम अपने परिणामों को मापते और सुधारते हैं।",
    impactOverYears: "9 वर्षों में हमारा प्रभाव",
    impactSubtitle: "समुदाय सेवा के प्रति हमारी प्रतिबद्धता को दर्शाने वाले आंकड़े",
    childrenEducated: "बच्चों को शिक्षित किया",
    healthCamps: "स्वास्थ्य शिविर",
    treesPlanted: "पेड़ लगाए",
    volunteers: "स्वयंसेवक",

    // Contact Page
    contactTitle: "संपर्क करें",
    contactSubtitle: "हमसे जुड़ें और अपने सवाल, सुझाव या सहयोग के लिए संपर्क करें",
    sendMessage: "संदेश भेजें",
    fullName: "पूरा नाम",
    emailAddress: "ईमेल पता",
    phoneNumber: "फोन नंबर",
    subject: "विषय",
    message: "संदेश",
    writeMessage: "अपना संदेश यहाँ लिखें...",
    areaOfInterest: "आप किस क्षेत्र में रुचि रखते हैं?",
    selectOption: "एक विकल्प चुनें",
    becomeVolunteer: "स्वयंसेवक बनें",
    makeDonation: "दान करें",
    partnership: "साझेदारी",
    educationPrograms: "शिक्षा कार्यक्रम",
    healthPrograms: "स्वास्थ्य कार्यक्रम",
    environmentPrograms: "पर्यावरण कार्यक्रम",
    other: "अन्य",
    officeInformation: "कार्यालय की जानकारी",
    address: "पता",
    officeAddress: "सेवा संस्थान\n123, अरेरा कॉलोनी\nभोपाल, मध्य प्रदेश - 462016",
    phone: "फोन",
    email: "ईमेल",
    officeHours: "कार्यालय समय",
    officeHoursText: "सोमवार - शुक्रवार: 9:00 AM - 6:00 PM\nशनिवार: 9:00 AM - 2:00 PM\nरविवार: बंद",
    quickActions: "त्वरित कार्य",
    joinPrograms: "हमारे कार्यक्रमों में शामिल हों",
    emergencyContact: "आपातकालीन संपर्क",
    emergencyText: "जरूरी मामलों या आपदा राहत समन्वय के लिए",
    findUs: "हमें खोजें",
    findUsSubtitle: "हमारे कार्यालय में जाएं या ऊपर दिए गए किसी भी संपर्क तरीके से हमसे संपर्क करें",
    mapComingSoon: "इंटरैक्टिव मैप जल्द आ रहा है",

    // Events Page
    eventsTitle: "कार्यक्रम और समाचार",
    eventsSubtitle: "हमारे आगामी कार्यक्रमों में भाग लें और हाल की गतिविधियों की जानकारी प्राप्त करें",
    upcomingEvents: "आगामी कार्यक्रम",
    upcomingEventsSubtitle: "इन सामुदायिक केंद्रित कार्यक्रमों में हमसे जुड़ें और अंतर पैदा करें",
    recentNews: "हाल की खबरें और अपडेट",
    recentNewsSubtitle: "हमारी नवीनतम उपलब्धियों और सामुदायिक प्रभाव के बारे में जानकारी रखें",
    joinEvent: "कार्यक्रम में शामिल हों",
    readMore: "और पढ़ें",
    eventImpact: "कार्यक्रम प्रभाव",
    eventImpactSubtitle: "हमारे कार्यक्रमों ने समुदाय में महत्वपूर्ण सकारात्मक प्रभाव पैदा किया है",
    eventsOrganized: "कार्यक्रम आयोजित",
    peopleReached: "लोगों तक पहुंचे",
    satisfactionRate: "संतुष्टि दर",
    joinNextEvent: "हमारे अगले कार्यक्रम में शामिल हों",
    joinNextEventSubtitle: "हमारे सामुदायिक पहलों का हिस्सा बनें और हमें सकारात्मक बदलाव लाने में मदद करें",
    registerForEvents: "कार्यक्रमों के लिए पंजीकरण करें",

    // Projects Page
    projectsTitle: "हमारी परियोजनाएँ",
    projectsSubtitle: "हमारी विभिन्न परियोजनाओं के माध्यम से हम समुदाय के जीवन में सकारात्मक बदलाव लाने का प्रयास कर रहे हैं",
    projectCategories: "परियोजना श्रेणियां",
    projectCategoriesSubtitle: "श्रेणी के अनुसार हमारी परियोजनाओं का अन्वेषण करें और वह क्षेत्र खोजें जो आपको सबसे अधिक आकर्षित करता है",
    allProjects: "सभी परियोजनाएँ",
    education: "शिक्षा",
    health: "स्वास्थ्य",
    environment: "पर्यावरण",
    empowerment: "सशक्तिकरण",
    elderlyCare: "वृद्ध सेवा",
    disasterRelief: "आपदा राहत",
    projectImpact: "परियोजना प्रभाव",
    projectImpactSubtitle: "समुदाय विकास के प्रति हमारी प्रतिबद्धता को दर्शाने वाले आंकड़े",
    activeProjects: "सक्रिय परियोजनाएँ",
    peopleServed: "लोगों की सेवा की",
    supportProjects: "हमारी परियोजनाओं का समर्थन करें",
    supportProjectsSubtitle: "आपका योगदान हमें अपनी परियोजनाओं का विस्तार करने और जरूरतमंद अधिक लोगों तक पहुंचने में मदद कर सकता है",
    partnerWithUs: "हमारे साथ साझेदारी करें",

    // Team Page
    teamTitle: "हमारी टीम",
    teamSubtitle: "हमारी टीम समर्पित व्यक्तियों से मिलकर बनी है जो समुदाय की सेवा के लिए प्रतिबद्ध हैं",
    coreTeam: "मुख्य टीम",
    coreTeamSubtitle: "हमारे मिशन और दृष्टि को आगे बढ़ाने वाली नेतृत्व टीम से मिलें",
    ourVolunteers: "हमारे स्वयंसेवक",
    volunteersSubtitle: "हमारे मिशन को संभव बनाने वाले समर्पित स्वयंसेवक",
    teamImpact: "टीम प्रभाव",
    teamImpactSubtitle: "हमारी टीम की समर्पण और प्रभाव को दर्शाने वाले आंकड़े",
    coreTeamMembers: "मुख्य टीम सदस्य",
    yearsOfExperience: "वर्षों का अनुभव",
    joinOurTeam: "हमारी टीम में शामिल हों",
    joinTeamSubtitle: "समुदाय में सकारात्मक बदलाव लाने के हमारे मिशन का हिस्सा बनें",
    supportOurWork: "हमारे कार्य का समर्थन करें",
    supportWorkText: "आपके दान हमें अपना कार्य जारी रखने और जरूरतमंद अधिक लोगों तक पहुंचने के लिए अपने कार्यक्रमों का विस्तार करने में मदद करते हैं।",
    applyNow: "अभी आवेदन करें",
    readyToMakeDifference: "अंतर पैदा करने के लिए तैयार हैं?",
    readySubtitle: "सामुदायिक विकास की दिशा में काम कर रहे समर्पित व्यक्तियों की हमारी टीम में शामिल हों",
    joinAsVolunteer: "स्वयंसेवक के रूप में शामिल हों",
    contactUs: "हमसे संपर्क करें",

    // PWA Installation
    installApp: "ऐप इंस्टॉल करें",
    installAppDescription: "सेवा संस्थान ऐप को अपने फोन पर इंस्टॉल करें और तेजी से एक्सेस करें",
    install: "इंस्टॉल करें",

    // Common
    registeredNGO: "पंजीकृत एनजीओ",
    taxBenefits: "80G कर लाभ",
    yearsTrusted: "9+ वर्ष विश्वसनीय",
    quickResponse: "त्वरित प्रतिक्रिया",
    support247: "24/7 समर्थन",
    friendlyTeam: "मित्रवत टीम",
    freeEvents: "मुफ्त कार्यक्रम",
    openToAll: "सभी के लिए खुला",
    communityFocused: "समुदाय केंद्रित",
    experiencedTeam: "अनुभवी टीम",
    dedicatedVolunteers: "समर्पित स्वयंसेवक",
    measurableImpact: "मापने योग्य प्रभाव",
    communityDriven: "समुदाय संचालित",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    projects: "Projects",
    team: "Our Team",
    donate: "Donate",
    events: "Events & News",
    contact: "Contact",

    // Home Page
    heroTitle: "Dedicated to Community Service",
    heroSubtitle: "Our Bhopal-based organization works continuously in education, health, and environment",
    ourMission: "Our Mission",
    learnMore: "Learn More",
    joinUs: "Join Us",

    // About Page
    aboutTitle: "About Us",
    aboutSubtitle: "Seva Sansthan was established in 2015 in Bhopal with a mission to serve the community and help those in need through education, healthcare, and environmental conservation.",
    ourStory: "Our Story",
    storyText1: "Seva Sansthan began with a small group of social workers who dreamed of bringing positive change to their community. Today, we have over 100 dedicated volunteers working with us.",
    storyText2: "Over the past 9 years, we have successfully completed numerous projects in education, healthcare, and environment. Our main office is located in Bhopal and we work across various districts of Madhya Pradesh.",
    activeVolunteers: "Active Volunteers",
    vision: "Our Vision",
    visionText: "To create a society where every individual has the right to education, healthcare, and a dignified life. We dream of building a just and equitable society.",
    mission: "Our Mission",
    missionText: "To improve the quality of life in communities by working in education, healthcare, and environment. We help people become self-reliant by providing quality services.",
    ourValues: "Our Core Values",
    valuesSubtitle: "The principles that guide our work and relationships",
    communityService: "Community Service",
    communityServiceText: "Community welfare is our top priority. We serve with dedication and compassion.",
    transparency: "Transparency",
    transparencyText: "All our work is transparent and accountable. We maintain open communication.",
    effectiveness: "Effectiveness",
    effectivenessText: "Our actions create real impact. We measure and improve our outcomes.",
    impactOverYears: "Our Impact Over 9 Years",
    impactSubtitle: "The numbers that reflect our commitment to community service",
    childrenEducated: "Children Educated",
    healthCamps: "Health Camps",
    treesPlanted: "Trees Planted",
    volunteers: "Volunteers",

    // Contact Page
    contactTitle: "Contact Us",
    contactSubtitle: "Connect with us for questions, suggestions, or collaboration. We'd love to hear from you and discuss how we can work together.",
    sendMessage: "Send us a Message",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    subject: "Subject",
    message: "Message",
    writeMessage: "Write your message here...",
    areaOfInterest: "What area are you interested in?",
    selectOption: "Select an option",
    becomeVolunteer: "Become a Volunteer",
    makeDonation: "Make a Donation",
    partnership: "Partnership",
    educationPrograms: "Education Programs",
    healthPrograms: "Health Programs",
    environmentPrograms: "Environment Programs",
    other: "Other",
    officeInformation: "Office Information",
    address: "Address",
    officeAddress: "Seva Sansthan\n123, Arera Colony\nBhopal, Madhya Pradesh - 462016",
    phone: "Phone",
    email: "Email",
    officeHours: "Office Hours",
    officeHoursText: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
    quickActions: "Quick Actions",
    joinPrograms: "Join Our Programs",
    emergencyContact: "Emergency Contact",
    emergencyText: "For urgent matters or disaster relief coordination",
    findUs: "Find Us",
    findUsSubtitle: "Visit our office or reach out to us through any of the contact methods above",
    mapComingSoon: "Interactive Map Coming Soon",

    // Events Page
    eventsTitle: "Events & News",
    eventsSubtitle: "Join our upcoming programs and stay updated with our latest activities and achievements",
    upcomingEvents: "Upcoming Events",
    upcomingEventsSubtitle: "Join us in these community-focused events and make a difference",
    recentNews: "Recent News & Updates",
    recentNewsSubtitle: "Stay informed about our latest achievements and community impact",
    joinEvent: "Join Event",
    readMore: "Read More",
    eventImpact: "Event Impact",
    eventImpactSubtitle: "Our events have created significant positive impact in the community",
    eventsOrganized: "Events Organized",
    peopleReached: "People Reached",
    satisfactionRate: "Satisfaction Rate",
    joinNextEvent: "Join Our Next Event",
    joinNextEventSubtitle: "Be part of our community initiatives and help us create positive change",
    registerForEvents: "Register for Events",

    // Projects Page
    projectsTitle: "Our Projects",
    projectsSubtitle: "Through our various projects, we strive to bring positive change in the community's life",
    projectCategories: "Project Categories",
    projectCategoriesSubtitle: "Explore our projects by category and find the area that interests you most",
    allProjects: "All Projects",
    education: "Education",
    health: "Health",
    environment: "Environment",
    empowerment: "Empowerment",
    elderlyCare: "Elderly Care",
    disasterRelief: "Disaster Relief",
    projectImpact: "Project Impact",
    projectImpactSubtitle: "The numbers that reflect our commitment to community development",
    activeProjects: "Active Projects",
    peopleServed: "People Served",
    supportProjects: "Support Our Projects",
    supportProjectsSubtitle: "Your contribution can help us expand our projects and reach more people in need",
    partnerWithUs: "Partner With Us",

    // Team Page
    teamTitle: "Our Team",
    teamSubtitle: "Our team consists of dedicated individuals who are committed to serving the community",
    coreTeam: "Core Team",
    coreTeamSubtitle: "Meet the leadership team that drives our mission and vision",
    ourVolunteers: "Our Volunteers",
    volunteersSubtitle: "Dedicated volunteers who make our mission possible",
    teamImpact: "Team Impact",
    teamImpactSubtitle: "The numbers that reflect our team's dedication and impact",
    coreTeamMembers: "Core Team Members",
    yearsOfExperience: "Years of Experience",
    joinOurTeam: "Join Our Team",
    joinTeamSubtitle: "Be part of our mission to create positive change in the community",
    supportOurWork: "Support Our Work",
    supportWorkText: "Your donations help us continue our work and expand our programs to reach more people in need.",
    applyNow: "Apply Now",
    readyToMakeDifference: "Ready to Make a Difference?",
    readySubtitle: "Join our team of dedicated individuals working towards community development",
    joinAsVolunteer: "Join as Volunteer",
    contactUs: "Contact Us",

    // PWA Installation
    installApp: "Install App",
    installAppDescription: "Install Seva Sansthan app on your phone for quick access",
    install: "Install",

    // Common
    registeredNGO: "Registered NGO",
    taxBenefits: "80G Tax Benefits",
    yearsTrusted: "9+ Years Trusted",
    quickResponse: "Quick Response",
    support247: "24/7 Support",
    friendlyTeam: "Friendly Team",
    freeEvents: "Free Events",
    openToAll: "Open to All",
    communityFocused: "Community Focused",
    experiencedTeam: "Experienced Team",
    dedicatedVolunteers: "Dedicated Volunteers",
    measurableImpact: "Measurable Impact",
    communityDriven: "Community Driven",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["hi"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
