import headshotImage from "./assets/anton_image.png";

// Portfolio configuration

export const config = {
  // Social Links
  github: "https://github.com/AntonKorchynskyi",
  linkedin: "https://www.linkedin.com/in/anton-korchynskyi-085b96279",
  email: "anton.korchynskyi28@gmail.com",

  // Resume
  resumeUrl: "/Anton_Korchynskyi-Resume_Portfolio.pdf", // Resume PDF should be placed in public/ directory

  //Image
  headshotUrl: headshotImage,

  // Availability, shown in the hero, contact section and footer
  availability: "Available now for Full-Stack and Frontend roles",
  location: "Ontario, Canada · Remote or hybrid",

  // Web3Forms access key for the contact form (set in .env.local and on Vercel).
  // When missing, the form is hidden and only the direct contact options show.
  contactFormKey: import.meta.env.VITE_WEB3FORMS_KEY as string | undefined,
};
