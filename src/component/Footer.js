import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-white">
        <Container className="p-4 pb-0">
          <section className="mb-4">
            <Button
              color="link"
              className="m-1"
              style={{ backgroundColor: "#3b5998", color: "white" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Button>

            <Button
              color="link"
              className="m-1"
              style={{ backgroundColor: "#55acee", color: "white" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button
              color="link"
              className="m-1 "
              style={{ backgroundColor: "#ac2bac", color: "white" }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Button>
          </section>
        </Container>
        <div
          className=" text-center p-3 text-primary fw-bold"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
           <div> 
           © 2024 Copyright :
           <a
              className="text-black text-decoration-none"
              href="https://www.linkedin.com/in/sumitdhameliya11/"
              target="_blank"
            >
              Sumit Dhameliya
            </a></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
