import React, {useState} from 'react'
import "./qualification.css"
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index)=>{
    setToggleState(index);
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState==1?"qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=>{toggleTab(1)}}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggleState==2?"qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=>{toggleTab(2)}}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState==1?"qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
              <div className = "qualification__data-content">
                <h3 className="qualification__title">Bachelor of Technology in Computer Science Engineering</h3>
                <span className="qualification__subtitle">GL Bajaj Group of Institutions<br></br> <span className="qualification__grade">8.00 CGPA</span></span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2024
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
              
              <div className = "qualification__data-content">
                <h3 className="qualification__title">12th Standard</h3>
                <span className="qualification__subtitle">JB Academy<br></br> <span className="qualification__grade">88.4%</span></span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2020
                </div>
              </div>
              
            </div>
            <div className="qualification__data">
              <div className = "qualification__data-content">
                <h3 className="qualification__title">10th Standard</h3>
                <span className="qualification__subtitle">JB Academy<br></br> <span className="qualification__grade">91.1%</span></span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2018
                </div>
              </div>
              
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            
          </div>

          <div className={toggleState==2?"qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
              <div className = "qualification__data-content">
                <h3 className="qualification__title">Web Developer Intern</h3>
                <span className="qualification__subtitle">GrowthBuk <br></br> <span className="qualification__location">Remote</span></span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present
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
              
              <div className = "qualification__data-content">
                <h3 className="qualification__title">Web Developer Intern</h3>
                <span className="qualification__subtitle">Ranjan Technologies <br></br> <span className="qualification__location">Remote</span></span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2022
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification