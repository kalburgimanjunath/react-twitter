import React from 'react';
import Form from '../components/Form';
export default function Login() {
  const loginForm = [{ username: 'text', password: 'password' }];
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form action="./dashboard" method="get">
          <div>
            Username:
            <input type="text" id="username" />
          </div>
          <div>
            Password:
            <input type="text" id="username" />
          </div>
          <div>
            <input type="submit" id="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
