import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import Post from "../components/Post";
import api from "../services/api";
import actioncable from "../services/actioncable";

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    api.get("/posts").then((response) => setPosts(response.data));

    actioncable.subscriptions.create(
      { channel: "PostsChannel" },
      {
        received(data) {
          setPosts(data.posts || []);
        },
      }
    );
  }, []);

  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="container">
        <h1>Posts</h1>
        {posts && posts.map((item) => <Post key={item.id} {...item} />)}
      </div>
    </React.Fragment>
  );
};

export default Home;
