import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import Pet from './Pet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => (
  <div>
    <Router>
      <header>
        <Link to="/">
          <h1 id="heading" className="h1">Adopt Me!</h1>
        </Link>
      </header>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <SearchParams />
        </Route>
      </Switch>
    </Router>
  </div>
);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
