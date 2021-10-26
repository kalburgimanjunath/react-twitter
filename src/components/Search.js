import React from 'react';
export default function Search({ title = 'Search Twitter' }) {
  return (
    <div className="col-md-4">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder={title}
            aria-label="Search"
          />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
