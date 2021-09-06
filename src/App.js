import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:topicId" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
