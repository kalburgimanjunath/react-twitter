import React, { useState, useEffect } from 'react';
export default function PostContent({ user, posts }) {
  return (
    <div>
      {posts &&
        posts.map((item) => {
          return (
            <div className="card">
              <div className="card-header">{item.title}</div>
              <div className="card-body text-primary">
                {/* <h5 className="card-title">{item.category}</h5> */}
                <p className="card-text">
                  {item.body}
                  {/* <div>
                    <div>Comments:{item.comments}</div>
                    <div>Likes:{item.likes}</div>
                    <div>Retweets:{item.retweets}</div>
                  </div> */}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
