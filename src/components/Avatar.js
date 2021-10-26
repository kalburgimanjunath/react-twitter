import React from 'react';
// import { users, user } from '../data/sample-data';
export default function Avatar({ user = user, type }) {
  return (
    <div>
      {type === 'image' ? (
        <div>
          <img src={user.url} width="50" height="50" />
        </div>
      ) : (
        <div>
          <div>
            <img src={user.url} width="50" height="50" />
            <div>{user.name}</div>
            <div>@{user.tag}</div>
          </div>
        </div>
      )}
    </div>
  );
}
