"use client";
import React, { useState, useEffect } from "react";
import "./style.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: "/assests/homeBg.jpg",  
      title: "Most Preferred mini-steel plant maker up to 1 Million TPA capacity",
      buttonText: "Know More",
    },
    {
      background: "/assests/homeBg2.jpg",  
      title: "Leading Solutions for Steel Manufacturing",
      buttonText: "Explore Now",
    },
    {
      background: "/assests/homeBg3.jpg",  
      title: "Innovating the Future of Steel Production",
      buttonText: "Get Started",
    },
    {
      background: "/assests/homeBg4.jpg",  
      title: "Innovating the Future of Steel Production",
      buttonText: "Get Started",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const { background, title, buttonText } = slides[currentSlide];

  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div>
        <h1>{title}</h1>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}
