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
                <h3 style={{ color: "white",padding:"10px" }}>{pro.name}</h3>
                <p className="description" >{pro.description}
                </p>

                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-outline-info" style={{ width: '180px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href={pro.gitLink}> GitHub</a></button>
                    </div>
                    <div className="col-md-6 mb-3">
                        <button className="btn btn-outline-info" style={{ width: '180px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href={pro.liveLink}> Live</a>  </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default AllProject;