import React from 'react';
// import { user } from '../data/sample-data';
import Avatar from './Avatar';
import PostContent from './PostContent';
import Widget from './Widget';
export default function PostItem({ users, posts }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <Avatar user={user} type="image" />
            <div>
              <PostContent user={user} posts={posts} />
            </div>
            {/* <Widget title="Who to follow" users={user} /> */}
          </div>
        );
      })}
    </div>
  );
}
