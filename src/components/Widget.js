import React from 'react';
import { Avatar } from './Avatar';
export default function Widgets({ title, users }) {
  // console.log(users);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {users &&
          users.forEach((value, key) => {
            return (
              <div>
                {users[key].name}
                {/* <Avatar user={users[key]} /> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
