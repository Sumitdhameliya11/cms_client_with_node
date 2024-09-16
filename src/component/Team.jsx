import React from 'react';
import sumit from "../image/sumit.png";
import nirav from "../image/nirav.jpg";
import uttam from "../image/uttam.jpg";
import parth from "../image/parth.jpg";
import shruti from "../image/shruti.jpg";
import astha from "../image/astha.jpg"

// Assuming you've already imported images for each developer like sumit, nirav, uttam, etc.

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
        skill: "React.js, Next.js, Node.js, Bootstrap , tailwind , Javascript",
    },
    {
        id: 4,
        name: "Parth Dudhatra",
        image: parth,
        specialization: "Front-End Developer",
        skill: "Naggai, Group ma pizza mokalva, Bootstrap",
    },
    {
        id: 3,
        name: "Uttam Dobariya",
        image: uttam,
        specialization: "Front-End Developer",
        skill: "React.js, Next.js, Tailwind CSS, Bootstrap",
    },
    {
        id: 5,
        name: "Shruti Ghevariya",
        image: shruti,
        specialization: "Tester",
        skill: "Postman, Documentation",
    },
    {
        id: 6,
        name: "Astha Maniya",
        image: astha,
        specialization: "Tester",
        skill: "Postman, Documentation",
    },
];

function Developers() {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Developers</h2>
            <div className="row">
                {developers.map((developer) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={developer.id}>
                        <div className="card h-100 d-flex flex-column shadow-sm">
                            <img
                                src={developer.image}
                                className="card-img-top"
                                alt={developer.name}
                                style={{ objectFit: 'cover', height: '300px' }} // Increased image height
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{developer.name}</h5>
                                <p className="card-text">
                                    <strong>Specialization:</strong> {developer.specialization}
                                </p>
                                <p className="card-text mt-auto">
                                    <strong>Skills:</strong> {developer.skill}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Developers;
