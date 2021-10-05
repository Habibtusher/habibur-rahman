import React from 'react';

import './Blogs.css'
const Blogs = ({ blog }) => {
  return (
    <div className="col-md-4 mt-2 ">
      <div id="cardStyle" className="card shadow mx-auto" style={{ width: "20rem" }}>
        <div className="">
          <img style={{ height: '250px' }} src={blog.img} className="card-img-top" alt="" />
        </div>
        <div className="card-body">
          <h5 style={{ height: '45px' }} className="text-center">{blog.name}</h5>
        </div>
        <div className="text-center p-4">
          <a style={{ textDecoration: 'none', color: 'black' }} href={blog.link}> <button className="btn btn-outline-info" style={{ width: '200px', padding: "5px" }}> Read...   </button></a>

        </div>
      </div>
    </div>

  );
};

export default Blogs;