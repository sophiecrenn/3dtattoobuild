//CSS Module
import "./globals.css";

//pages
import Product from "./product/page";
import Documentation from "./documentation/page";
import ContactForm from "./contact/page";
import Team from "./team/page";

export default function Home() {
  return (
<section id="home">
  <Product/>
  <Documentation/>
  <ContactForm/>
  <Team/>
</section>
);
}
