import React from 'react';
// import { user } from '../data/sample-data';
import Avatar from './Avatar';
import PostContent from './PostContent';
export default function PostItem({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <Avatar user={user} type="image" />
            <div>
              <PostContent post={user.post} user={user} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
