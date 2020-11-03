import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Welcome title="Kathrin" />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
