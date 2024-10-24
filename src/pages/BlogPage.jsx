import React from "react";
import "../styles/BlogPage.css";
import blogData from "../data/blogData.json";
import firstBlogImage from "../assets/images/background.jpg";
import secondBlogImage from "../assets/images/background2.jpg";

const BlogPage = () => {
  // Map the images to each post ID
  const imageMapping = {
    1: firstBlogImage,
    2: secondBlogImage,
  };

  return (
    <div className="main-content blog-page">
      <h1>Blog</h1>
      <ul className="blog-list">
        {blogData.map((post) => (
          <li
            key={post.id}
            className="blog-post"
            style={{
              backgroundImage: `url(${imageMapping[post.id]})`,
            }}
          >
            <a href={`/blog/${post.id}`} className="blog-post-link">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <p className="content">{post.summary}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
