import React from 'react'
import Reset from './UpdatePassword';

const UpdatePasswordData = () => {
  return (
    <div>
      <Reset />
    </div>
  )
}

export function generateMetadata() {

  return {
    title: "Update Password - CureNest",
    description: "Reset your CureNest account password securely. Follow the steps to recover access to your account with ease.",

    keywords: [
      "forgot password",
      "password reset",
      "recover account",
      "account recovery",
      "YourLab password reset",
      "reset password securely",
      "forgot YourLab password",
      "YourLab account recovery"
    ].join(", "),

    robots: "index, follow",
    openGraph: {
      title: "Update Password - CureNest",
      description: "Easily reset your CureNest password and regain access to your account with secure steps.",
      type: "website",
      url: "https://www.curenset.com/updatepassword", // URL of the page
      siteName: "CureNest",
    },
  };
}


export default UpdatePasswordData
