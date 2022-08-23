import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="aboutPage">
      <Header />
      <h1>About</h1>
      <p>some about cool text</p>
      <p>some another text</p>
    </div>
  );
}

export default AboutPage;
