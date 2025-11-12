import React from 'react'
import Doctors from './Doctors'

const DoctorsData = () => {
  return (
    <div>
      <Doctors />
    </div>
  )
}

export async function generateMetadata() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctor/allDoctors`);
    
    if (!res.ok) throw new Error("Failed to fetch doctors data");

    const result = await res.json();
    const dynamicData = result?.data
      .map((data: any) => data.specialist)
      .join(", ");

    return {
      title: "Doctors - CureNest",
      description: "Discover qualified doctors on CureNest. Browse through our comprehensive listings to find healthcare professionals that match your needs. Schedule appointments and view profiles easily.",
      keywords: dynamicData,
      robots: "index, follow",
      openGraph: {
        title: "Doctors - CureNest",
        description: "Search through CureNest's comprehensive database to find doctors and healthcare specialists. Book your appointment online with ease.",
        type: "website",
        url: "https://www.curenset.com/doctors",
      },
    };
  } catch (error) {
    console.error("Error fetching doctors metadata:", error);
    
    return {
      title: "Doctors - CureNest",
      description: "Browse through qualified doctors at CureNest. Schedule appointments and view profiles easily.",
      keywords: "doctors, healthcare, specialists",
      robots: "index, follow",
      openGraph: {
        title: "Doctors - CureNest",
        description: "Search through CureNest's comprehensive database to find doctors and healthcare specialists. Book your appointment online with ease.",
        type: "website",
        url: "https://www.curenset.com/doctors",
      },
    };
  }
}


export default DoctorsData
