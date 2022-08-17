import React from "react";
import "./Product.css";
import image4 from "../../../images/p2p1.png";
import image5 from "../../../images/p2p2.png";
import image6 from "../../../images/p2p3.png";

import image1 from "../../../images/toprak1.png";
import image2 from "../../../images/toprak2.png";
import image3 from "../../../images/toprak3.png";

import image16 from "../../../images/p6p1.png";
import image17 from "../../../images/p6p3.png";
import image18 from "../../../images/p6p2.png";

import image19 from "../../../images/turnioblog2.png";
import image20 from "../../../images/turnipblog3.png";
import image21 from "../../../images/turnipblog4.png";

import AllProject from "../AllProject/AllProject";
import { Container, Row } from "react-bootstrap";
const project = [
  {
    name: "Creative Agency",
    image1: image4,
    image2: image5,
    image3: image6,
    description:
      "  This site is about hiring Security guard, Gun man, Bodyguard etc. From This site you can easily get that kind of services. For get our services firstly you have to visit ...",
    gitLink: "https://github.com/Habibtusher/Creative-Agency-Client",
    liveLink: "https://creative-agency-968d3.web.app/",
  },
  {
    name: "Doctors Portal",
    image1: image16,
    image2: image17,
    image3: image18,
    description:
      " This site name is Doctors Portal buy using this site anyone can get appointment of available doctors. There are two login system one is for patient another ... ",
    gitLink: "https://github.com/Habibtusher/doctors-portal-client",
    liveLink: "https://doctorsportal9.netlify.app/",
  },
  {
    name: "Toprak",
    image1: image1,
    image2: image2,
    image3: image3,
    description:
      " Toprak is a multipurpose real estate web app where buyers, as well as property owners, can make a perfect deal Bringing out the best deal and customer ...",
    gitLink: "#",
    liveLink: "https://toprak-real.web.app/",
  },
];

const Project = () => {
  return (
    <Container>
      <div id="project">
        <h1 className="text-center mb-5 white">Projects </h1>

        <Row className="pt-5">
          {project.map((pro) => (
            <AllProject pro={pro}></AllProject>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Project;
