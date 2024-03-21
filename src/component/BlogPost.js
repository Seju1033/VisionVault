// BlogPost.js

import React from 'react';

const BlogPost = ({ category, title, subtitle, date, readTime, shares }) => {
  return (
    <div className="blog-post">
      <div className="post-header">
        <span>{category}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="post-meta">
        <span>{date}</span>
        <span>{readTime}</span>
        <span>{shares} Shares</span>
      </div>
    </div>
  );
};

export default BlogPost;
