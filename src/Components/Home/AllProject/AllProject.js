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
import image16 from '../../../images/p6p1.png'
import image17 from '../../../images/p6p3.png'
import image18 from '../../../images/p6p2.png'
import Navigation from '../Navigation/Navigation';
const AllProject = () => {
    return (
        <div>
            <div>
            <Navigation></Navigation>
            </div>
            <div className="w-100 pBack pt-5 pb-5" >
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
                            <h3 style={{color:"white"}}>Cruise Queen</h3>
                            <p style={{textAlign:'justify',height:"160px",color:'white'}}>This is an online Ticket buying website named Cruise Queen. This Website designed using HTML, CSS, and Javascript. A user can select a traveling date and purchase two types of tickets Business class and economy class. The back-end of this Project is under construction</p>
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
                        <h3 style={{color:"white"}}>Panda E-commerce</h3>
                        <p style={{textAlign:'justify',height:"160px",color:'white'}}>This is an online E-commerce website named Panda eCommerce. This Website designed using HTML and CSS. The back-end of this Project is under construction.</p>
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/Habibtusher/pandaecommerce"> GitHub</a></button>
                            <br />
                            <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href="https://habibtusher.github.io/pandaecommerce/"> Live</a> </button>

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
                        <h3 style={{color:"white"}}>Kemne Jai</h3>
                            <p style={{textAlign:'justify',height:"160px",color:'white'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas consequuntur fugit inventore quasi iusto earum porro, similique quis odio. Dolore, earum quas fugiat magni officiis mollitia voluptatem temporibus eligendi amet!</p>
                            <button className="btn btn-outline-info " style={{ width: '200px', padding: "5px", marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href=""> GitHub</a></button>
                            <br />
                            <button className="btn btn-outline-info " style={{ width: '200px', padding: "5px" }}> <a style={{ textDecoration: 'none', color: 'white' }} href="https://kemne-jai.web.app/home"> Live</a> </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default AllProject;