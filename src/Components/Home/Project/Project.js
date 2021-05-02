import React from 'react';
import './Product.css'
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/p1p1.png'
import image2 from '../../../images/p1p2.png'
import image3 from '../../../images/p1p3.png';
import image4 from '../../../images/p2p1.png'
import image5 from '../../../images/p2p2.png'
import image6 from '../../../images/p2p3.png'
import image7 from '../../../images/p3p1.png'
import image8 from '../../../images/p3p2.png'
import image9 from '../../../images/p3p3.png'
import { Link } from 'react-router-dom';
const Project = () => {
    return (
        <div  className="w-100 pBack" >
            <h1 className="text-center p-3">Projects </h1>
            <div className="row m-0 m-auto">
                <div className="col-md-4 mt-4">
                    <div>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img style={{ height: "200px" }}
                                    className="d-block w-100"
                                    src={image1}

                                />

                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img style={{ height: "200px" }}
                                    className="d-block w-100"
                                    src={image2}

                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: "200px" }}
                                    className="d-block w-100"
                                    src={image3}

                                />

                            </Carousel.Item>
                        </Carousel>
                    </div>
                       <div className="text-center p-3 cT">
                        <h4>Punjabi House</h4>
                        <p>Online Shopping Website</p>
                        <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{textDecoration:'none', color:'white'}} href="https://github.com/Habibtusher/PunjabiHouse-client"> GitHub</a></button>
                        <br />
                        <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px" }}> <a style={{textDecoration:'none', color:'white'}} href="https://punjabi-house-a3832.web.app/"> Live</a>  </button>

                    </div>
                </div>
  {/* 2nd */}
                <div className="col-md-4 mt-4">
                    <div>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img style={{ height: "200px" }}
                                className="d-block w-100"
                                src={image4}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img style={{ height: "200px" }}
                                className="d-block w-100"
                                src={image5}
                                alt="Second slide"
                            />
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: "200px" }}
                                className="d-block w-100"
                                src={image6}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    </div>
                    <div className="text-center p-3 cT">
                        <h4>Creative Agency</h4>
                        <p>Online Shopping Website</p>
                        <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{textDecoration:'none', color:'white'}} href="https://github.com/Habibtusher/Creative-Agency-Client"> GitHub</a></button>
                        <br />
                        <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px" }}> <a style={{textDecoration:'none', color:'white'}} href="https://creative-agency-968d3.web.app/"> Live</a> </button>

                    </div>
                </div>
                {/* 3rd */}
                <div className="col-md-4 mt-4">
                 <div>
                 <Carousel>
                        <Carousel.Item interval={1000}>
                            <img style={{ height: "200px" }}
                                className="d-block w-100"
                                src={image7}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img style={{ height: "200px" }}
                                className="d-block w-100"
                                src={image8}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: "200px" }}
                                className="d-block w-100"
                                src={image9}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                 </div>
                 <div className="text-center p-3 cT">
                        <h4>Creative Agency</h4>
                        <p>Online Shopping Website</p>
                        <button className="btn btn-outline-info " style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{textDecoration:'none', color:'white'}} href=""> GitHub</a></button>
                        <br />
                        <button className="btn btn-outline-info " style={{ width: '200px', padding: "5px" }}> <a style={{textDecoration:'none', color:'white'}} href="https://kemne-jai.web.app/home"> Live</a> </button>

                    </div>
                </div>
            </div>
            <div className="text-center mt-5 p-4">
            <Link to="/allProject"> <button   className="btn btn-outline-primary " style={{ width: '200px', padding: "5px", color:'white' }}> See More</button></Link>
           
            </div>
           
        </div>
    );
};

export default Project;