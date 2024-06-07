import React,{useState} from 'react'
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index)=>{
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Expertise</h2>
      <span className="section__subtitle">I've had the opportunity to put my hands on
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web<br/> Development
            </h3>
          </div>

          <span className="services__button" onClick={()=>{toggleTab(1)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState===1?"services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">Expertise with more than 1 year of experience. Providing quality work to clients and companies</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I position company brand.
                    </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Design and mockups of products for companies.
                    </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Data Structures & <br></br>
              Algorithms
            </h3>
          </div>

          <span className="services__button" onClick={()=>{toggleTab(3)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState===3?"services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
              <h3 className="services__modal-title">Data Structures & Algorithms</h3>
              <p className="services__modal-description">Built a strong foundation through solving 1800+ coding problems across multiple coding platforms.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      ⭐⭐⭐ at <a className="service__link" href="https://leetcode.com/u/agraharikalash/">leetcode</a> with 700+ problems solved and Max rating 1713.
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    1st Rank in Institution on <a className="service__link" href="https://www.geeksforgeeks.org/colleges/g-l-bajaj-group-of-institutions-mathura/students/"> GFG Institute Leaderboard.</a>
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    2300+ score achieved and 700+ problems solved on <a className="service__link" href="https://www.geeksforgeeks.org/user/agraharik9696/"> GeeksForGeeks.</a>
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Master rank at <a className="service__link" href="https://www.naukri.com/code360/profile/agraharikalash">CodingNinjas</a> with 50+ badges and 70K+ EXP.
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Attained the Grand Master (Highest) position on the <a className="service__link" href="https://www.naukri.com/code360/profile/agraharikalash">Codestudio</a> Leaderboard.
                    </p>
                </li>


              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br/> Designer
            </h3>
          </div>

          <span className="services__button" onClick={()=>{toggleTab(2)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState===2?"services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">Bringing over 1 year of expertise to the table, delivering top-notch solutions to both clients and companies alike.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Crafting Intuitive Interfaces.
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Enhancing User Engagement.
                    </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Elevating User Experience.
                    </p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Services