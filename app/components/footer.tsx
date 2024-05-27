'use client'

import CookieConsentBanner from "./cookies/cookies";
import Follow from "./Footer/follow";
import About from "./Footer/about";
import LegalPrivacy from "./Footer/legal&privacy";

export default function Footer() {
  //footer links
  return (
    <footer className="footer">
      <CookieConsentBanner/>
      <About />
      <Follow />
      <LegalPrivacy/>
    </footer>
  );
}
