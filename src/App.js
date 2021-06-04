import { StrictMode, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
// import Pet from './Pet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import SearchParams from './SearchParams';
// import Details from './Details';

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(()=>import('./SearchParams'));

const App = () => {

  return (
    <Provider store={store}>
      <div
        className="p-0 m-0"
        style={{
          backgroundImage: "url('http://pets-images.dev-apis.com/pets/wallpaperA.jpg')"
        }}
      >
        <Suspense fallback={<div>Loading....</div>}>
          <Router>
            <header
              className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 to-red-500"
            >
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
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
        </Suspense>
      </div>
    </Provider>
  )
 };

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
