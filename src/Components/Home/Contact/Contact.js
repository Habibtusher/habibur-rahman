import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div id="contact" className='backGround pb-3'>
            <div class="container ">
                <h1 className='text-center p-5'>Contact</h1>
                <div class="row ">
                    <div class="col-md-7 col-sm-12">
                        <div class="p-3 ">
                            <form action="https://formspree.io/f/xrgrekdq" method='POST'>
                                <div className="form-group p-3">
                                    <input type="text" className="form-control p-3" placeholder="Email Address *" />
                                </div>
                                <div className="form-group p-3">
                                    <input type="text" className="form-control p-3" placeholder="Subject *" />
                                </div>
                                <div className="form-group p-3">
                                    <textarea name="message" className="form-control p-3" id="" placeholder="Message *"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary btn-lg submitButton"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-12 text-center p-5">
                        <div class="mt-3 social">
                        <a  style={{marginRight:'15px',fontSize:'35px',color:"black"}} href="https://www.facebook.com/habibur00.rahman"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a style={{marginRight:'15px',fontSize:'35px',color:"black"}} href="https://www.linkedin.com/in/habibur-rahman7/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a style={{marginRight:'15px',fontSize:'35px',color:"black"}} href="https://github.com/Habibtusher"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <div  class="mt-3">
                        <FontAwesomeIcon  style={{marginRight:'10px',fontSize:'20px ', color:'white'}} icon={faPhone} /><span style={{color:'white',fontSize:'20px'}}>+8801771531336</span>
                        <br></br>
                        <FontAwesomeIcon style={{marginRight:'10px',fontSize:'20px ', color:'white',marginTop:'10px'}} icon={faEnvelope} /><span style={{color:'white',fontSize:'20px'}}>habiburrahmantusher7@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
