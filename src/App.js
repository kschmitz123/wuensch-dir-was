import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
          <Button>
            <Link to="/wishlist">+</Link>
          </Button>
        </Route>
        <Route path="/wishlist">Wishlist</Route>
      </Switch>
    </Router>
  );
}

export default App;
