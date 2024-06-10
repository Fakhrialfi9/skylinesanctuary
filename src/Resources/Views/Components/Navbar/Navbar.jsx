import "./../../../Style/Components/Navbar/Navbar.css";

function Navbar() {
  return (
    <main id="NavbarSection">
      <section className="NavbarSection">
        <nav className="MainNavbar">
          <div className="NavbarContainer">
            <div className="NavbarContent">
              <div className="NavbarContentLeft">
                <h5>RealSt</h5>
              </div>
              <div className="NavbarContentCenter">
                <ul className="NavbarContentCenterMenu">
                  <li className="NavbarContentCenterItem">
                    <a href="" className="NavbarContentCenterLink">
                      Home
                    </a>
                  </li>
                  <li className="NavbarContentCenterItem">
                    <a href="" className="NavbarContentCenterLink">
                      Features
                    </a>
                  </li>
                  <li className="NavbarContentCenterItem">
                    <a href="" className="NavbarContentCenterLink">
                      About
                    </a>
                  </li>
                  <li className="NavbarContentCenterItem">
                    <a href="" className="NavbarContentCenterLink">
                      Categories
                    </a>
                  </li>
                  <li className="NavbarContentCenterItem">
                    <a href="" className="NavbarContentCenterLink">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="NavbarContentRight">
                <a href="">Sign In</a>
                <button>Create Account</button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </main>
  );
}

export default Navbar;
