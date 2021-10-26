import React, { useState, useEffect } from 'react';
import './style.css';
import { Switch, Link, Route } from 'react-router-dom';
import {
  Login,
  Dashboard,
  Home,
  Explore,
  Notifications,
  Bookmarks,
  Lists,
  Messages,
  Profile,
  Settings,
} from './pages/index.js';
import Modal from 'react-modal';
export default function App() {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'blue';
  }
  const getApiData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then((response) => response.json());

    // update the state
    setUsers(response);
    const response2 = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then((response2) => response2.json());

    // update the state
    setPosts(response2);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/home">
          <Dashboard users={users} posts={posts} />
        </Route>
        <Route path="/dashboard">
          <Dashboard users={users} posts={posts} />
        </Route>
        <Route path="/explore">
          <Explore users={users} posts={posts} />
        </Route>
        <Route path="/notifications">
          <Notifications users={users} posts={posts} />
        </Route>
        <Route path="/messages">
          <Messages users={users} posts={posts} />
        </Route>
        <Route path="/profile">
          <Profile users={users} posts={posts} />
        </Route>
        <Route path="/lists">
          <Lists users={users} posts={posts} />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks users={users} posts={posts} />
        </Route>
        <Route path="/settings">
          <button onClick={openModal}>Open Modal</button>
          <Settings users={users} posts={posts} />
        </Route>
        <Route path="/*" exact>
          <Login />
        </Route>
      </Switch>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}
