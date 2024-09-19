import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import sumit from '../image/sumit.png';
import nirav from '../image/nirav.jpg';
import parth from '../image/parth.jpg';
import uttam from '../image/uttam.png';
import shruti from '../image/shruti.jpg';
import astha from '../image/astha.jpg';
import '../css/team.css';

const developers = [
  {
    id: 1,
    name: "Sumit Dhameliya",
    image: sumit,
    specialization: "Full-stack Developer",
    skill: "MongoDB, Express, React.js, Node.js, MYSql, PHP, Bootstrap,PostMan,Restfull Api,TypeScript,Javascript",
    github: "https://github.com/Sumitdhameliya11",
    linkedin: "https://www.linkedin.com/in/sumitdhameliya11/",
  },
  {
    id: 2,
    name: "Nirav Mathukiya",
    image: nirav,
    specialization: "Full-stack Developer",
    skill: "React.js, Next.js, Node.js, Bootstrap, JavaScript",
    github: "https://github.com/NiravMathukiya",
    linkedin: "https://www.linkedin.com/in/nirav-mathukiya007",
  },
  {
    id: 3,
    name: "Parth Dudhatra",
    image: parth,
    specialization: "Front-End Developer",
    skill: "React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, SASS, UI Libraries",
    github: "https://github.com/imparth7",
    linkedin: "https://linkedin.com/imparth7",
  },
  {
    id: 4,
    name: "Uttam Dobariya",
    image: uttam,
    specialization: "Front-End Developer",
    skill: "React.js, React Native, Tailwind CSS, Bootstrap, JavaScript, Chakra UI",
    github: "https://github.com/uttam172",
    linkedin: "https://www.linkedin.com/in/uttamdobariya/",
  },
  {
    id: 5,
    name: "Shruti Ghevariya",
    image: shruti,
    specialization: "Tester",
    skill: "Postman, Documentation,RFT",
    github: "https://github.com/shruti-ghevariya",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 6,
    name: "Astha Maniya",
    image: astha,
    specialization: "Tester",
    skill: "Postman, Documentation,RFT",
    github: "https://github.com/AasthaManiya35",
    linkedin: "https://linkedin.com/",
  },
];

function Team() {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (developer) => {
    setSelectedDeveloper(developer);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedDeveloper(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Our Developers</h2>
      <div className="row">
        {developers.map((developer) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={developer.id}>
            <div className="card h-100 d-flex flex-column shadow-sm" onClick={() => handleCardClick(developer)} style={{ borderRadius: 10, overflow: 'hidden' }}>
              <img
                src={developer.image}
                className="card-img-top"
                alt={developer.name}
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, background: '#FFFA', width: "94%", margin: "3.5% 3%", borderRadius: 15 }}>
                <h5 className="card-title">{developer.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDeveloper && (
        <Modal show={showModal} onHide={handleClose} dialogClassName="modal-dialog-centered" style={{ zIndex: 999999999999 }}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedDeveloper.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedDeveloper.image}
              className="img-fluid mb-3"
              alt={selectedDeveloper.name}
              style={{ objectFit: 'cover', width: '100%', aspectRatio: "4/3", borderRadius: "25px", }}
            />
            <h4><strong>{selectedDeveloper.specialization}</strong></h4>
            <p>{selectedDeveloper.skill}</p>
            <div style={{ display: 'flex', gap: 10}}>
              <p><a href={selectedDeveloper.github} target="_blank" className='btn btn-primary'>Github</a></p>
              <p><a href={selectedDeveloper.linkedin} target="_blank" className='btn btn-primary'>Linkedin</a></p>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default Team;
