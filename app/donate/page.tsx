"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, CreditCard, Smartphone, Building, Check, X, Loader2, Shield, Award, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function DonatePage() {
  const { t } = useLanguage()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pan: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [step, setStep] = useState(1)

  const donationAmounts = [
    { amount: 500, description: "Provides school supplies for 1 child for a month" },
    { amount: 1000, description: "Supports health checkup for 5 people" },
    { amount: 2500, description: "Plants and maintains 25 trees" },
    { amount: 5000, description: "Funds education for 1 child for 3 months" },
    { amount: 10000, description: "Organizes a complete health camp" },
    { amount: 25000, description: "Establishes a small learning center" },
  ]

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const getCurrentAmount = () => {
    return selectedAmount || Number.parseInt(customAmount) || 0
  }

  const handleDonorInfoChange = (field: string, value: string) => {
    setDonorInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    if (!getCurrentAmount() || !donorInfo.name || !donorInfo.email || !paymentMethod) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }

    setIsProcessing(true)

    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false)
        setStep(1)
        setSelectedAmount(null)
        setCustomAmount("")
        setDonorInfo({ name: "", email: "", phone: "", address: "", pan: "" })
        setPaymentMethod("")
      }, 3000)
    }, 2000)
  }

  const progressPercentage = (step / 3) * 100

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Make a Donation</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your contribution helps us create lasting positive change in our community. Every donation makes a
            difference.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-slate-600">
              <span className={step >= 1 ? "text-green-600 font-medium" : ""}>Amount</span>
              <span className={step >= 2 ? "text-green-600 font-medium" : ""}>Details</span>
              <span className={step >= 3 ? "text-green-600 font-medium" : ""}>Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Donation Form */}
          <div className="lg:col-span-2">
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span>Donation Form</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Step 1: Amount Selection */}
                {step === 1 && (
                  <div className="animate-fadeInUp">
                    <h3 className="text-lg font-semibold mb-6">Choose Donation Amount</h3>

                    {/* Preset Amounts */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {donationAmounts.map((donation) => (
                        <Card
                          key={donation.amount}
                          className={`cursor-pointer transition-all duration-300 ${
                            selectedAmount === donation.amount
                              ? "border-green-500 bg-green-50 shadow-lg scale-105"
                              : "border-gray-200 hover:border-green-300 hover:shadow-md"
                          }`}
                          onClick={() => handleAmountSelect(donation.amount)}
                        >
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-green-600 mb-2">₹{donation.amount}</div>
                            <p className="text-sm text-slate-600">{donation.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div>
                      <Label htmlFor="custom-amount" className="text-base font-medium">
                        Or enter custom amount (₹)
                      </Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="mt-2 form-input"
                        min="100"
                      />
                    </div>

                    <Button
                      onClick={() => setStep(2)}
                      disabled={!getCurrentAmount()}
                      className="w-full bg-green-600 hover:bg-green-700 interactive-button"
                      size="lg"
                    >
                      Continue with ₹{getCurrentAmount()}
                    </Button>
                  </div>
                )}

                {/* Step 2: Donor Information */}
                {step === 2 && (
                  <div className="animate-fadeInUp">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">Donor Information</h3>
                      <Button variant="outline" onClick={() => setStep(1)} size="sm">
                        Back
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="donor-name">Full Name *</Label>
                        <Input
                          id="donor-name"
                          placeholder="Your full name"
                          value={donorInfo.name}
                          onChange={(e) => handleDonorInfoChange("name", e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="donor-email">Email Address *</Label>
                        <Input
                          id="donor-email"
                          type="email"
                          placeholder="your@email.com"
                          value={donorInfo.email}
                          onChange={(e) => handleDonorInfoChange("email", e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="donor-phone">Phone Number</Label>
                        <Input
                          id="donor-phone"
                          placeholder="+91 98765 43210"
                          value={donorInfo.phone}
                          onChange={(e) => handleDonorInfoChange("phone", e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="donor-pan">PAN Number (for 80G certificate)</Label>
                        <Input
                          id="donor-pan"
                          placeholder="ABCDE1234F"
                          value={donorInfo.pan}
                          onChange={(e) => handleDonorInfoChange("pan", e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="donor-address">Address</Label>
                      <Textarea
                        id="donor-address"
                        placeholder="Your complete address"
                        value={donorInfo.address}
                        onChange={(e) => handleDonorInfoChange("address", e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <Button
                      onClick={() => setStep(3)}
                      disabled={!donorInfo.name || !donorInfo.email}
                      className="w-full bg-green-600 hover:bg-green-700 interactive-button"
                      size="lg"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                )}

                {/* Step 3: Payment Method */}
                {step === 3 && (
                  <div className="animate-fadeInUp">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">Payment Method</h3>
                      <Button variant="outline" onClick={() => setStep(2)} size="sm">
                        Back
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {[
                        { id: "card", icon: CreditCard, label: "Credit/Debit Card", color: "text-blue-600" },
                        { id: "upi", icon: Smartphone, label: "UPI", color: "text-green-600" },
                        { id: "netbanking", icon: Building, label: "Net Banking", color: "text-purple-600" },
                      ].map((method) => (
                        <Card
                          key={method.id}
                          className={`cursor-pointer transition-all duration-300 ${
                            paymentMethod === method.id
                              ? "border-green-500 bg-green-50 shadow-lg"
                              : "border-gray-200 hover:border-green-300 hover:shadow-md"
                          }`}
                          onClick={() => setPaymentMethod(method.id)}
                        >
                          <CardContent className="p-4 text-center">
                            <method.icon className={`h-8 w-8 mx-auto mb-2 ${method.color}`} />
                            <p className="font-medium">{method.label}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-slate-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold mb-2">Payment Summary</h4>
                      <div className="flex justify-between items-center">
                        <span>Donation Amount:</span>
                        <span className="font-bold text-green-600">₹{getCurrentAmount()}</span>
                      </div>
                    </div>

                    <Button
                      onClick={handlePayment}
                      disabled={!paymentMethod || isProcessing}
                      className="w-full bg-green-600 hover:bg-green-700 interactive-button"
                      size="lg"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing Payment...
                        </>
                      ) : (
                        `Donate ₹${getCurrentAmount()}`
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Stats */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Your Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: Heart, number: "2000+", label: "People Helped", color: "text-red-500" },
                    { icon: Award, number: "50+", label: "Health Camps", color: "text-blue-500" },
                    { icon: Users, number: "500+", label: "Children Educated", color: "text-green-500" },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-slate-100 p-2 rounded-lg">
                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{stat.number}</div>
                        <div className="text-sm text-slate-600">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* QR Code */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle>Quick UPI Donation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="UPI QR Code"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-lg"
                />
                <p className="text-sm text-slate-600 mb-2">UPI ID: donate@sevasansthan</p>
                <p className="text-xs text-slate-500">Scan QR code or use UPI ID</p>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="interactive-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Secure & Trusted</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "SSL Encrypted Payments",
                    "80G Tax Benefits Available",
                    "Transparent Fund Usage",
                    "Registered NGO",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="modal-overlay">
            <div className="modal-content animate-fadeInUp">
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-4">
                  Your donation of ₹{getCurrentAmount()} has been processed successfully.
                </p>
                <p className="text-sm text-slate-500">
                  You will receive a confirmation email and 80G certificate shortly.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {showError && (
          <div className="modal-overlay">
            <div className="modal-content animate-fadeInUp">
              <div className="text-center">
                <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-4">
                  <X className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Error</h3>
                <p className="text-slate-600">Please fill in all required fields and select a payment method.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
