import { Metadata } from "next"

import Header from "./components/header"
import Footer from "./components/footer"

//css
import "./globals.css";

export const metadata: Metadata = {
  title: '3D TATTOO Official Website',
  description: '3D Body generator for tattoo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}