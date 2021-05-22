import Pet from './Pet';

const Results = ({ pets }) => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {
      pets.length ?
        pets.map(pet =>
          <Pet
            name={pet.name}
            key={pet.id}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ) :
        <h2>No Pets were Found</h2>
    }
  </div>
);

export default Results;
