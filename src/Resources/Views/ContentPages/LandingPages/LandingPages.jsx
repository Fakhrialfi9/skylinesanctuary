import "./../../../Style/ContentPages/LandingPages/LandingPages.css";

import ClientSection from "./../../../Views/ContentPages/Section/ClientSection.jsx";
import AboutUsSection from "./../../../Views/ContentPages/Section/AboutUsSection.jsx";
import CardFeature from "./../../../Views/ContentPages/Section/CardFeature.jsx";
import OurProduct from "./../../../Views/ContentPages/Section/OurProduct.jsx";
import TestimonialProperty from "./../../../Views/ContentPages/Section/TestimonialProperty.jsx";

function LandingPages() {
  return (
    <main id="LandingPagesSection">
      <section className="LandingPagesSection">
        <div className="MainLandingPages">
          <div className="MainLandingPagesContainer">
            <div className="MainLandingPagesContent">
              {/* Start Client Landing Pages */}
              <ClientSection />
              {/* End Client Landing Pages */}

              {/* Start About Us Landing Pages */}
              <AboutUsSection />
              {/* End About Us Landing Pages */}

              {/* Start Card Feature */}
              <CardFeature />
              {/* End Card Feature */}

              {/* Start Card Product Property */}
              <OurProduct />
              {/* End Card Product Property */}

              {/* Start Testimonial Property */}
              <TestimonialProperty />
              {/* End Testimonial Property */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPages;
