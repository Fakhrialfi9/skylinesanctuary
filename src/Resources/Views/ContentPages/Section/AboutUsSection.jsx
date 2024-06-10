import ThumbnailAboutUs from "./../../../Asset/Image/PagesContent/AboutUs/ThumbnailAboutUs.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function AboutUsSection() {
  return (
    <section className="AboutUsSection">
      <div className="MainAboutUs">
        <div className="MainAboutUsContainer">
          <div className="MainAboutUsContent">
            <div className="MainAboutUsContentLeft">
              <div className="MainAboutUsCardContentLeft">
                <div className="MainAboutUsCardContentLeftOpacity"></div>
                <img src={ThumbnailAboutUs} alt="" />
                <div className="MainAboutUsCardContentLeftVideoPlay">
                  <a href="">
                    <FontAwesomeIcon icon={faPlay} />
                  </a>
                </div>
              </div>
            </div>
            <div className="MainAboutUsContentRight">
              <span>
                <h2>
                  We Are The Leader In The <br />
                  Real Estate Bussiness
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              </span>
              <div className="MainAboutUsContentRightCountNumber">
                <span>
                  <h2>685 +</h2>
                  <p>Propety Shell</p>
                </span>
                <span>
                  <h2>24 +</h2>
                  <p>Awards Gained</p>
                </span>
                <span>
                  <h2>13 +</h2>
                  <p>Years Experience</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
