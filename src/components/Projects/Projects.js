import React, { useEffect, useState } from "react";
/* import project1 from "../../images/project1.png";
import project12 from "../../images/project12.png";
import project13 from "../../images/project13.png";
import project2 from "../../images/project2.png";
import project22 from "../../images/project22.png";
import project23 from "../../images/project23.png";
import project3 from "../../images/project3.png";
import project32 from "../../images/project32.png";
import project33 from "../../images/project33.png";
import project4 from "../../images/project4.png";
import project42 from "../../images/project42.png";
import project43 from "../../images/project43.png";
import project5 from "../../images/project5.png";
import project52 from "../../images/project52.png";
import project53 from "../../images/project53.png"; */
import { FaGithub, FaLink } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import "./Projects.css";
import { Link } from "react-router-dom";
const Projects = () => {
 /*  const projects = [
    {
      id: 1,
      name: "Cycle Wala",
      img: "https://i.ibb.co/GFskThY/project1.png",
      img2: "https://i.ibb.co/tqysL5x/project12.png",
      img3: "https://i.ibb.co/23gbycG/project13.png",
      des: "A complete IT enable service where you can buy different types of cycle.",
      tech: "React, Node.js, Mongodb, Bootstrap, Heroku",
      fulldes:
        "User can order cycle and give a review for each cycle. Register user with email, password and Google sign in option with firebase auth. Well managed dashboard for both admin and user with customizable service.",
      git: "https://github.com/sahinur31/Cyclewala-client",
      live: "https://cycle-wala-99d26.web.app/",
    },
    {
      id: 2,
      name: "Khana Food Delivery",
      img: "https://i.ibb.co/7jgM6rT/project2.png",
      img2: "https://i.ibb.co/w65FN39/project22.png",
      img3: "https://i.ibb.co/SNH5mDx/project23.png",
      des: "A full-stack Food Delivery Service for order food by different category.",
      tech: "React, Node.js, Mongodb, Bootstrap, Heroku",
      fulldes:
        "Login via Google sign in option with firebase authentication. Login for see food details with different types of restaurant and order food.User panel for see orders information and cancel order.",
      git: "https://github.com/sahinur31/Khana-Food-Delivery-Service-Client",
      live: "https://khana-food-delivery.web.app/",
    },
    {
      id: 3,
      name: "Deeba Care Center",
      img: "https://i.ibb.co/vsN8m7g/project3.png",
      img2: "https://i.ibb.co/2hcfKyv/project32.png",
      img3: "https://i.ibb.co/Jqfh6Pg/project33.png",
      des: "his project is healthcare related website for see doctor’s details and make appointment",
      tech: "React, Node.js, Mongodb, Bootstrap, Heroku",
      fulldes:
        "Register user with email, password and Google sign in with firebase authentication.If a user logged in user see doctor’s details and shop health related product.A responsive website for both desktop and mobile device.",

      git: "https://github.com/sahinur31/deeba-care-center",
      live: "https://deeba-care-center.web.app/",
    },
    {
      id: 4,
      name: "Beacon IT",
      img: "https://i.ibb.co/MkTqXfF/project4.png",
      img2: "https://i.ibb.co/mF1FsHz/project42.png",
      img3: "https://i.ibb.co/PxJfLnV/project43.png",
      des: "This project is educational website for valuable course. ",
      tech: "Html, CSS, JS, REACT JS,Netlify",
      fulldes:
        "Register user with Google sign in with firebase authentication.If a user logged in user buy courses.",

      git: "https://github.com/sahinur31/Beacon-IT",
      live: "https://beaconit-nur-web.netlify.app/",
    },
    {
      id: 5,
      name: "Shopping Store",
      img: "https://i.ibb.co/rtGqT6q/project5.png",
      img2: "https://i.ibb.co/16n4v3n/project52.png",
      img3: "https://i.ibb.co/8YqrFQr/project53.png",
      des: "This project is shopping related website for cart a product. Html, CSS, JS, Netlify",
      tech: "Html, CSS, JS, REACT JS,Netlify",
      fulldes:
        "User cart different types of product for shopping and see cart total.",

      git: "https://github.com/sahinur31/shopping-store",
      live: "https://shopping-store-nur.netlify.app",
    },
  ]; */
  const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
  return (
    <>
      <div
        id="projects"
        className="py-5"
        style={{ backgroundColor: "#0c121a" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="projects text-center">
                <Slide bottom>
                  <h2 className="py-5 theme-color">Projects</h2>
                </Slide>
              </div>
            </div>
            <Slide bottom>
              <div className="row text-white">
                {projects.map((project) => (
                  <div key={project.id} className="col-md-4 mb-3">
                    <div className="single-projects card p-3 bg-dark">
                      <img
                        className="img-fluid mb-3"
                        src={project.img}
                        alt=""
                      />
                      <h4>{project.name}</h4>
                      <p>{project.des}</p>
                      <Link to={`/details/${project.id}`}>
                        <button className="btn theme-bg text-white w-25 mb-3">
                          Details
                        </button>
                      </Link>
                      <div className="">
                            <a href={project.git} target="blank"><button className="btn theme-bg text-white me-3"><FaGithub /> Github</button></a>
                            <a href={project.live} target="blank"><button className="btn theme-bg text-white "><FaLink /> Live Project</button></a>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
