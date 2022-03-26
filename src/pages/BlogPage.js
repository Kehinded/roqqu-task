import React from 'react'
import { Helmet } from "react-helmet-async";
import BlogSection from '../sections/BlogSection';

const BlogPage = () => {
  return (
   <>
    <Helmet>
        <title>Roqqu Exchange</title>
        <meta
          name="description"
          content="roqqu exchange site blog, crypto roqqu site blog, exchange site blog, get crypto blog, All things Crypto, Blockchain, NFTs and Metaverse blog."
        />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <BlogSection />
   </>
  )
}

export default BlogPage