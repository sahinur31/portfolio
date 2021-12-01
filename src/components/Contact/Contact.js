import React from "react";
import Zoom from 'react-reveal/Zoom';
import { FloatingLabel, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt,FaPhone,FaEnvelope } from "react-icons/fa";
export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_msrcwep",
        "template_7033tdq",
        e.target,
        "user_AvRy9EKlSuedHbSJ3RMtc"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert(
            "Email successfully sent, As soon as possible i will reply"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      id="contact"
      className="contact-area py-5"
      style={{ backgroundColor: "#0c121a" }}
    >
      <Zoom>
      <div className="container">
      <h2 className="text-center py-4 theme-color">Contact Me</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="contact-left text-center text-white">
              <div className="contact-single p-3 h5 border mb-3">
                <FaMapMarkerAlt />
                <p className="mt-3">Rampura,Dhaka</p>
              </div>
              <div className="contact-single p-3 h5 border mb-3">
                <FaPhone />
                <p className="mt-3">+880 18319 39225</p>
              </div>
              <div className="contact-single p-3 h5 border">
                <FaEnvelope />
                <p className="mt-3">sahinur4841@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="contact text-center">
              
              <Form onSubmit={sendEmail}>
                <Form.Control
                  className="mb-3 bg-white"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                />

                <Form.Control
                  className="mb-3"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  required
                />
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />

                <FloatingLabel
                  className="mb-3"
                  controlId="floatingTextarea2"
                  label="Your Message"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    name="message"
                    required
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <button
                  className="btn text-center theme-bg text-white mt-3 px-4"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      </Zoom>
    </div>
  );
}
