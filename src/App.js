import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">About</Route>
        <Route path="/contact">Contact</Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  );
}

export default App;
