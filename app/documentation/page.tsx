'use client'

import FrenchDocumentation from "@/app/documentation/French";
import EnglishDocumentation from "@/app/documentation/English";
import { useState } from "react";
import "./documentation.css";

export default function Documentation() {
const [showCards, setShowCards] = useState(false);
const [language, setLanguage] = useState("French");

// Fonction pour basculer l'état des cartes
const toggleCards = () => {
  // Si les cartes sont déjà affichées, les cacher en mettant showCards à false
  if (showCards) {
    setShowCards(false);
  } else {
    setShowCards(true);
  }
};

return (
  <section className="documentationContainer" id="documentation">
    <h2 className="docTitle">DOCUMENTATION</h2>
    <div className="languageButtons">
      <button
        id="frenchButton"
        onClick={() => {
          setLanguage("French");
          toggleCards(); // Utiliser la fonction toggleCards au lieu de setShowCards(true)
        }}
      >
        Version française
      </button>
      <button
        id="englishButton"
        onClick={() => {
          setLanguage("English");
          toggleCards(); // Utiliser la fonction toggleCards au lieu de setShowCards(true)
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