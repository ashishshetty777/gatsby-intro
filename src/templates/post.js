import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import ReadLink from '../components/read-link';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  const { title, author } = post.frontmatter;
  return (
    <Layout>
      <h1>{title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by({author})
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
