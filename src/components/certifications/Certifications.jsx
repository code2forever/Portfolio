import React, { useEffect, useState } from 'react';
import "./certifications.css";

const Certifications = () => {
  const [certificateItems, setcertificateItems] = useState([]);
  const [filteredcertificateItems, setFilteredcertificateItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/code2forever/portfolio/contents/certifications.json');
        const data = await response.json();
        const content = JSON.parse(atob(data.content));
        setcertificateItems(content);
        setFilteredcertificateItems(content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setFilteredcertificateItems(certificateItems);
    } else {
      setFilteredcertificateItems(certificateItems.filter(item => item.category === category));
    }
    setActiveCategory(category);
  };

  return (
    <section className="certificate section" id="portfolio">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">Certified milestones</span>
      <div className="certificate__filter">
        <span className={`certificate__item ${activeCategory === "all" ? "active-certificate" : ""}`} onClick={() => filterItems("all")}>All</span>
        <span className={`certificate__item ${activeCategory === "web" ? "active-certificate" : ""}`} onClick={() => filterItems("web")}>Web</span>
        <span className={`certificate__item ${activeCategory === "programming" ? "active-certificate" : ""}`} onClick={() => filterItems("programming")}>Programming</span>
        <span className={`certificate__item ${activeCategory === "database" ? "active-certificate" : ""}`} onClick={() => filterItems("database")}>Database</span>
        <span className={`certificate__item ${activeCategory === "typing" ? "active-certificate" : ""}`} onClick={() => filterItems("typing")}>typing</span>
      </div>
      <div className="certificate__container container grid">
  {filteredcertificateItems.slice(0, 6).map((item, index) => (
    <div key={index} className="certificate__card">
      <img src={item.image} alt={item.title} className="certificate__img" />
      <h3 className="certificate__title">{item.title}</h3>
      <div className="certificate__links">
        {item.link && 
          <a href={item.link} className="certificate__button" target="_blank" rel="noopener noreferrer">
            View More<i className="bx bx-right-arrow-alt certificate__button-icon"></i>
          </a>
        }
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Certifications;
