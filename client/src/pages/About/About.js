import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://imgur.com/a/LFJXVfK"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am a final-year Computer Science student with extensive expertise in full stack development. My experience spans both front-end and back-end technologies, including React, Vue.js, Express.js, Django, and Flask. I have successfully developed various web applications, such as e-commerce platforms, social media applications, and recipe-sharing websites, utilizing my skills in user authentication, API integration, and real-time updates with WebSockets. My passion for technology and problem-solving drives me to continuously learn and innovate in the field of web development.


              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
