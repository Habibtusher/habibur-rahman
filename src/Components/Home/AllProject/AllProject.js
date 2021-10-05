import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./AllProject.css"
const AllProject = ({ pro }) => {

    return (
        <div className="col-md-3 mt-5">
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img style={{ height: "220px" }}
                            className="d-block"
                            src={pro.image1} />

                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img style={{ height: "220px" }}
                            className="d-block w-100"
                            src={pro.image2}/>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ height: "220px" }}
                            className="d-block w-100"
                            src={pro.image3}/>

                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="text-center cT">
                <h3 style={{ color: "white",padding:"5px" }}>{pro.name}</h3>
                <p className="description" >{pro.description}
                </p>

                <div className="row">
                    <div className="col-md-6">
                        <a className="btn btn-outline-info button" style={{ marginBottom: '20px'  }} href={pro.gitLink}>GitHub</a>
                    </div>
                    <div className="col-md-6 mb-3">
                       <a className="btn btn-outline-info button" href={pro.liveLink}>Live</a>  
                    </div>
                </div>
            </div>
        </div>


    );
};

export default AllProject;