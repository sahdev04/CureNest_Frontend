import React from 'react'
import UpdateUserImage from './UpdateUserImage'

const UpdateUserImageData = () => {
  return (
    <div>
      <UpdateUserImage />
    </div>
  )
}

export function generateMetadata() {
  return {
      title: "Update Profile Picture - CureNest",
      description: "Update your profile picture on CureNest to personalize your account.",
      keywords: "CureNest, profile picture, update image, account settings, user profile", // Relevant keywords for SEO
      robots: "index, follow", // Instructions for search engine crawlers
      openGraph: {
          title: "Update Profile Picture - CureNest",
          description: "Personalize your account by updating your profile picture on CureNest. Easy and secure process.",
          type: "website",
          url: "https://curenest.com/profile/updateuserimage", // URL of the page
          siteName: "CureNest",
      },
  }
}

export default UpdateUserImageData
