import Image from "next/image"

//import social medias
import Facebook from "@/app/images/follow/facebook.svg"
import Instagram from "@/app/images/follow/instagram.svg"
import Pinterest from "@/app/images/follow/pinterest.svg"


export default function Follow() {
  //social medias footer
  return (
    <section className="componentFooter followContainer">
          <h3 className="followTitle">Follow us</h3>
          <br></br>
          <div>
          <a href ="https://www.instagram.com/3dtattooofficial/"
          target="_blank"
          >
        <Image className="followImage"
        src={Instagram}
        alt= "Link to Instagram, icon by icones8"

        >
        </Image>
        </a>
        <a href ="https://pin.it/55ziXY5kL"
          target="_blank"
          >
        <Image className="followImage"
        src={Pinterest}
        alt= "Link to Pinterest, icon by icones8"
        >
        </Image>
        </a>
          <a href ="https://www.facebook.com/profile.php?id=61559865464578"
          target="_blank"
          >
        <Image className="followImage"
        src={Facebook}
        alt= "Link to Facebook, icon by icones8"
        >
        </Image>
        </a>
        </div>
        </section>
  )
}
