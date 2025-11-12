import React from 'react'
import ProfileSettings from './Profile'

const Profile = () => {
  return (
    <div>
      <ProfileSettings />
    </div>
  )
}

export function generateMetadata() {
  return {
    title: "Profile - CureNest",
    description: "Access and manage your profile on CureNest. Update your information and check test history.",
    keywords: "CureNest, profile, account settings, user profile, test history", // Relevant keywords for SEO
    robots: "index, follow", // Instructions for search engine crawlers
    openGraph: {
      title: "Profile - CureNest",
      description: "Manage your personal profile and medical history at CureNest. Stay updated with your test results.",
      type: "website",
      url: "https://www.curenset.com/profile", // URL of the page
      siteName: "CureNest",
    },
  }
}

export default Profile
