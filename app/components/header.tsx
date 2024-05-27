'use client'

import Link from 'next/link'
import Image from 'next/image'
import NavBar from './Navbar/navBar'
import Logo from "@/app/images/logo/logo.svg"

export default function Header() {
  return (
    //3D tattoo logo header
    <div className="headerLogo">
    <Link href="/">
      <Image className="logo"
        src={Logo}
        alt="Logo"
        width={400}
        height={300}
      />
    </Link>
    <NavBar/>
  </div>
  )
}
