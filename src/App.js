const Pet = ({ name, animal, breed }) => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement('h2', {}, name),
      React.createElement('h3', {}, animal),
      React.createElement('h4', {}, breed),
    ]
  )
}

const App = () => {
  return React.createElement(
    'div',
    {},
    [
      React.createElement(
        'h1',
        {id: 'heading', className: 'h1'},
        'Adopt Me!'
      ),
      [1,2,3,4].map(el => React.createElement('h2', {}, el)),
      React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Havanese'}),
      React.createElement(Pet, { name: 'Fidel', animal: 'Dog', breed: 'Labrador'}),
      React.createElement(Pet, { name: 'Max', animal: 'Cat', breed: 'Siames'}),
    ]
  );
};
ReactDOM.render(
  React.createElement(App, {}, null),
  document.querySelector('#root')
);
