import { render } from '@testing-library/react';
import PeriGame from './PeriGame';
import '../i18n';

test('renders spinner icon', () => {
  render(<PeriGame />);
  const icon = document.querySelector('.construction-icon');
  expect(icon).toBeInTheDocument();
});
