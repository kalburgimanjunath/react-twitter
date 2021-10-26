import React from 'react';
import { Sidebar, Widget, Header, Post, Footer } from '../components/index';
// import { users, user } from '../data/sample-data';
export default function Notifications({ users, posts }) {
  const tablist = ['All', 'Mentions'];
  const tablistComponent = tablist.map((item) => <li>{item}</li>);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-8">
          <Header />
          <div className="row">
            {tablistComponent}
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
