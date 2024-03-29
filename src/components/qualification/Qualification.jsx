import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Armenian Code Academy</h3>
                <span className="qualification__subtitle">
                  Armenia - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {" "}
                  Master's Degree in Management
                </h3>
                <span className="qualification__subtitle">
                  Armenia - University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Bachelor Degree in Management
                </h3>
                <span className="qualification__subtitle">
                  Armenia - University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> Programming Workshop Leader</h3>
                <span className="qualification__subtitle">
                TUMO - Center For Creative Technologies - Armenia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
            </div>
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Software Developer</h3>
                <span className="qualification__subtitle">
                  Braint Systems - Armenia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> Client Manager</h3>
                <span className="qualification__subtitle">
                  Ameriabank CJSC - Armenia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Financial Adviser </h3>
                <span className="qualification__subtitle">
                  VTB-Armenia Bank CJSC - Armenia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
