import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kalash Agrahari</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#testimonial" className="footer__link">Testimonials</a>
          </li>
        </ul>
        <div className="footer__social">
      <a href="https://linktr.ee/kalashagrahari" className="footer__social-link" target='_blank'>
      <i class='bx bx-link'></i>
      </a>
      <a href="https://kalashagrahari.blogspot.com/" className="footer__social-link" target='_blank'>
      <i class='bx bxl-blogger'></i>
      </a>
      <a href="https://github.com/code2forever" className="footer__social-link" target='_blank'>
      <i class='bx bxl-github' ></i>
      </a>
        </div>

        <span className="footer__copy">
        &#169; CodeForever. All rigths reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer