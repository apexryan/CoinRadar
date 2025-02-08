import React from "react";
import "./Blog.css";
import one from "../../assets/one.jpeg";
import two from "../../assets/two.jpeg";
import three from "../../assets/three.jpeg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "January 22, 2024",
      title: "All You Need To Know About Invoice Discounting",
      description:
        "Sed placerat felis quis enim pulvinar, et dictum nunc accumsan. Donec blandit porttitor erat, non fringilla dolor iaculis eu. Morbi ut aliquam sem.",
      image: one,
    },
    {
      id: 2,
      date: "January 22, 2024",
      title: "Crypto Ecosystem",
      description:
        "Learn the Bitcoin and Ethereum weekly activity, details of the Terra fork, and Tether's recent audit — check out our latest crypto ecosystem updates!",
      image: two,
    },
    {
      id: 3,
      date: "January 22, 2024",
      title: "How To Start A Franchise Business",
      description:
        "Efficiently initiate viral alignments via. Vestibulum sed lacinia diam. Morbi varius augue quis fringilla molestie.",
      image: three,
    },
  ];

  return (
    <div className="blog">
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <div className="blog-date">{post.date}</div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
