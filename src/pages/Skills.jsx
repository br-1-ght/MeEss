import React, { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skillsData = [
    { id: 1, image: './assets/images/tolu9.jpg', title: "MY WORKS" },
    { id: 2, image: './assets/images/tolu4.jpg', title: "MY WORKS" },
    { id: 3, image: './assets/images/tolu5.jpg', title: "MY WORKS" },
    { id: 4, image: './assets/images/tolu6.jpg', title: "MY WORKS" },
    { id: 5, image: './assets/images/tolu10.jpg', title: "MY WORKS" },
    { id: 6, image: './assets/images/tolu8.jpg', title: "MY WORKS" },
  ];

  const imageRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.4 }
    );

    imageRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      imageRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [visibleIndexes]);

  return (
    <section className="skills-section">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-header">
      Beading & Craftsmanship, Design Skills, Product Customization, Shipping & Logistics
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={skill.id} className="skill-card">
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              data-index={index}
              src={skill.image}
              alt={skill.title}
              className={`skill-image ${visibleIndexes.includes(index) ? "visible" : ""}`}
            />
            <div className="skill-title">{skill.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
