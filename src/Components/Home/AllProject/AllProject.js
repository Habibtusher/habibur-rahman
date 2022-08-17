import React from "react";
import { Button, Card, Carousel, Col, Container } from "react-bootstrap";
import "./AllProject.css";
const AllProject = ({ pro }) => {
  return (
    // <div className="col-md-4 mt-5">
    //   <div>
    //     <Carousel>
    //       <Carousel.Item interval={1000}>
    //         <img
    //           style={{ height: "220px" }}
    //           className="d-block"
    //           src={pro.image1}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item interval={500}>
    //         <img
    //           style={{ height: "220px" }}
    //           className="d-block w-100"
    //           src={pro.image2}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           style={{ height: "220px" }}
    //           className="d-block w-100"
    //           src={pro.image3}
    //         />
    //       </Carousel.Item>
    //     </Carousel>
    //   </div>
    //   <div className="text-center cT">
    //     <h3 style={{ color: "white", padding: "5px" }}>{pro.name}</h3>
    //     <p className="description">{pro.description}</p>

    //     <div className="row">
    //       <div className="col-md-6">
    //         <a
    //           className="btn btn-outline-info button"
    //           style={{ marginBottom: "20px" }}
    //           href={pro.gitLink}
    //         >
    //           GitHub
    //         </a>
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <a className="btn btn-outline-info button" href={pro.liveLink}>
    //           Live
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    // </div>
    <Col className="project-card" xs={12} md={6} xl={4}>
      <Card className="text-center" style={{ width: "22rem" }}>
        <Card.Img style={{ height: "230px" }} variant="top" src={pro.image1} />
        <Card.Body>
          <Card.Title>{pro.name}</Card.Title>
          <Card.Text style={{ height: "105px" }}>{pro.description}</Card.Text>
          <div className="d-flex justify-content-center">
            <div>
              <a
                className="btn btn-outline-info button mr-2"
                style={{ marginBottom: "20px" }}
                href={pro.gitLink}
              >
                GitHub
              </a>
            </div>
            <div >
              <a className="btn btn-outline-info button" href={pro.liveLink}>
                Live
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllProject;
