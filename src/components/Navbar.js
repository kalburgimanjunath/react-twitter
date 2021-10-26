import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar({ items }) {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link className="nav-link" to={item}>
              {item}
            </Link>
          </a>
        </li>
      ))}
    </div>
  );
}
