"use client";
import React from "react";
import "./style.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="left-section">
          <h2>Electrotherm E&T Division</h2>
          <p>
            The Engineering & Technologies (E&T) division of Electrotherm is a
            leading designer & manufacturer of Induction Melting Furnaces,
            Electric Arc Furnaces, Metal Refining Konverters (AOD), Electrotherm
            Refining Furnaces, High Speed Continuous Casting Machine…
          </p>
          <button className="read-more">
            <a href="#">CORPORATE MOVIE</a>
          </button>
        </div>

        <div class="middle-section">
          <input
            type="radio"
            id="quality"
            name="section"
            class="section-radio"
          />
          <label for="quality" class="section-label">
            Quality.
          </label>

          <input type="radio" id="rd" name="section" class="section-radio" />
          <label for="rd" class="section-label">
            R&D.
          </label>

          <input
            type="radio"
            id="awards"
            name="section"
            class="section-radio"
          />
          <label for="awards" class="section-label">
            Awards.
          </label>
        </div>

        <div className="right-section">
          <p>
            Electrotherm’s full-fledged state-of-the-art manufacturing and
            testing facilities are spread over an expansive area of more than
            90,000 sq. metres at Palodia, on the outskirts of Ahmedabad. It has
            well equipped machine/assembly shops facilitated ...
          </p>
          <button className="read-more">
            <a href="#">Learn more</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
