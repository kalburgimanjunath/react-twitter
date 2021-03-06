import React from 'react';
import { user } from '../data/sample-data';
import Avatar from './Avatar';
export default function PostCreation() {
  return (
    <div className="row">
      <Avatar user={user} />
      <input type="text" placeholder="What's happening?" />
      <button type="button">Tweet</button>
    </div>
  );
}
