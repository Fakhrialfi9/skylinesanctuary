import Home1 from "./../../../Asset/Image/PagesContent/OurProduct/FacadeHouse/Home1.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBath, faBed, faCar } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function OurProduct() {
  return (
    <section className="CardProductPropertySection">
      <div className="MainCardProductProperty">
        <div className="MainCardProductPropertyContainer">
          <div className="MainCardProductPropertyContent">
            <div className="MainCardProductPropertyContentTop">
              <div className="MainCardProductPropertyContentTopLeft">
                <span>
                  <h2>Our Product Property</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                </span>
              </div>
              <div className="MainCardProductPropertyContentTopRight">
                <span>
                  <button>House</button>
                  <button>Appartement</button>
                  <button>Condos</button>
                  <button>Land</button>
                  <button>View All</button>
                </span>
              </div>
            </div>
            <div className="MainCardProductPropertyContentBottom">
              {/* Start Card Our Product */}

              <div className="CardProductPropertyContentBottom">
                <div className="CardProductPropertyContentBottomImage">
                  <Swiper navigation={true} modules={[Navigation]} className="BorderRadius">
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="CardProductPropertyContentBottomHeadline">
                  <div className="CardProductPropertyContentBottomHeadlineLeft">
                    <span>
                      <h5>7012 Shine Sehu, Liverpool London, LC345AC</h5>
                    </span>
                  </div>
                  <div className="CardProductPropertyContentBottomHeadlineRight">
                    <span>
                      <h3>$475,00</h3>
                    </span>
                  </div>
                </div>
                <div className="CardProductPropertyContentBottomLocation">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </b>
                    <h5>1187 Lake Forrest City, TN</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomSpecification">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBath} />
                    </b>
                    <h5>2 Bath</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBed} />
                    </b>
                    <h5>4 Bad</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faCar} />
                    </b>
                    <h5>2 Car Port</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomButtonAction">
                  <span>
                    <button>Preview</button>
                  </span>
                </div>
              </div>

              <div className="CardProductPropertyContentBottom">
                <div className="CardProductPropertyContentBottomImage">
                  <Swiper navigation={true} modules={[Navigation]} className="BorderRadius">
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="CardProductPropertyContentBottomHeadline">
                  <div className="CardProductPropertyContentBottomHeadlineLeft">
                    <span>
                      <h5>7012 Shine Sehu, Liverpool London, LC345AC</h5>
                    </span>
                  </div>
                  <div className="CardProductPropertyContentBottomHeadlineRight">
                    <span>
                      <h3>$475,00</h3>
                    </span>
                  </div>
                </div>
                <div className="CardProductPropertyContentBottomLocation">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </b>
                    <h5>1187 Lake Forrest City, TN</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomSpecification">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBath} />
                    </b>
                    <h5>2 Bath</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBed} />
                    </b>
                    <h5>4 Bad</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faCar} />
                    </b>
                    <h5>2 Car Port</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomButtonAction">
                  <span>
                    <button>Preview</button>
                  </span>
                </div>
              </div>

              <div className="CardProductPropertyContentBottom">
                <div className="CardProductPropertyContentBottomImage">
                  <Swiper navigation={true} modules={[Navigation]} className="BorderRadius">
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="CardProductPropertyContentBottomHeadline">
                  <div className="CardProductPropertyContentBottomHeadlineLeft">
                    <span>
                      <h5>7012 Shine Sehu, Liverpool London, LC345AC</h5>
                    </span>
                  </div>
                  <div className="CardProductPropertyContentBottomHeadlineRight">
                    <span>
                      <h3>$475,00</h3>
                    </span>
                  </div>
                </div>
                <div className="CardProductPropertyContentBottomLocation">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </b>
                    <h5>1187 Lake Forrest City, TN</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomSpecification">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBath} />
                    </b>
                    <h5>2 Bath</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBed} />
                    </b>
                    <h5>4 Bad</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faCar} />
                    </b>
                    <h5>2 Car Port</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomButtonAction">
                  <span>
                    <button>Preview</button>
                  </span>
                </div>
              </div>

              <div className="CardProductPropertyContentBottom">
                <div className="CardProductPropertyContentBottomImage">
                  <Swiper navigation={true} modules={[Navigation]} className="BorderRadius">
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="CardProductPropertyContentBottomHeadline">
                  <div className="CardProductPropertyContentBottomHeadlineLeft">
                    <span>
                      <h5>7012 Shine Sehu, Liverpool London, LC345AC</h5>
                    </span>
                  </div>
                  <div className="CardProductPropertyContentBottomHeadlineRight">
                    <span>
                      <h3>$475,00</h3>
                    </span>
                  </div>
                </div>
                <div className="CardProductPropertyContentBottomLocation">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </b>
                    <h5>1187 Lake Forrest City, TN</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomSpecification">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBath} />
                    </b>
                    <h5>2 Bath</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBed} />
                    </b>
                    <h5>4 Bad</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faCar} />
                    </b>
                    <h5>2 Car Port</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomButtonAction">
                  <span>
                    <button>Preview</button>
                  </span>
                </div>
              </div>

              <div className="CardProductPropertyContentBottom">
                <div className="CardProductPropertyContentBottomImage">
                  <Swiper navigation={true} modules={[Navigation]} className="BorderRadius">
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="CardProductPropertyContentBottomHeadline">
                  <div className="CardProductPropertyContentBottomHeadlineLeft">
                    <span>
                      <h5>7012 Shine Sehu, Liverpool London, LC345AC</h5>
                    </span>
                  </div>
                  <div className="CardProductPropertyContentBottomHeadlineRight">
                    <span>
                      <h3>$475,00</h3>
                    </span>
                  </div>
                </div>
                <div className="CardProductPropertyContentBottomLocation">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </b>
                    <h5>1187 Lake Forrest City, TN</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomSpecification">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBath} />
                    </b>
                    <h5>2 Bath</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBed} />
                    </b>
                    <h5>4 Bad</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faCar} />
                    </b>
                    <h5>2 Car Port</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomButtonAction">
                  <span>
                    <button>Preview</button>
                  </span>
                </div>
              </div>

              <div className="CardProductPropertyContentBottom">
                <div className="CardProductPropertyContentBottomImage">
                  <Swiper navigation={true} modules={[Navigation]} className="BorderRadius">
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="CardProductPropertyContentBottomHeadline">
                  <div className="CardProductPropertyContentBottomHeadlineLeft">
                    <span>
                      <h5>7012 Shine Sehu, Liverpool London, LC345AC</h5>
                    </span>
                  </div>
                  <div className="CardProductPropertyContentBottomHeadlineRight">
                    <span>
                      <h3>$475,00</h3>
                    </span>
                  </div>
                </div>
                <div className="CardProductPropertyContentBottomLocation">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </b>
                    <h5>1187 Lake Forrest City, TN</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomSpecification">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBath} />
                    </b>
                    <h5>2 Bath</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBed} />
                    </b>
                    <h5>4 Bad</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faCar} />
                    </b>
                    <h5>2 Car Port</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomButtonAction">
                  <span>
                    <button>Preview</button>
                  </span>
                </div>
              </div>

              <div className="CardProductPropertyContentBottom">
                <div className="CardProductPropertyContentBottomImage">
                  <Swiper navigation={true} modules={[Navigation]} className="BorderRadius">
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="CardProductPropertyContentBottomHeadline">
                  <div className="CardProductPropertyContentBottomHeadlineLeft">
                    <span>
                      <h5>7012 Shine Sehu, Liverpool London, LC345AC</h5>
                    </span>
                  </div>
                  <div className="CardProductPropertyContentBottomHeadlineRight">
                    <span>
                      <h3>$475,00</h3>
                    </span>
                  </div>
                </div>
                <div className="CardProductPropertyContentBottomLocation">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </b>
                    <h5>1187 Lake Forrest City, TN</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomSpecification">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBath} />
                    </b>
                    <h5>2 Bath</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBed} />
                    </b>
                    <h5>4 Bad</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faCar} />
                    </b>
                    <h5>2 Car Port</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomButtonAction">
                  <span>
                    <button>Preview</button>
                  </span>
                </div>
              </div>

              <div className="CardProductPropertyContentBottom">
                <div className="CardProductPropertyContentBottomImage">
                  <Swiper navigation={true} modules={[Navigation]} className="BorderRadius">
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Home1} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="CardProductPropertyContentBottomHeadline">
                  <div className="CardProductPropertyContentBottomHeadlineLeft">
                    <span>
                      <h5>7012 Shine Sehu, Liverpool London, LC345AC</h5>
                    </span>
                  </div>
                  <div className="CardProductPropertyContentBottomHeadlineRight">
                    <span>
                      <h3>$475,00</h3>
                    </span>
                  </div>
                </div>
                <div className="CardProductPropertyContentBottomLocation">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </b>
                    <h5>1187 Lake Forrest City, TN</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomSpecification">
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBath} />
                    </b>
                    <h5>2 Bath</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faBed} />
                    </b>
                    <h5>4 Bad</h5>
                  </span>
                  <span>
                    <b>
                      <FontAwesomeIcon icon={faCar} />
                    </b>
                    <h5>2 Car Port</h5>
                  </span>
                </div>
                <div className="CardProductPropertyContentBottomButtonAction">
                  <span>
                    <button>Preview</button>
                  </span>
                </div>
              </div>
              {/* End Card Our Product */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProduct;
