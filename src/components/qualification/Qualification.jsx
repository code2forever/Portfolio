import React, {useState, useEffect} from 'react'
import "./qualification.css"
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [qualifications, setQualifications] = useState([]);
  const toggleTab = (index)=>{
    setToggleState(index);
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/repos/code2forever/portfolio/contents/qualifications.json');
      const data = await response.json();
      const content = JSON.parse(atob(data.content));
      console.log("qualifications : ", data);
      setQualifications(content);
    };

    fetchData();
  }, []);

  const renderQualifications = (type) => {
    const filteredQualifications = qualifications.filter(q => q.type === type);

    return filteredQualifications.map((qualification, index) => (
      <div className="qualification__data" key={index}>
        {index % 2 === 0 ? (
          <>
            <div className="qualification__data-content">
              <h3 className="qualification__title">{qualification.programme}</h3>
              <span className="qualification__subtitle">
                {qualification.institution}
                <br />
                <span className="qualification__grade">{qualification.grade}</span>
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                {qualification.tenure}
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </>
        ) : (
          <>
          <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div className="qualification__data-content">
              <h3 className="qualification__title">{qualification.programme}</h3>
              <span className="qualification__subtitle">
                {qualification.institution}
                <br />
                <span className="qualification__grade">{qualification.grade}</span>
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                {qualification.tenure}
              </div>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState===1?"qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=>{toggleTab(1)}}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggleState===2?"qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=>{toggleTab(2)}}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState===1?"qualification__content qualification__content-active":"qualification__content"}>
            {renderQualifications('education')}
            
          </div>

          <div className={toggleState===2?"qualification__content qualification__content-active":"qualification__content"}>
          {renderQualifications('experience')}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification