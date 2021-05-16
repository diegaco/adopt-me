import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => (
  <div>
    <h1 id="heading" className="h1">Adopt Me!</h1>
    <SearchParams />
  </div>
);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
