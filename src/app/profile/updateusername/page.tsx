import React from 'react'
import UpdateUserName from './UpdateUserName'

const UpdateUserNameData = () => {
  return (
    <div>
      <UpdateUserName />
    </div>
  )
}

export function generateMetadata() {
  return {
      title: "Update Profile Name - CureNest",
      description: "Change your profile name on CureNest to keep your account personalized and up-to-date.",
      keywords: "CureNest, update profile name, account personalization, profile settings, user profile", // Relevant keywords for SEO
      robots: "index, follow", // Instructions for search engine crawlers
      openGraph: {
          title: "Update Profile Name - CureNest",
          description: "Personalize your account by updating your profile name on CureNest.",
          type: "website",
          url: "https://curenest.com/profile/updateusername", // URL of the page
          siteName: "CureNest",
      },
  }
}

export default UpdateUserNameData
