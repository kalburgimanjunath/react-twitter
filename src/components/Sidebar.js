import React from 'react';
import Navbar from './Navbar';
import Avatar from './Avatar';
import { user } from '../data/sample-data';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const sidebarItem = [
    'home',
    'explore',
    'notifications',
    'messages',
    'bookmarks',
    'lists',
    'profile',
    'more',
  ];
  // const user = {
  //   name: 'Manjunath ',
  //   tag: 'manjunmkalburgi',
  //   url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  // };

  return (
    <div className="col-md-2">
      <h3>Twitter</h3>
      <ul className="nav flex-column">
        <Navbar items={sidebarItem} className="nav-item" />
        <li>
          <Link href="#">Settings</Link>
        </li>
      </ul>
      <Avatar user={user} />
    </div>
  );
}
