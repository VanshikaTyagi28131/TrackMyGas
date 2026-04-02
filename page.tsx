"use client"

import { AppProvider, useApp } from "@/lib/app-context"
import { LoginScreen } from "@/components/screens/login-screen"
import { OtpScreen } from "@/components/screens/otp-screen"
import { OnboardingScreen } from "@/components/screens/onboarding-screen"
import { DashboardScreen } from "@/components/screens/dashboard-screen"
import { BookingScreen } from "@/components/screens/booking-screen"
import { EligibilityScreen } from "@/components/screens/eligibility-screen"
import { MapScreen } from "@/components/screens/map-screen"
import { TrackingScreen } from "@/components/screens/tracking-screen"
import { AdminScreen } from "@/components/screens/admin-screen"
import { ComplaintsScreen } from "@/components/screens/complaints-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"

function AppContent() {
  const { screen } = useApp()

  switch (screen) {
    case "login":
      return <LoginScreen />
    case "otp":
      return <OtpScreen />
    case "onboarding":
      return <OnboardingScreen />
    case "dashboard":
      return <DashboardScreen />
    case "booking":
      return <BookingScreen />
    case "eligibility":
      return <EligibilityScreen />
    case "map":
      return <MapScreen />
    case "tracking":
      return <TrackingScreen />
    case "admin":
      return <AdminScreen />
    case "complaints":
      return <ComplaintsScreen />
    case "profile":
      return <ProfileScreen />
    default:
      return <LoginScreen />
  }
}

export default function TrackMyGasApp() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
