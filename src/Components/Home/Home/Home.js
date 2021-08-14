import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Blog from './../Blog/Blog';


const Home = () => {
    return (
        <div>
          <Header></Header>
          <Project></Project>
          <Blog></Blog>
          <Contact></Contact>
        </div>
    );
};

export default Home;