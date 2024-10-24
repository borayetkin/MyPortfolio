import React from "react";
import "../styles/BlogPage.css"; // Importing the new CSS file
import blogData from "../data/blogData.json";

const BlogPage = () => {
  return (
    <div className="main-content blog-page">
      <h1>Blog</h1>
      <ul className="blog-list">
        {blogData.map((post) => (
          <li key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p className="content">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
