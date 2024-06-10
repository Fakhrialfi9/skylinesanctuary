import LogoSummarecon from "./../../../Asset/Image/LogoClient/Summarecon.png";
import LogoAlamSutera from "./../../../Asset/Image/LogoClient/AlamSutera.png";
import LogoBSDCity from "./../../../Asset/Image/LogoClient/BSDCity.png";
import LogoParamountLand from "./../../../Asset/Image/LogoClient/ParamountLand.png";
import LogoJayaProperty from "./../../../Asset/Image/LogoClient/JayaProperty.png";

function ClientSection() {
  return (
    <section className="ClientSection">
      <div className="ClientSectionContainer">
        <div className="ClientSectionContent">
          <div className="ClientSectionCardContent">
            <img src={LogoSummarecon} alt="" />
          </div>
          <div className="ClientSectionCardContent">
            <img src={LogoAlamSutera} alt="" />
          </div>
          <div className="ClientSectionCardContent">
            <img src={LogoBSDCity} alt="" />
          </div>
          <div className="ClientSectionCardContent">
            <img src={LogoParamountLand} alt="" />
          </div>
          <div className="ClientSectionCardContent">
            <img src={LogoJayaProperty} alt="" />
          </div>
          <div className="ClientSectionCardContent">
            <img src={LogoSummarecon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
