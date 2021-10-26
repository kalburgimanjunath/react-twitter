import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar({ items }) {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <li>
          <Link to={item}>{item}</Link>
        </li>
      ))}
    </div>
  );
}
