import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaGithub, FaLink } from "react-icons/fa";
import Slide from "react-reveal/Slide";

const Details = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState({});
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((f) => f.id == id);
        // console.log(data);
        // console.log(p);
        setProjects(p);
      });
  }, [id]);
  
  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="projects text-center">
                <Slide bottom>
                  <h2 className="py-5 theme-color">Projects Details</h2>
                </Slide>
              </div>
            </div>
            <Slide bottom>
              <div className="row justify-content-center">
                <div className="col-md-8 mb-3">
                  <div className="single-projects p-3">
                    <div className="d-flex">
                      <img
                      style={{width: '33%'}}
                        className="img-fluid mb-3"
                        src={projects.img}
                        alt=""
                      />
                      <img
                      style={{width: '33%'}}
                        className="img-fluid mb-3"
                        src={projects.img2}
                        alt=""
                      />
                      <img
                      style={{width: '33%'}}
                        className="img-fluid mb-3"
                        src={projects.img3}
                        alt=""
                      />
                    </div>
                    <h3> {projects.name}</h3>
                    <h6>{projects.des}</h6>
                    <h5>{projects.tech}</h5>
                    <ul>
                        <li>{projects.fulldes}</li>
                    </ul>
                    <div className="">
                      <a href={projects.git} target="blank">
                        <button className="btn theme-bg text-white me-3">
                          <FaGithub /> Github
                        </button>
                      </a>
                      <a href={projects.live} target="blank">
                        <button className="btn theme-bg text-white ">
                          <FaLink /> Live Project
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
