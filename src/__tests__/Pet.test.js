import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Pet from '../Pet';

test('Displayes a default thumbnail', async () => {
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );
  const petThumb = await pet.findByTestId('thumb');
  expect(petThumb.src).toContain('none.jpg');
});

test('Displayes a non-default, correct thumbnail', async () => {
  const pet = render(
    <StaticRouter>
      <Pet images={['1.jpg', '2.jpg', '3.jpg']}/>
    </StaticRouter>
  );
  const petThumb = await pet.findByTestId('thumb');
  expect(petThumb.src).toContain('1.jpg');
});
