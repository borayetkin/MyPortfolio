// SingleBlogPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData.json";
import "../styles/SingleBlogPage.css"; // Importing the new CSS file

const SingleBlogPage = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id.toString() === id);

  if (!post) {
    return (
      <div className="main-content single-blog-page">
        <h1>Blog post not found</h1>
      </div>
    );
  }

  return (
    <div className="main-content single-blog-page">
      <div className="blog-about-section">
        {/* Display an image if the blog post has one */}
        {post.image && (
          <img src={post.image} alt={post.title} className="blog-image" />
        )}
        <h1 className="blog-title">{post.title}</h1>
        <p className="date">{post.date}</p>
        <p className="content">{post.content}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
