import React from 'react';
import { Sidebar, Widget, Header, Post, Footer } from '../components/index';
// import { users, user } from '../data/sample-data';
export default function Lists({ users, posts }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-8">
          <Header />
          <div className="row">
            <Post posts={posts} users={users} />
            <div className="col-md-4">
              <Widget title="Whats's happening" users={users} />
              <Widget title="Who to follow" users={users} />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
