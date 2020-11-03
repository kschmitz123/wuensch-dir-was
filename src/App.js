import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Button from './components/Button';
import WishListItem from './components/WishListItem';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <WishListItem title="Kathrin" />
          <Button>+</Button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
