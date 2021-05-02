import React from 'react';
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
import image10 from '../../../images/p4p1.png'
import image11 from '../../../images/p4p3.png'
import image12 from '../../../images/p4p2.png'
import image13 from '../../../images/p5p1.png'
import image14 from '../../../images/p5p3.png'
import image15 from '../../../images/p5p2.png'
import Navigation from '../Navigation/Navigation';
const AllProject = () => {
    return (
        <div>
            <div>
            <Navigation></Navigation>
            </div>
            <div className="w-100 pBack pt-5" >
                <h1 className="text-center p-5"> All Projects </h1>
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
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Habibtusher/PunjabiHouse-client"> GitHub</a></button>
                            <br />
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href="https://punjabi-house-a3832.web.app/"> Live</a>  </button>

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
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Habibtusher/Creative-Agency-Client"> GitHub</a></button>
                            <br />
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href="https://creative-agency-968d3.web.app/"> Live</a> </button>

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
                            <h4>Kemne Jai</h4>
                            <p>Transport</p>
                            <button className="btn btn-outline-info " style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href=""> GitHub</a></button>
                            <br />
                            <button className="btn btn-outline-info " style={{ width: '200px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href="https://kemne-jai.web.app/home"> Live</a> </button>

                        </div>
                    </div>
                </div>
                <div className="row m-0 m-auto">
                    <div className="col-md-4 mt-4">
                        <div>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img style={{ height: "200px" }}
                                        className="d-block w-100"
                                        src={image12}

                                    />

                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img style={{ height: "200px" }}
                                        className="d-block w-100"
                                        src={image11}

                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={{ height: "200px" }}
                                        className="d-block w-100"
                                        src={image10}

                                    />

                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="text-center p-3 cT">
                            <h4>Cruise Queen</h4>
                            <p>Online Ticket</p>
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Habibtusher/Cruise--Queen"> GitHub</a></button>
                            <br />
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href="https://habibtusher.github.io/Cruise--Queen/"> Live</a>  </button>

                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="col-md-4 mt-4">
                        <div>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img style={{ height: "200px" }}
                                        className="d-block w-100"
                                        src={image13}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img style={{ height: "200px" }}
                                        className="d-block w-100"
                                        src={image14}
                                        alt="Second slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={{ height: "200px" }}
                                        className="d-block w-100"
                                        src={image15}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="text-center p-3 cT">
                            <h4>Panda Ecommerce</h4>
                            <p>Online Shopping Website</p>
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Habibtusher/pandaecommerce"> GitHub</a></button>
                            <br />
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href="https://habibtusher.github.io/pandaecommerce/"> Live</a> </button>

                        </div>
                    </div>
                    {/* 3rd */}
                
                </div>

            </div>
        </div>

    );
};

export default AllProject;