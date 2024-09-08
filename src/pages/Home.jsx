import { React } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import i1 from "../image/home.jpg";
import i2 from "../image/home1.jpg";
import { Container, Row, Col, Card, CardBody, CardText, CardFooter} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPenAlt,
  faUser,
  faRocket,
  faHome,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
// Import required modules
import { EffectCreative, Autoplay } from "swiper/modules";
import About from "../component/About";
const Home = () => {
  const backgroundImages = [`url(${i1})`, `url(${i2})`];

  const content = [
    {
      title: "Complaint Management System",
      text: "The Complaint Management System enables students to report issues and concerns easily. It ensures prompt handling and resolution of complaints, fostering a supportive learning environment. Stay informed with real-time updates and track the progress of your submissions.",
      backgroundImage: backgroundImages[0],
    },
    {
      title: "Complaint Management System",
      text: "The Complaint Management System enables students to report issues and concerns easily. It ensures prompt handling and resolution of complaints, fostering a supportive learning environment. Stay informed with real-time updates and track the progress of your submissions.",
      backgroundImage: backgroundImages[1],
    },
    {
      title: "Complaint Management System",
      text: "The Complaint Management System enables students to report issues and concerns easily. It ensures prompt handling and resolution of complaints, fostering a supportive learning environment. Stay informed with real-time updates and track the progress of your submissions.",
      backgroundImage: backgroundImages[1],
    },{
      title: "Complaint Management System",
      text: "The Complaint Management System enables students to report issues and concerns easily. It ensures prompt handling and resolution of complaints, fostering a supportive learning environment. Stay informed with real-time updates and track the progress of your submissions.",
      backgroundImage: backgroundImages[1],
    },
  ];

  //testimonial
  const testimonials = [
    {
      text: "The system is very easy to use and has helped me get my issues resolved quickly.",
      author: "John Doe",
    },
    {
      text: "I appreciate the anonymous complaint feature. It makes me feel safe.",
      author: "Jane Smith",
    },
    // Add more testimonials as needed
  ];
  return (
    <>
      <br />
      <br />
      <br />
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        loop={true}
        speed={1000}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper rounded-2 px-1 shadow"
      >
        {content.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-content"
              style={{
                top: "0",
                minWidth: "80%",
                minHeight: "500px",
                backgroundImage: slide.backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                borderRadius: "15px",
              }}
            >
              <span
                className="mask bg-gradient-default opacity-8 position-absolute"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  top: 0,
                  left: 0,
                  borderRadius: "15px",
                }}
              />
              <div className="title">{slide.title}</div>
              <div className="subtitle">{slide.subtitle}</div>
              <div className="text">{slide.text}</div>
              <br />
              <a
                href="#"
                style={{
                  padding: "10px 20px",
                  marginTop: "15px",
                  borderRadius: "10px",
                  background: "white",
                  color: "black",
                  fontWeight: "700",
                  textDecoration: "none",
                  zIndex: "1",
                }}
              >
                Add Your Complaint
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===============================Created By============================ */}
        <About/>

      {/* ===============================testimonial ============================ */}
      <Container className="my-5 px-2 w-100 shadow p-4 rounded-3">
      <h2 className="text-center text-primary fw-bold mb-4">What Students Say</h2>
      <div className="marquee-container">
        <div className="marquee">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial w-50">
              <Card className=" w-100 shadow " style={{backgroundColor:"#D3D3D3",height:"150px"}}>
                <CardBody>
                  <CardText className="text-black fs-5">"{testimonial.text}"</CardText>
                  <CardFooter className="text-end text-black fs-4">
                    <cite>- {testimonial.author}</cite>
                  </CardFooter>
                </CardBody>
              </Card>
            </div>
          ))}
          {testimonials.map((testimonial, index) => (
            <div key={index + testimonials.length} className="testimonial w-50" >
              <Card className="w-100 shadow" style={{backgroundColor:"#D3D3D3",height:"150px"}}>
                <CardBody>
                  <CardText className="text-black fs-5">"{testimonial.text}"</CardText>
                  <CardFooter className="text-end text-black fs-4">
                    <cite>- {testimonial.author}</cite>
                  </CardFooter>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>

      {/* ------------------------------------------- FAQ -------------------------------------- */}
      <Container className="w-100 px-2">
        <section className="shadow rounded-3 mb-3">
          <h3 className="text-center mt-5 mb-1 pb-2 text-primary fw-bold">
            FAQ
          </h3>
          <p className="text-center mb-4 fw-bold">
            Find the answers for the most frequently asked questions below
          </p>

          <Row className="m-0 p-0">
            <Col md="6" lg="4">
              <div
                className="mb-4  shadow rounded-1 p-3"
                style={{ backgroundColor: "#D3D3D3", height: "80%" }}
              >
                <h6 className="mb-3 text-primary">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-primary pe-2"
                  />{" "}
                  How do I submit a complaint?
                </h6>
                <p >
                  <strong>
                    <u>Absolutely!</u>
                  </strong>{" "}
                  You can easily submit a complaint through our online form. All
                  complaints are securely stored in our system and handled with
                  confidentiality.
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div
                className="mb-4 shadow rounded-1 p-3"
                style={{ backgroundColor: "#D3D3D3", height: "80%" }}
              >
                <h6 className="mb-3 text-primary">
                  <FontAwesomeIcon
                    icon={faPenAlt}
                    className="text-primary pe-2"
                  />{" "}
                  Can I track the status of my complaint?
                </h6>
                <p>
                  <strong>
                    <u>Yes, it is possible!</u>
                  </strong>{" "}
                  Once you submit a complaint, you can track its status in your
                  account. You will receive updates as your complaint is being
                  processed.
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div
                className="mb-4 shadow rounded-1 p-3"
                style={{ backgroundColor: "#D3D3D3", height: "80%" }}
              >
                <h6 className="mb-3 text-primary">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-primary pe-2"
                  />{" "}
                  Can I submit a complaint anonymously?
                </h6>
                <p>
                  Yes, you can! We offer the option to submit complaints
                  anonymously to ensure your privacy and safety. Just select the
                  anonymous option when filling out the form.
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div
                className="mb-4 shadow rounded-1 p-3"
                style={{ backgroundColor: "#D3D3D3", height: "80%" }}
              >
                <h6 className="mb-3 text-primary">
                  <FontAwesomeIcon
                    icon={faRocket}
                    className="text-primary pe-2"
                  />{" "}
                  Can I edit or delete my complaint after submission?
                </h6>
                <p>
                  Yes. You can go to the "My Complaints" section of your
                  dashboard to edit or delete your complaint as long as it is
                  not yet resolved.
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div
                className="mb-4 shadow rounded-1 p-3 "
                style={{ backgroundColor: "#D3D3D3", height: "80%" }}
              >
                <h6 className="mb-3 text-primary">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-primary pe-2"
                  />{" "}
                  Will I be notified when my complaint is resolved?
                </h6>
                <p>
                  <strong>
                    <u>Absolutely!</u>.
                  </strong>{" "}
                  You will receive a notification in your account and via email
                  once your complaint is resolved. You can also check the status
                  in your dashboard at any time.
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div
                className="mb-4 shadow rounded-1 p-3"
                style={{ backgroundColor: "#D3D3D3", height: "80%" }}
              >
                <h6 className="mb-3 text-primary">
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    className="text-primary pe-2"
                  />
                  Is there a limit to the number of complaints I can submit?
                </h6>
                <p>
                  No, there is no limit. You can submit as many complaints as
                  needed. We are here to ensure all your issues are addressed
                  and resolved.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Home;
