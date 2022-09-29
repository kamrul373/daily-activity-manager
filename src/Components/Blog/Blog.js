import React from 'react';
import "./Blog.css";
const Blog = (props) => {
    const { title, description1, description2, thumb } = props.blog
    return (
        <article className='blog'>
            <h2>{title}</h2>
            <div className="thumb">
                <img src={thumb} alt={title} />
            </div>
            <div className="description">
                <p>{description1 ? description1 : ""}</p>
                <p>{description2 ? description2 : ""}</p>
            </div>
        </article>
    );
};

export default Blog;