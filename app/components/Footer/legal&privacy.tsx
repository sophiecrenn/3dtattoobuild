import Link from "next/link";

export default function LegalPrivacy() {
  //legal notices & privacy link pages
  return (
    <section className="componentFooter legalContainer">
      <Link className="legalTitle" href="/legalNotices">
        <h3>Legal notices</h3>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <Link className="privacyTitle" href="/privacy">
        <h3>Privacy</h3>
      </Link>
    </section>
  );
}
