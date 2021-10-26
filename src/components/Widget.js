import React from 'react';
import { Avatar } from './Avatar';
// import { user } from '../data/sample-data';
export default function Widgets({ title, users }) {
  // console.log(users);
  const UserList = ({ item }) => {
    // console.log(item.name);
    return (
      <div>
        <div>{item.name}</div>
        <div>@{item.username}</div>
        <button>Follow</button>
      </div>
    );
  };
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      {users &&
        users.map((item) => {
          // console.log('item' + item.name);
          return <UserList item={item} />;
        })}
    </div>

    // {Object.keys(users).map(item=>{<div>{item}</div>})}
    // <div>
    //   <h1>{title}</h1>
    //   <div>
    //     <h1>User Avatar</h1>
    //     {/* <Avatar /> */}
    //     {/* <Avatar user={user} type="image" /> */}
    //   </div>
    // </div>
    // <div className="card border-secondary mb-3">
    //   <div className="card-header">{title}</div>
    //   <div className="card-body text-secondary">
    //     {/* <h5 className="card-title">Secondary card title</h5> */}
    //     {/* <p className="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p> */}
    //     {users &&
    //       users.map((item) => {
    //         return <Avatar user={item} />;
    //       })}
    //   </div>
    // </div>
  );
}
