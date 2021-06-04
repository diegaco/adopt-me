import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useBreedList from '../useBreedList';

const getBreedList = animal => {
  let list;

  const TestComponent = () => {
    list = useBreedList(animal);
    return null
  };

  render(<TestComponent />);
  return list;
};

test('Gives an empty list with no animal', async () => {
  const [breedList, status] = getBreedList();

  expect(breedList).toHaveLength(0);
  expect(status).toBe('unloaded');
})
