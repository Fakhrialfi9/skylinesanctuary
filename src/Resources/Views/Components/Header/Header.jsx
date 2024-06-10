import "./../../../Style/Components/Header/Header.css";

import BackgroundHeader from "./../../../Asset/Image/Header/Background.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <main id="HeaderSection">
      <section className="HeaderSection">
        <header className="MainHeader">
          <div className="HeaderContainer">
            <div className="HeaderContent">
              <div className="HeaderContentImage">
                <div className="HeaderContentOpacity"></div>
                <img src={BackgroundHeader} alt="" />
                <div className="HeaderContentHeadline">
                  <span>
                    <h1>
                      Its Time to Find <br /> Smart Home
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                  </span>
                </div>
              </div>

              {/* Start From Select */}
              <div className="HeaderContentFormSelect">
                <div className="HeaderContentFormSelectContainer">
                  <div className="HeaderContentFormSelectContent">
                    <div className="HeaderContentFormSelectCard">
                      <div className="HeaderContentFormSelectCardTop">
                        <ul className="HeaderContentFormSelectCardTopMenu">
                          <li className="HeaderContentFormSelectCardTopItem">
                            <a href="" className="HeaderContentFormSelectCardTopLink">
                              Buy
                            </a>
                          </li>
                          <li className="HeaderContentFormSelectCardTopItem">
                            <a href="" className="HeaderContentFormSelectCardTopLink">
                              Sell
                            </a>
                          </li>
                          <li className="HeaderContentFormSelectCardTopItem">
                            <a href="" className="HeaderContentFormSelectCardTopLink">
                              Rent
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="HeaderContentFormSelectCardBottom">
                        <div className="HeaderContentFormSelectCardBottomFilter">
                          <a href="">
                            <h4>
                              Location
                              <span>
                                <FontAwesomeIcon icon={faChevronDown} />
                              </span>
                            </h4>
                          </a>
                          <a href="">Indonesia</a>
                        </div>
                        <div className="HeaderContentFormSelectCardBottomFilter">
                          <a href="">
                            <h4>
                              Property Type
                              <span>
                                <FontAwesomeIcon icon={faChevronDown} />
                              </span>
                            </h4>
                          </a>
                          <a href="">Duplex</a>
                        </div>
                        <div className="HeaderContentFormSelectCardBottomFilter">
                          <a href="">
                            <h4>
                              Max Price
                              <span>
                                <FontAwesomeIcon icon={faChevronDown} />
                              </span>
                            </h4>
                          </a>
                          <a href="">$2250</a>
                        </div>
                        <div className="HeaderContentFormSelectCardBottomFilter">
                          <button>
                            <b>
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </b>
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End From Select */}
            </div>
          </div>
        </header>
      </section>
    </main>
  );
}

export default Header;
