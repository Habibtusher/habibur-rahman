
import React from 'react';
import Typewriter  from 'typewriter-effect';
import image from "../../../images/ha.png"

import './MainBody.css'
const MainBody = () => {
    return (
       <div className="mainBody container">
            <div className="pt-5">
            <div className="row align-items-center">
                <div className="col-md-6">

                    <img src={image} alt="" height="350px" />
                </div>
                <div className="col-md-6 text-center">

                <div className="typeText mb-4">
                  <Typewriter
                   options={{
                       autoStart:true,
                       loop:true,
                       delay:120,
                       strings:[
                           "Welcome To",
                           
                       ]
                   }}
       
                   />
                  </div>

                    <h1 className="name">Habibur Rahman's World</h1>

                  <div className="typeText mb-5 mt-3">
                  <Typewriter
                   options={{
                       autoStart:true,
                       loop:true,
                       delay:120,
                       strings:[
                           "Full-Stack Web Developer"
                            
                       ]
                   }}
       
                   />
                  </div>

                    <button  className="btn btn-danger p-2 "> <a style={{textDecoration:"none",color:'white'}} href="https://drive.google.com/uc?id=1_SUe69oVmYJNj70OUXv6Rkk_CYY2O5pL&export=download"> Download Resume</a></button>
               
                </div>
            </div>
        </div>
       </div>

    );
};

export default MainBody;