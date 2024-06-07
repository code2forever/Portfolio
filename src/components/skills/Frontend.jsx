import React, { useState, useEffect } from 'react';

const Frontend = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/code2forever/portfolio/contents/frontend-skills.json');
        const data = await response.json();
        const content = JSON.parse(atob(data.content));
        setSkills(content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.slice(0, 3).map((skill, index) => (
            <div key={index} className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {skills.slice(3, 6).map((skill, index) => (
            <div key={index} className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
