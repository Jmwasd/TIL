import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/minwoo">장민우</Link>
        </li>
        <li>
          <Link to="/profile/velopert">김민준</Link>
        </li>
        <li>
          <Link to="/profile/parkmi">누구세요?</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
    </>
  );
};

export default App;
