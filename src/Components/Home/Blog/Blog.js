import React from 'react';
import Blogs from '../Blogs/Blogs';
import Navigation from '../Navigation/Navigation';

const Blog = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="pt-5">
            <Blogs></Blogs>
            </div>
        </div>
    );
};

export default Blog;