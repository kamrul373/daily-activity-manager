import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import "./Blogs.css"
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(blogs => setBlogs(blogs));
    }, [])
    return (
        <div className='blogs' id='blogs'>
            <h2 className='section-title'>Blogs</h2>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;