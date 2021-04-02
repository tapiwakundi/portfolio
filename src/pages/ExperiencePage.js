import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Projects } from "../Database/Projects";

export default function ExperiencePage({ match }) {
  function expPlace(exp) {
    return exp.id === match.params.id;
  }

  const place = Projects.find(expPlace);

  console.log(match);
  return (
    <div>
      <div className="header">
        <Navbar />
        <div className="header-wrapper">
          <div className="container center">
            <h4>project showcase</h4>
            <h1>{place.name}</h1>
            <p className="header-paragraph">{place.pageDescription}</p>
            <a
              href={place.live}
              className="live-site-link yellow-link"
              target="_blank"
            >
              visit live site →
            </a>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="screen-container">
          <img
            alt="A screenshot of web page"
            src={place.mockup}
            className="screen-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
