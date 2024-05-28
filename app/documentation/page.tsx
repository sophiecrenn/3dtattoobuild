'use client'

import FrenchDocumentation from "./French";
import EnglishDocumentation from "./English";
import { useState } from "react";
import "./documentation.css";

export default function Documentation() {
  const [showCards, setShowCards] = useState(false);
  const [language, setLanguage] = useState("French");

  // Fonction pour basculer l'état des cartes
  const toggleCards = () => {
    setShowCards((prev) => !prev);
  };

  return (
    <section className="documentationContainer" id="documentation">
      <h2 className="docTitle">DOCUMENTATION</h2>
      <div className="languageButtons">
        <button
          id="frenchButton"
          onClick={() => {
            setLanguage("French");
            toggleCards();
          }}
        >
          Version française
        </button>
        <button
          id="englishButton"
          onClick={() => {
            setLanguage("English");
            toggleCards();
          }}
        >
          English version
        </button>
      </div>
      <div className="firstContainer">
        {language === "French" ? (
          <FrenchDocumentation showCards={showCards} setShowCards={setShowCards} />
        ) : (
          <EnglishDocumentation showCards={showCards} setShowCards={setShowCards} />
        )}
      </div>
    </section>
  );
}
