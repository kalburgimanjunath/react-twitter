import React from 'react';
import { Sidebar, Widget, Header, Post, Footer } from '../components/index';
// import { users, user } from '../data/sample-data';
export default function Profile({ users, posts }) {
  const tablist = ['Tweets', 'Tweet & Replies', 'Media', 'Likes'];
  const tablistComponent = tablist.map((item) => <li>{item}</li>);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-8">
          <Header />
          <div className="row">
            <div class="container">
              <div class="fb-profile">
                <img
                  align="left"
                  class="fb-image-lg"
                  src="http://lorempixel.com/850/280/nightlife/5/"
                  alt="Profile image example"
                  width="50%"
                />
                <img
                  align="left"
                  class="fb-image-profile thumbnail"
                  src="http://lorempixel.com/180/180/people/9/"
                  alt="Profile image example"
                  width="20%"
                />
                <div class="fb-profile-text">
                  <h1>Manjunath Kalburgi</h1>
                  <p>Software developer.</p>
                </div>
              </div>
            </div>
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
