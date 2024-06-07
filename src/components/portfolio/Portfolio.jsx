import React, { useEffect, useState } from 'react';
import "./portfolio.css";

const Portfolio = () => {
  const [workItems, setWorkItems] = useState([]);
  const [filteredWorkItems, setFilteredWorkItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/code2forever/portfolio/contents/work.json');
        const data = await response.json();
        const content = JSON.parse(atob(data.content));
        setWorkItems(content);
        setFilteredWorkItems(content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setFilteredWorkItems(workItems);
    } else {
      setFilteredWorkItems(workItems.filter(item => item.category === category));
    }
    setActiveCategory(category);
  };

  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Recent Works</span>
      <div className="work__filter">
        <span className={`work__item ${activeCategory === "all" ? "active-work" : ""}`} onClick={() => filterItems("all")}>All</span>
        <span className={`work__item ${activeCategory === "web" ? "active-work" : ""}`} onClick={() => filterItems("web")}>Web</span>
        <span className={`work__item ${activeCategory === "coding" ? "active-work" : ""}`} onClick={() => filterItems("coding")}>Coding</span>
        <span className={`work__item ${activeCategory === "graphic" ? "active-work" : ""}`} onClick={() => filterItems("graphic")}>Graphic</span>
        <span className={`work__item ${activeCategory === "python" ? "active-work" : ""}`} onClick={() => filterItems("python")}>Python</span>
      </div>
      <div className="work__container container grid">
  {filteredWorkItems.slice(0, 6).map((item, index) => (
    <div key={index} className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__links">
        {item.repoLink && 
          <a href={item.repoLink} className="work__button" target="_blank" rel="noopener noreferrer">
            Repo<i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        }
        {item.liveProjectLink &&
          <a href={item.liveProjectLink} className="work__button" target="_blank" rel="noopener noreferrer">
            Live <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        }
        {item.viewMoreLink &&
          <a href={item.viewMoreLink} className="work__button" target="_blank" rel="noopener noreferrer">
            View more <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        }
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Portfolio;
