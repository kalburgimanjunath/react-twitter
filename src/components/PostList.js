import React from 'react';
import PostItem from './PostItem';
import { user, users } from '../data/sample-data';
export default function PostList({ posts }) {
  return (
    <div>
      {/* <h1>PostList</h1> */}
      <PostItem users={users} posts={posts} />
    </div>
  );
}
