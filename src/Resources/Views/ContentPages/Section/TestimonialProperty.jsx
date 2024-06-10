import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function TestimonialProperty() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  return (
    <section className="TestimonialSection">
      <div className="MainTestimonial">
        <div className="MainTestimonialContainer">
          <div className="ContentHeadlineTestimonial">
            <span>
              <h2>Testimonial</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </span>
          </div>
          <div className="MainTestimonialContent">
            <div className="MainTestimonialCardContent">
              <div className="MainTestimonialCardContentTop">
                <div className="MainTestimonialCardContentTopLeft">
                  <div className="MainTestimonialCardContentTopLeftAvatar"></div>
                </div>
                <div className="MainTestimonialCardContentTopRight">
                  <div className="MainTestimonialCardContentTopRightHeadline">
                    <span>
                      <h4>Muhammad Fakhri</h4>
                      <p>CO - Founder</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="MainTestimonialCardContentCenter">
                <span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                </span>
              </div>
              <div className="MainTestimonialCardContentBottom">
                <div className="MainTestimonialCardContentBottomRatting">
                  <span>
                    {[...Array(5)].map((_, index) => (
                      <React.Fragment key={index}>
                        <input className="RattingInput" name="Ratting" id={`Ratting1-${index + 1}`} value={index + 1} type="radio" checked={index + 1 === rating1} onChange={() => setRating1(index + 1)} />
                        <label aria-label={`${index + 1} stars`} className="RattingLabel" htmlFor={`Ratting1-${index + 1}`}>
                          <FontAwesomeIcon icon={faStar} className={`RattingIcon ${index + 1 <= rating1 ? "Active" : "Disable"}`} />
                        </label>
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="MainTestimonialCardContent">
              <div className="MainTestimonialCardContentTop">
                <div className="MainTestimonialCardContentTopLeft">
                  <div className="MainTestimonialCardContentTopLeftAvatar"></div>
                </div>
                <div className="MainTestimonialCardContentTopRight">
                  <div className="MainTestimonialCardContentTopRightHeadline">
                    <span>
                      <h4>Muhammad Fakhri</h4>
                      <p>CO - Founder</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="MainTestimonialCardContentCenter">
                <span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                </span>
              </div>
              <div className="MainTestimonialCardContentBottom">
                <div className="MainTestimonialCardContentBottomRatting">
                  <span>
                    {[...Array(5)].map((_, index) => (
                      <React.Fragment key={index}>
                        <input className="RattingInput" name="Ratting" id={`Ratting2-${index + 1}`} value={index + 1} type="radio" checked={index + 1 === rating2} onChange={() => setRating2(index + 1)} />
                        <label aria-label={`${index + 1} stars`} className="RattingLabel" htmlFor={`Ratting2-${index + 1}`}>
                          <FontAwesomeIcon icon={faStar} className={`RattingIcon ${index + 1 <= rating2 ? "Active" : "Disable"}`} />
                        </label>
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="MainTestimonialCardContent">
              <div className="MainTestimonialCardContentTop">
                <div className="MainTestimonialCardContentTopLeft">
                  <div className="MainTestimonialCardContentTopLeftAvatar"></div>
                </div>
                <div className="MainTestimonialCardContentTopRight">
                  <div className="MainTestimonialCardContentTopRightHeadline">
                    <span>
                      <h4>Muhammad Fakhri</h4>
                      <p>CO - Founder</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="MainTestimonialCardContentCenter">
                <span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                </span>
              </div>
              <div className="MainTestimonialCardContentBottom">
                <div className="MainTestimonialCardContentBottomRatting">
                  <span>
                    {[...Array(5)].map((_, index) => (
                      <React.Fragment key={index}>
                        <input className="RattingInput" name="Ratting" id={`Ratting3-${index + 1}`} value={index + 1} type="radio" checked={index + 1 === rating3} onChange={() => setRating3(index + 1)} />
                        <label aria-label={`${index + 1} stars`} className="RattingLabel" htmlFor={`Ratting3-${index + 1}`}>
                          <FontAwesomeIcon icon={faStar} className={`RattingIcon ${index + 1 <= rating3 ? "Active" : "Disable"}`} />
                        </label>
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialProperty;
