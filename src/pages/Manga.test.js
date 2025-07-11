import { render, screen, fireEvent } from '@testing-library/react';
import Manga from './Manga';
import '../i18n';

test('shows progress bar', () => {
  render(<Manga />);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});

test('shows message on mint', () => {
  render(<Manga />);
  fireEvent.click(screen.getByRole('button', { name: /mint manga/i }));
  expect(screen.getByTestId('mint-message')).toBeInTheDocument();
});
