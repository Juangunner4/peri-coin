import { render, screen } from '@testing-library/react';
import Manga from './Manga';
import '../i18n';

test('renders manga heading', () => {
  render(<Manga />);
  const heading = screen.getByRole('heading', { name: /manga/i });
  expect(heading).toBeInTheDocument();
});
