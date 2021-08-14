import React from 'react';
import Blogs from '../Blogs/Blogs';
import blog1 from '../../../images/blog1.png'
import blog2 from "../../../images/Free Courses to learn JavaScript.jpg"
import blog3 from '../../../images/ls interview.png'
import Navigation from '../Navigation/Navigation';
const blogs = [
    {
        name: "10 Important thing about JavaScript",
        img: blog2,
        link: "https://habiburrahmantusher7.medium.com/10-important-thing-about-javascript-186949218e7a"

    },
    {
        name: "10 Basic Thing About React",
        img: blog1,
        link: "https://habiburrahmantusher7.medium.com/what-is-react-739999e47fdc"

    },
    {
        name: "Important Interview Question of Javascript",
        img: blog3,
        link: "https://habiburrahmantusher7.medium.com/10-important-interview-question-of-javascript-6790b8012dc7"

    }
]
const Blog = () => {
    return (
        <div id="blogs" className="pt-5 container">
            <h1 className='text-center mb-5'>Blogs</h1>
            <div className="row mt-5">
            {
                blogs.map(blog => <Blogs blog={blog}></Blogs>)
            }
            </div>
        </div>
    );
};

export default Blog;