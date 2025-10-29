import { render, screen } from '@testing-library/react';
import Home from './Home';
import '../i18n';
import { CONTRACT_ADDRESS } from '../config/token';

test('renders contract address', () => {
  render(<Home />);
  expect(screen.getByText(CONTRACT_ADDRESS)).toBeInTheDocument();
});
