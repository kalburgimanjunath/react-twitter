import React from 'react';
import PostCreation from './PostCreation';
import PostList from './PostList';
export default function Post({ posts }) {
  // console.log(posts);

  return (
    <div className="col-md-8">
      <PostCreation />
      <PostList posts={posts} />
    </div>
  );
}
