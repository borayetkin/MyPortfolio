import React from "react";
import { Link } from "react-router-dom";
import "../styles/BlogPage.css"; // Importing the new CSS file
import blogData from "../data/blogData.json";

const BlogPage = () => {
  return (
    <div className="main-content blog-page">
      <h1>Blog</h1>
      <ul className="blog-list">
        {blogData.map((post) => (
          <li key={post.id} className="blog-post">
            <Link to={`/blog/${post.id}`} className="blog-post-link">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <p className="content">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
