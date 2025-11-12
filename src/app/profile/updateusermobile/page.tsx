import React from 'react'
import UpdateUserMobile from './UpdateUserMobile'

const UpdateUserMobileData = () => {
  return (
    <div>
      <UpdateUserMobile />
    </div>
  )
}

export function generateMetadata() {
  return {
    title: "Update Phone Number - CureNest",
    description: "Update your phone number on CureNest for seamless communication and account security.",
    keywords: "CureNest, update phone number, account security, profile settings, mobile update", // Relevant keywords for SEO
    robots: "index, follow", // Instructions for search engine crawlers
    openGraph: {
      title: "Update Phone Number - CureNest",
      description: "Ensure secure communication by updating your phone number on CureNest.",
      type: "website",
      url: "https://curenest.com/profile/updateusermobile", // URL of the page
      siteName: "CureNest",
    },
  }
}

export default UpdateUserMobileData
