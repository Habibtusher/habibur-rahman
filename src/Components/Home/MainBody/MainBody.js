
import React from 'react';
import Typewriter  from 'typewriter-effect';
import image from "../../../images/habib.png"
import './MainBody.css'
const MainBody = () => {
    return (
       <div className="mainBody">
            <div className="container mt-5 pt-5 vv">
            <div className="row align-items-center">
                <div className="col-md-5 mt-3">

                    <img src={image} alt="" height="300px" />
                </div>
                <div className="col-md-7 text-center">

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
                           "Junior Web Developer"
                            
                       ]
                   }}
       
                   />
                  </div>

                    <button  className="btn btn-danger p-2 "> <a style={{textDecoration:"none",color:'white'}} href="https://drive.google.com/file/d/1Y1Pwql6stjE4Fe6FbsAhPZIRG1LR9tO3/view?usp=sharing"> Download Resume</a></button>
                </div>
            </div>
        </div>
       </div>

    );
};

export default MainBody;