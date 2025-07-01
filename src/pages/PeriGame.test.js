import { render, screen } from '@testing-library/react';
import PeriGame from './PeriGame';
import '../i18n';

test('renders spinner icon', () => {
  render(<PeriGame />);
  const icon = screen.getByTestId('construction-icon');
  expect(icon).toBeInTheDocument();
});
