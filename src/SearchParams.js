import React, { useState, useEffect, useContext } from 'react';
import Results from './Results';
import ThemeContext from './ThemeContext';
import useBreedList from './useBreedList';

const ANIMALS = ['cat', 'bird', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [ theme, setTheme ] = useContext(ThemeContext);

  const requestPets = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const data = await res.json();
    setPets(data.pets);
  };

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = ev => {
    ev.preventDefault();
    requestPets();
  }

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  }

  return (
    <div className="search-params">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            placeholder="Location..."
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option value="">Select an animal</option>
            {
              ANIMALS.map(animal => <option value={animal} key={animal}>{animal}</option>)
            }
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
          >
            <option value="">Select an breed</option>
            {
              breeds.map(breed => <option value={breed} key={breed}>{breed}</option>)
            }
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            name="theme"
            id="theme"
            onChange={handleThemeChange}
            onBlur={handleThemeChange}
          >
            <option value="#000">Dark</option>
            <option value="#eee">Light</option>
          </select>
        </label>
        <button style={{backgroundColor: theme, color: theme == '#000' ? '#fff' : '#000'}}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
