import React from 'react';
export default function Avatar({ user, type }) {
  // console.log(type);
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
