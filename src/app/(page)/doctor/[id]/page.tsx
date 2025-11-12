import React from 'react'
import DoctorPage from './Doctor'

const DoctorPageData = () => {
  return (
    <div>
      <DoctorPage />
    </div>
  )
}

export function generateMetadata() {
  return {
    title: "Doctor - CureNest",
    description: "Access comprehensive information about doctors at CureNest. Explore their qualifications, specialties, patient reviews and more details to make informed healthcare decisions.",
    keywords: "Child Specialist, Medicine, Dentists, cardiologists, dermatologists, orthopedic doctors, pediatricians, family medicine, general practitioners, specialists, mental health professionals, endocrinologists, gynecologists, urologists, gastroenterologists, healthcare providers, CureNest doctors, medical specialists",
    robots: "index, follow",
    openGraph: {
      title: "Doctor - CureNest",
      description: "Access comprehensive information about doctors at CureNest. Explore their qualifications, specialties, patient reviews and more details to make informed healthcare decisions.",
      type: "website",
      siteName: "CureNest",
    },
  }
}

export default DoctorPageData
