import React from "react";
import Zoom from "react-reveal/Zoom";
import profile from "../../images/sahinur-pic.jpg";
import ProgressBar from "react-animated-progress-bar";
import "./About.css";
const About = () => {
  return (
    <div
      id="about"
      className="about-area py-5 text-white"
      style={{ backgroundColor: "#222" }}
    >
      <Zoom>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact text-center">
                <h2 className="text-center py-5 theme-color">About Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-contact">
                <h2 className="text-capitalize display-5 fw-bold mb-2 theme-color">
                  5 years experience on Front End Development
                </h2>
                <p>
                  To build my career as a front-end and back-end developer where
                  I can show my skills and prove myself as a good team player
                  and a quick learner. Passionate web developer with a spur to
                  accept new challenges. Always eager to learn new technology to
                  make my skill more strong.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-contact">
                <img className="img-fluid mb-2" src={profile} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-contact">
                <div className="progress-about">
                    <p className="mb-0">Javascript</p>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="85"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="transparent"
                    trackBorderColor="grey"
                  />
                </div>
                <div className="progress-about">
                    <p className="mb-0">React JS</p>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="90"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="transparent"
                    trackBorderColor="grey"
                  />
                </div>
                <div className="progress-about">
                    <p className="mb-0">Node JS</p>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="80"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="transparent"
                    trackBorderColor="grey"
                  />
                </div>
                <div className="progress-about">
                    <p className="mb-0">MongoDB</p>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="60"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="transparent"
                    trackBorderColor="grey"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default About;
