// Blog.js

import React from 'react';
import '../css/Blog.css'
import BlogPost from './BlogPost'; // You need to create a BlogPost component

const Blog = () => {
  const posts = [
    {
      category: 'EYEGLASSES',
      title: 'Ultima',
      subtitle: 'Personalize Your Dynamic Lifestyle with the Signature Touch of Titan Ultima',
      date: 'December 16, 2022',
      readTime: '2 Mins Read',
      shares: 0,
    },
    {
        category: 'EYEGLASSES',
        title: 'Ultima',
        subtitle: 'Personalize Your Dynamic Lifestyle with the Signature Touch of Titan Ultima',
        date: 'December 16, 2022',
        readTime: '2 Mins Read',
        shares: 0,
      },
      {
        category: 'EYEGLASSES',
        title: 'Ultima',
        subtitle: 'Personalize Your Dynamic Lifestyle with the Signature Touch of Titan Ultima',
        date: 'December 16, 2022',
        readTime: '2 Mins Read',
        shares: 0,
      },
      {
        category: 'EYEGLASSES',
        title: 'Ultima',
        subtitle: 'Personalize Your Dynamic Lifestyle with the Signature Touch of Titan Ultima',
        date: 'December 16, 2022',
        readTime: '2 Mins Read',
        shares: 0,
      },
      {
        category: 'EYEGLASSES',
        title: 'Ultima',
        subtitle: 'Personalize Your Dynamic Lifestyle with the Signature Touch of Titan Ultima',
        date: 'December 16, 2022',
        readTime: '2 Mins Read',
        shares: 0,
      },
      {
        category: 'EYEGLASSES',
        title: 'Ultima',
        subtitle: 'Personalize Your Dynamic Lifestyle with the Signature Touch of Titan Ultima',
        date: 'December 16, 2022',
        readTime: '2 Mins Read',
        shares: 0,
      },
    // Add more posts with similar structures
  ];

  return (
    <>
    <h1>Latest Posts</h1>
    <div className="blog-container">
      
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
    </>
  );
};

export default Blog;
