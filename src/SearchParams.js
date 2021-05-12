import React, { useState, useEffect } from 'react';
import Pet from './Pet';

const ANIMALS = ['cat', 'bird', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  const requestPets = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const data = await res.json();
    setPets(data.pets);
  };

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search-params">
      <form action="">
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
        <button>Submit</button>
      </form>
      {
        pets.map(pet => <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />)
      }
    </div>
  );
};

export default SearchParams;
