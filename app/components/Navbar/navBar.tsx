'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./navbar.css";

export default function NavBar() {
  //navigation scroll
  const [navigation, setNavigation] = useState(false);

  const navScroll = () => {
    if (window.scrollY >= 100) {
      setNavigation(true);
    } else {
      setNavigation(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", navScroll);
    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  }, []);

  return (
    //Navbar links
    <section className="navbar">
    <div className={` ${
      navigation
        ? "fixed-bar"
        : " relative-bar"
    }`} >
      <div className="navBarSticky">
      <ul>
      <li className="nav-link">
          <Link href="/">
            <h1 data-name="home">HOME</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/#product">
            <h1 data-name="product">PRODUCT</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/#documentation">
            <h1 data-name="documentation">DOCUMENTATION</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/#contact">
            <h1 data-name="contact">CONTACT</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/#team">
            <h1 data-name="team">TEAM</h1>
          </Link>
        </li>
      </ul>
      </div>
      </div>
    </section>
  );
}
