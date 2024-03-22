import React from "react"
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

export const metadata = {
  metadataBase: new URL('https://bryce-parkman.vercel.app/'),
  title: 'Bryce Parkman',
  description: "Welcome to my website! I am a software developer based in Boston, MA. \
                I graduated with a degree in Computer Science and Mathematics from the University of Massachusetts Amherst. \
                During this time I was a tech lead at BUILD UMass, a pro-bono tech consulting organization run by UMass Amherst students. \
                I am interested in all things robotics and the intersection of computer science and math. Experienced in full stack web development, \
                app development, and mathematical visualization.",
  icons: {
      icon: "/favicon.ico"
  },
  openGraph: {
      title: 'Bryce Parkman',
      images: [
          {
              url: 'https://bryce-parkman.vercel.app/images/profile.jpeg'
          }
      ]
  },
  twitter: {
      card: 'summary_large_image'
  }
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }