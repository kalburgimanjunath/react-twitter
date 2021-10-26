import React from 'react';
import Navbar from './Navbar';
import Avatar from './Avatar';
import { user } from '../data/sample-data';
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
    <div>
      <h1>Logo</h1>
      <Navbar items={sidebarItem} />
      <Avatar user={user} />
    </div>
  );
}
