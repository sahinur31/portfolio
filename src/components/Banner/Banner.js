import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
// import profile from "../../images/sahinur-pic.jpg";
import Typewriter from "typewriter-effect";
import './Banner.css';
import Fade from 'react-reveal/Fade';
// import Particle from "../Particle/Particle";
const Banner = () => {
  return (
    <div id="home" className="particle-content main d-flex align-items-center justify-content-center text-center">
      <div className="home-body d-flex align-items-center justify-content-center">
        <div className="mt-5" data-aos="fade-in" data-aos-easing="ease-in-out-cubic">
          <Fade bottom>
          <div className="profile-img">
            {/* <img className="img-fluid mb-2" src={profile} alt="" /> */}
          </div>
          <div className="intro text-white">
            <h1 className="display-3">Hi</h1>
            <h2 className="mb-2 display-4 fw-bold">I'm <span className="text-info">Nurar Nahar</span></h2>
            <div className="type-writer">
              <h4 className="text-warning">
                <Typewriter
                  options={{
                    strings: [
                      "Front End Developer",
                      "React Developer",
                      "JavaScript Developer",
                    ],

                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </h4>
            </div>
            <div className=" d-flex justify-content-center ">
              <div className="icons d-flex" data-aos="fade-up">
                <a href="https://github.com/sahinur31" target="blank">
                  <h2>
                    <FaGithub />
                  </h2>
                </a>
                <a
                  href="https://www.facebook.com/sahinur.me/"
                  target="blank"
                >
                  <h2>
                    <FaFacebook />
                  </h2>
                </a>
                <a
                  href="https://www.linkedin.com/in/nurarnahar/"
                  target="blank"
                >
                  <h2>
                    <FaLinkedin />
                  </h2>
                </a>
                <br />
               
              </div>
              
            </div>
            <a
                  className="btn resume text-white my-2"
                  href="https://drive.google.com/uc?id=1SFB7TialVkUZi8Nfa0yw6TYVCXtluJoW&export=download"
                  target="blank"
                  download
                >
                  Download Resume
                </a>
          </div>
          </Fade>
        </div>
      </div>
      {/* <div className="particles">
                <Particle></Particle>
            </div> */}
    </div>
  );
};

export default Banner;
