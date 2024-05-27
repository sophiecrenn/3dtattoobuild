import Image from "next/image";
import Link from "next/link";
import Banniere from "@/app/images/product/banniere.svg"
import "./product.css";


export default function Product() {
  return (
    //Product page
    <section className="productContainer" id="product">
    <div className="firstContainerProduct">
      <div className="leftContainerProduct">
      <h2>PRODUCT</h2>
      <Link href="www.3d-tattoo.com">
        <Image className="banniere" src={Banniere} alt="Bannière 3D TATTOO" width={1300} height={800} priority/>
      </Link>
      </div>
    </div>
    </section>
  );
}
