import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import sumit from "../image/sumit.png";
import nirav from "../image/nirav.jpeg";
import uttam from "../image/uttam.jpg";
import parth from "../image/parth.jpg";
import shruti from "../image/shruti.jpg";

const About = () => {
  const [show, setShow] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const developers = [
    {
      id: 1,
      name: "Sumit Dhameliya",
      image: sumit,
      specialization: "Full-stack Developer",
      skill: "React.js, MySQL, MongoDB, Node.js, PHP, Bootstrap",
    },
    {
      id: 2,
      name: "Nirav Mathukiya",
      image: nirav,
      specialization: "Full-stack Developer",
      skill: "React.js, Next.js, Node.js, Bootstrap",
    },
    {
      id: 3,
      name: "Uttam Dobariya",
      image: uttam,
      specialization: "Front-End Developer",
      skill: "React.js, Next.js, Tailwind CSS, Bootstrap",
    },
    {
      id: 4,
      name: "Parth Dudhatra",
      image: parth,
      specialization: "Front-End Developer",
      skill: "Naggai, Group ma pizza mokalva, Bootstrap",
    },
    {
      id: 5,
      name: "Shruti Ghevariya",
      image: shruti,
      specialization: "Tester",
      skill: "Postman, Documentation",
    },
    // {
    //   id: 6,
    //   name: "Aastha Maniya",
    //   image:  'src/image/default-profile.jpg', // Provide a placeholder image
    //   specialization: "UI/UX Designer",
    //   skill: "Figma, Adobe Photoshop",
    // },
  ];

  const handleImageClick = (developer) => {
    setSelectedDeveloper(developer);
    setShow(true);
  };

  const handlePopoverClose = () => {
    setShow(false);
  };

  return (
    <Container className="p-0">
      <Row className="m-0 p-0">
        {developers.map((developer) => (
          <Col key={developer.id} xs={12} md={4} lg={4} className="mt-4">
            <div className="">
              <img
                src={developer.image}
                alt={developer.name}
                className="w-100"
                onClick={() => handleImageClick(developer)}
                style={{ cursor: "pointer",height:"400px"}}
              />
            </div>
          </Col>
        ))}
      </Row>
      {show && selectedDeveloper && (
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={
            <Popover id="developer-popover">
              <Popover.Header as="h3">{selectedDeveloper.name}</Popover.Header>
              <Popover.Body>
                <p>
                  <strong>Specialization:</strong>{" "}
                  {selectedDeveloper.specialization}
                </p>
                <p>
                  <strong>Skills:</strong> {selectedDeveloper.skill}
                </p>
              </Popover.Body>
            </Popover>
          }
          show={show}
          onHide={handlePopoverClose}
        >
          <span />
        </OverlayTrigger>
      )}
    </Container>
  );
};

export default About;
