import React from 'react';
import { Avatar } from './Avatar';
import { user } from '../data/sample-data';
export default function Widgets({ title, users }) {
  // console.log(users);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <h1>User Avatar</h1>
        {/* <Avatar /> */}
        {/* <Avatar user={user} type="image" /> */}
      </div>
    </div>
  );
}
