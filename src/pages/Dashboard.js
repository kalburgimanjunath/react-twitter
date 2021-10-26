import React from 'react';
import { Sidebar, Widget, Header, Post, Footer } from '../components/index';
import { users } from '../data/sample-data';
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar />
      <Header />
      <Post />
      <Widget title="Whats's happening" users={users} />
      <Widget title="Who to follow" users={users} />
      <Footer />
    </div>
  );
}
