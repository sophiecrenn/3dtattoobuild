
import Image from "next/image";
import Diapo1 from "@/app/images/documentation/french/1.svg";
import Diapo2 from "@/app/images/documentation/french/2.svg";
import Diapo3 from "@/app/images/documentation/french/3.svg";
import Diapo4 from "@/app/images/documentation/french/4.svg";
import Diapo5 from "@/app/images/documentation/french/5.svg";
import Diapo6 from "@/app/images/documentation/french/6.svg";
import RightArrow from "@/app/images/documentation/16.svg";
import LeftArrow from "@/app/images/documentation/17.svg";

interface FrenchDocumentationProps {
    showCards: boolean;
    setShowCards: (value: boolean) => void;
  }

export default function FrenchDocumentation({ showCards, setShowCards }: FrenchDocumentationProps) {
  return (
      <section id="documentation">
          {showCards && (
              <div className="firstContainer">
                  <div className="leftContainerDocumentation">
                      <div>
                          <Image className="diapoDocL" src={Diapo1} alt="Diaporama n°1" width={600} height={400}/>
                          <Image className="diapoArrowL" src={LeftArrow} alt="Arrow n°2" width={400} height={200}/>
                          <Image className="diapoDocL" src={Diapo3} alt="Diaporama n°3" width={600} height={400}/>
                          <Image className="diapoArrowL" src={LeftArrow} alt="Arrow n°2" width={400} height={200}/>
                          <Image className="diapoDocL" src={Diapo5} alt="Diaporama n°5" width={600} height={400}/>
                      </div>
                  </div>
                  <div className="rightContainerDocumentation">
                      <div>
                          <Image className="diapoArrowR" src={RightArrow} alt="Arrow n°1" width={400} height={200}/>
                          <Image className="diapoDocR" src={Diapo2} alt="Diaporama n°2" width={600} height={400}/>
                          <Image className="diapoArrowR" src={RightArrow} alt="Arrow n°1" width={400} height={200}/>
                          <Image className="diapoDocR" src={Diapo4} alt="Diaporama n°4" width={600} height={400}/>
                          <Image className="diapoArrowR" src={RightArrow} alt="Arrow n°1" width={400} height={200}/>
                          <Image className="diapoDocL" id="lastDiapo" src={Diapo6} alt="Diaporama n°7" width={600} height={400}/>
                      </div>
                  </div>
              </div>
          )}
      </section>
  );
}