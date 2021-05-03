import React from 'react';
import './Product.css'
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/p1p1.png'
import image2 from '../../../images/p1p2.png'
import image3 from '../../../images/p1p3.png';
import image4 from '../../../images/p2p1.png'
import image5 from '../../../images/p2p2.png'
import image6 from '../../../images/p2p3.png'

import image16 from '../../../images/p6p1.png'
import image17 from '../../../images/p6p3.png'
import image18 from '../../../images/p6p2.png'
import { Link } from 'react-router-dom';
const Project = () => {
    return (
        <div className="w-100 pBack" >
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
                        <h3 style={{color:"white"}}>Punjabi House</h3>
                        <p style={{textAlign:'justify',height:"160px",color:'white'}}>This project name is Punjabi-House.

                        You can buy punjabi from this site. Firstly when you go to my site you can see some collection of punjabi. If you click any Buy Now button, you will see your selected product. But if you are not logged in firstly you need to login.

                        In orders section you can sec your order list.

                        Admin can add product and manage product before that admin needs to logged in.</p>
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
                        <h3 style={{color:"white"}}>Creative Agency</h3>
                        <p style={{textAlign:'justify',height:"160px",color:'white'}}>This Project name is Creative Agency.

This site is about hiring Security guard, Gun man, Bodyguard etc. From This site you can easily get that kind of services. For get our services firstly you have to visit our site and select one services. If your are already logged in our site you will go to the payment page but if you not logged in you have to login first.

</p>
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
                                    src={image16}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img style={{ height: "200px" }}
                                    className="d-block w-100"
                                    src={image17}
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: "200px" }}
                                    className="d-block w-100"
                                    src={image18}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="text-center p-3 cT">
                    <h3 style={{color:"white"}}>Doctors Portal</h3>
                        <p style={{textAlign:'justify',height:"160px",color:'white'}}>This site name is Doctors Portal buy using this site anyone can get appointment of available doctors. There are two login system one is for patient another Doctors. Patient can get appointment and see all appointments. Doctor can add doctor ,can view all appointments.</p>
                        <button className="btn btn-outline-info " style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Habibtusher/doctors-portal-client"> GitHub</a></button>
                        <br />
                        <button className="btn btn-outline-info " style={{ width: '200px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href="https://doctorsportal9.netlify.app/"> Live</a> </button>

                    </div>
                </div>
            </div>
            <div className="text-center mt-5 p-4">
                <Link to="/allProject"> <button className="btn btn-outline-primary " style={{ width: '200px', padding: "5px", color: 'white' }}> See More</button></Link>

            </div>

        </div>
    );
};

export default Project;