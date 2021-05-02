import React from 'react';
import blog1 from '../../../images/blog1.png'
import blog2 from '../../../images/blog2.jpg'
import blog3 from '../../../images/blog3.png'
import './Blogs.css'
const Blogs = () => {
  return (
    <div id="blogs" className='blogs p-5'>
      <h1 className='text-center '>Blogs</h1>
      <div className="row mt-5">

        <div className="col-md-4 p-3">
          <div class="card mb-3 p-3" style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img style={{height:"250px",width:'100%'}} src={blog1} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">All the fundamental React.js</h5>
                  <p style={{height:'150px'}} class="card-text">Before you begin, please note that this is a beginner-friendly guide that covers the concepts I classify as fundamentals for working with React. </p>
                  <a href="https://medium.com/edge-coders/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2"> <button className='btn btn-outline-info'>Read More..</button> </a>
                 
                
                </div>
              </div>
            </div>
          </div>
        </div>
 
 {/* 2nd */}

 <div className="col-md-4 p-3">
          <div class="card mb-3 p-3 " style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img style={{height:"250px",width:'100%'}} src={blog2} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Coding News Summary</h5>
                  <p style={{height:'150px'}} class="card-text">Chrome 61 added support for ES modules as well. This means the browser now natively allows a developer to the use the import</p>
                  <a href="https://medium.com/edge-coders/coding-news-summary-react-16-major-language-releases-chrome-61-and-yarn-36867bc9fdee"> <button className='btn btn-outline-info'>Read More..</button> </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 3rd */}
<div className="col-md-4 p-3">
          <div class="card mb-3 p-3" style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img style={{height:"250px",width:'100%'}} src={blog3} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">You don’t know Node</h5>
                  <p style={{height:'150px'}} class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="https://medium.com/edge-coders/you-dont-know-node-6515a658a1ed"> <button className='btn btn-outline-info'>Read More..</button> </a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Blogs;