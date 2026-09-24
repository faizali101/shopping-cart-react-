import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the shopping products and cart summary', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /products/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument();
  expect(screen.getByText(/leather backpack/i)).toBeInTheDocument();
});
