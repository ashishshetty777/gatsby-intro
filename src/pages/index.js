import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Home</h1>
      <p> Hello Mumbai!</p>
      <Link to="/about/"> Learn about me </Link>
      <h2> Read my blogs</h2>
      {posts.map(post => {
        return <PostPreview key={post.slug} post={post} />;
      })}
    </Layout>
  );
};
