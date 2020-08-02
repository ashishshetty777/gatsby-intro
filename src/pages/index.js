import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h2> Read my blogs</h2>
        {posts.map(post => {
          return <PostPreview key={post.slug} post={post} />;
        })}
      </Layout>
    </>
  );
};
