import React from 'react';
export default function PostContent(post) {
  return (
    <div>
      {post.post.map((item) => {
        return (
          <div>
            <div>{item.title}</div>
            <div>{item.category}</div>
            <div>{item.text}</div>
            <div>Comments:{item.comments}</div>
            <div>Likes:{item.likes}</div>
            <div>Retweets:{item.retweets}</div>
          </div>
        );
      })}
    </div>
  );
}
