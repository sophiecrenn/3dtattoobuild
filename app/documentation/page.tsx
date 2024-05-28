'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import './documentation.css';

const FrenchDocumentation = dynamic(() => import('./French'));
const EnglishDocumentation = dynamic(() => import('./English'));

export default function Documentation() {
  const [showCards, setShowCards] = useState(false);
  const [language, setLanguage] = useState('French');

  const toggleCards = () => {
    console.log('Toggling showCards:', !showCards);
    setShowCards(!showCards);
  };

  return (
    <section className="documentationContainer" id="documentation">
      <h2 className="docTitle">DOCUMENTATION</h2>
      <div className="languageButtons">
        <button
          id="frenchButton"
          onClick={() => {
            console.log('Switching to French');
            setLanguage('French');
            toggleCards();
          }}
        >
          Version française
        </button>
        <button
          id="englishButton"
          onClick={() => {
            console.log('Switching to English');
            setLanguage('English');
            toggleCards();
          }}
        >
          English version
        </button>
      </div>
      <div className="firstContainer">
        {language === 'French' ? (
          <FrenchDocumentation showCards={showCards} setShowCards={setShowCards} />
        ) : (
          <EnglishDocumentation showCards={showCards} setShowCards={setShowCards} />
        )}
      </div>
    </section>
  );
}
