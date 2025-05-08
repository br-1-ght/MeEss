import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi,</h1>
          <h1>I am Adeleye Suliat Tolulope</h1>
          <p>
          Hi, I'm Tolulope 🌸
            I'm a creative soul with a passion for making beautiful things with my hands. I specialize in handmade bead accessories—from bracelets to necklaces and custom pieces that add elegance and personality to any outfit.
            But that’s not all I do.
            I also run a small online store where I sell everyday essentials—items you need, love, and can conveniently get at your fingertips. Whether you're looking for something stylish, practical, or unique, I’m here to make shopping simple and personal.
            For me, this is more than just a business—it's about expression, quality, and making people feel good. Every item I create or sell is something I believe in, and I’m so excited to share my work with you.
            Let’s connect, shop, and maybe even create something beautiful together. 💫
          </p>

          <div className="email-container">
            <input type="email" placeholder="Email" className="email-input" />
            <button className="explore-btn">Explore My Work</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            ref={imageRef}
            src="./assets/images/tolu11.jpg"
            alt="Profile"
            className={`fade-image ${isVisible ? "visible" : ""}`}
          />
        </div>
      </div>
    </section>
  );
}
