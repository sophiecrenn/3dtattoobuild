'use client'

import Image from 'next/image'

//team picture
import dung from '@/app/images/team/dung.svg'
import sophie from '@/app/images/team/sophie.svg'
import louis from '@/app/images/team/louis.svg'
import "./team.css";

export default function Team() {
  //dynamic team presentation cards
  return (
    <section className="teamContainer" id="team">
    <h2>OUR TEAM</h2>
    <div className="teamMemberContainer">
    <div className="card">
    <Image className="profilPic"
      src={sophie}
      width={200}
      height={300}
      alt="Picture of Sophie Crenn"
    />
    <h3 className="name">Sophie CRENN</h3>
    <p>Web developper & community manager</p>
    </div>
    <div className="card">
    <Image className="profilPic"
      src={dung}
      width={200}
      height={300}
      alt="Picture of Viet-Dung Nguyen"
    />
    <h3 className="name">Dr. Viet-Dung NGUYEN</h3>
    <p>Web Ingénieur Sénior IA/Data scientist</p>
    </div>
    <div className="card">
    <Image className="profilPic"
      src={louis}
      width={200}
      height={300}
      alt="Picture of Louis Fevre"
    />
    <h3 className="name">Louis Fevre</h3>
    <p>Data and web developper</p>
    </div>
    </div>
    </section>
  )
}