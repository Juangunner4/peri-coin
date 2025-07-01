import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '../i18n';

test('renders contract link', () => {
  render(<Footer />);
  const link = screen.getByText(/View Contract|Ver Contracto/i);
  expect(link).toBeInTheDocument();
});
