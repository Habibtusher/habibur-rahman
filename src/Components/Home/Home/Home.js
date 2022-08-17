import React from 'react';
import ParticleBackground from '../../ParticleBackground';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Blog from './../Blog/Blog';

const Home = () => {
    return (
        <>
            {/* <div style={{position:"absolute"}} className="bg-dark">
           <ParticleBackground></ParticleBackground>
           </div> */}
          <Header></Header>
          <Project></Project>
          <Blog></Blog>
          <Contact></Contact>
        </>
    );
};

export default Home;