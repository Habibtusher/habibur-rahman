import React from 'react';
import Navigation from '../Navigation/Navigation';
import Typewriter from 'typewriter-effect';
import './Resume.css'
import image from "../../../images/habib.png"
const Resume = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="mainBody">
                <div className="container mt-5 pt-5 vv">
                    <div className="row ">
                        <div className="col-md-6 mt-3">

                            <img src={image} alt="" height="250px" />
                            <div className=" typeWrite mb-4">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 60,
                                        strings: [
                                            "Myself |",
                                        ]
                                    }}
                                />
                                <h2 id="Name">Habibur Rahman</h2>
                            </div>
                            <p>To achieve high career growth through a continuous learning process and keep me dynamic, visionary and competitive with the changing scenario of the world.</p>
                            <button className="btn btn-danger p-2 "> <a style={{ textDecoration: "none", color: 'white' }} href="https://drive.google.com/file/d/1Y1Pwql6stjE4Fe6FbsAhPZIRG1LR9tO3/view?usp=sharing"> Download Resume</a></button>

                        </div>
                        <div className="col-md-6 mt-0">

                            <h3 className="mt-5">Skills</h3>
                            <div className="mt-5">
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">React</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Node Js</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Express</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">JavaScript</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">ES6</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Bootstrap</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">mongo DB</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">HTML5</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">CSS3</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">C</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">REST API</button>
                            </div>
                            <h3 className="mt-5">Familiar</h3>
                            <div className="mt-4">
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Redux</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">OOP</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Algorithm</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Data Structure</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Firebase</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">SEO</button>
                            </div>
                            <h3 className="mt-5">Tools</h3>
                            <div className="mt-4">
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Git</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">VS Code</button>
                            <button style={{marginRight:'7px',marginBottom:'7px'}} type="button" class="btn btn-danger">Chrome Dev Tools</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;