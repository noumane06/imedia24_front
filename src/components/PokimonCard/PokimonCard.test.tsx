import { render, screen } from '@testing-library/react';
import PokimonCard from './PokimonCard';

test('renders the landing page', () => {
  const pokemon = {
    name: 'test',
    url: 'tesst',
  }
  render(<PokimonCard pokimon={pokemon} />);
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('button')).not.toBeDisabled();
  expect(screen.getByRole('button')).toHaveTextContent('View details');
});