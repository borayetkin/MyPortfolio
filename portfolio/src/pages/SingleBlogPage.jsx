// SingleBlogPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData.json";
import "../styles/SingleBlogPage.css";

// Importing images
import firstBlogImage from "../assets/images/background.jpg";
import secondBlogImage from "../assets/images/background2.jpg";

const SingleBlogPage = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id.toString() === id);

  // Mapping the imported images to their corresponding blog post IDs
  const imageMapping = {
    1: firstBlogImage,
    2: secondBlogImage,
  };

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
        {imageMapping[id] && (
          <img src={imageMapping[id]} alt={post.title} className="blog-image" />
        )}
        <h1 className="blog-title">{post.title}</h1>
        <p className="date">{post.date}</p>
        <p className="content">{post.content}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
