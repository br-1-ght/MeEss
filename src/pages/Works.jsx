import React, { useEffect, useRef, useState } from "react";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      image: './assets/images/tolu.jpg',
      title: "WHAT I SELL",
      highlight: ""
    },
    {
      id: 2,
      image: './assets/images/tolu2.jpg',
      title: "WHAT I SELL",
      highlight: ""
    },
    {
      id: 3,
      image: './assets/images/tolu3.jpg',
      title: "WHAT I SELL",
      highlight: ""
    },
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
    <section className="projects-section">
      <h2 className="section-title">PROJECT</h2>
      <h3 className="projects-subtitle">
        A collection on what I sell 
      </h3>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={project.id} className="project-card">
            {project.highlight && (
              <div className="project-highlight">{project.highlight}</div>
            )}
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              data-index={index}
              src={project.image}
              alt={project.title}
              className={`project-image ${visibleIndexes.includes(index) ? "visible" : ""}`}
            />
            <div className="project-title"><h4>{project.title}</h4></div>
          </div>
        ))}
      </div>
    </section>
  );
}
