"use client";

//Import hook
import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./contact.css";

//Contact form
export default function ContactForm() {
  const [state, handleSubmit] = useForm("myyrjrwq");
  const [formState, setFormState] = useState(0);

  //Refresh on click
  const handleRefresh = () => {
    window.location.reload();
    };

  // Data catching
  useEffect(() => {
    const params = new URLSearchParams(document.location?.search);
    const formStateParam = params.get("formState");
    const DEFAULT_FORM_STATE: number = 0;
    if (formStateParam !== null) {
      setFormState(parseInt(formStateParam, 10));
    } else {
      // Fournir une valeur par défaut si le paramètre est nul
      setFormState(DEFAULT_FORM_STATE);
    }
  }, []);

  // Function to handle successful form submission
  const handleFormSubmission = () => {
    // Update form state only if it's not already set to 1
    if (formState !== 1) {
      setFormState(1);
    }
  };

  //Message for successful form submission
  if (state.succeeded) {
    return( 
    <div style={{ color:'#ffc2e5', fontSize: '20px', fontWeight:'bold', textAlign: 'center', margin: 'auto', width: '90%', backgroundColor: 'rgba(182, 182, 182, 0.2)', borderRadius:'30px', padding: '20px' }}>
    <p>Thank you !</p>
    <br></br>
    <p>Your message has been send to our team </p>
    <br></br>
    <Link href="/">
      <p style={{textDecoration:'underline', cursor:'pointer'}} onClick={handleRefresh}>Return to the homepage</p>
    </Link>
  </div>
    )
  }

  //contact form
  return (
    <section className="contactContainer form" id="contact">
      <h2> CONTACT US</h2>
        <>
          <p className="asterix light-20">
            Les champs marqués d&apos;un astérisque (<em>*</em>) sont obligatoires.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="formContainer">
              <div className="formPlace">
                <label htmlFor="first name">
                  FIRST NAME <em>*</em> :
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  required
                />
              </div>
              <div className="formPlace">
                <label htmlFor="last name">
                  LAST NAME <em>*</em> :
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  required
                />
              </div>
              <div className="formPlace">
                <label htmlFor="email">
                  EMAIL <em>*</em> :
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                />
              </div>
              <div className="regular-14 mb-2 text-center radioButton">
                <div className="radio">
                <input
                  type="radio"
                  id="Radio_1"
                  name="Sujet"
                  value="an information"
                />
                <label className="mr-1" htmlFor="Radio_1">
                  An information
                </label>
                </div>
                <div className="radio">
                <input
                  type="radio"
                  id="Radio_2"
                  name="Sujet"
                  value="a technical support"
                />
                <label className="mr-1" htmlFor="Radio_2">
                  A technical support
                </label>
                </div>
                <div className="radio">
                <input
                  type="radio"
                  id="Radio_3"
                  name="Sujet"
                  value="a quotation"
                />
                <label className="mr-1" htmlFor="Radio_3">
                  A quotation
                </label>
                </div>
              </div>
              <div className="formPlace" id="textAreaContainer">
                <label htmlFor="comments">
                  COMMENTS <em>*</em> :
                </label>
                <textarea
                  placeholder="Write your comments (200 caracters maximum)"
                  name="comments"
                  maxLength={200}
                  required
                />
              </div>
              <div className="checkboxContainer" style={{ width: "100%" }}>
                <input
                  type="checkbox"
                  name="Consent"
                  id="checkboxInput"
                  required
                />
                <label id="consent" htmlFor="consent" style={{ width: "90%" }}>
                  By checking this box, I consent to my personal data being
                  collected, processed, and stored within the scope of my
                  contact request with 3D TATTOO, and in accordance with the
                  principles and obligations imposed by the GDPR.
                </label>
              </div>
              <div className="buttonContainer">
                <button 
                id="button" 
                type="submit"
                disabled={state.submitting}
                onClick={handleFormSubmission}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </>
    </section>
  );
}
