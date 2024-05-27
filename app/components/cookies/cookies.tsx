'use client'

// Components/cookies/cookies.js
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import Image from "next/image";
import Cookie from "@/app/images/cookies/cookies.svg"
import "./cookies.css";

//showing banner condition
export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");
    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  //if cookies accepted
  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  //if cookies rejected
  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  //cookie banner 
  return (
    <div className="cookieBanner show" style={{display: showBanner ? "block" : "none",}}>
      <div className= "cookieContent">
        <Image
        className="cookieLogo"
        src={Cookie}
        alt=" Cookie Image"
        width={80}
        height={80}>
        </Image>
      <div id="cookieParaph">
      <p>Our website uses cookies to improve your browsing experience.</p>
      <p>Please click Accept to continue.</p>
      </div>
      <div className="cookieButtons">
      <button className="cookieButton cookieAccept" onClick={handleAccept}>Accept All Cookies</button>
      <button className="cookieButton cookieReject" onClick={handleReject}>Reject All Cookies</button>
    </div>
    <Image
        className="cookieLogo2"
        src={Cookie}
        alt=" Cookie Image"
        width={80}
        height={80}>
        </Image>
    </div>
    </div>
  );
};
