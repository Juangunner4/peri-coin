import { render, screen, fireEvent } from '@testing-library/react';
import Manga from './Manga';
import '../i18n';

test('shows progress bar', () => {
  render(<Manga />);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});

test('displays coming soon overlay message', () => {
  render(<Manga />);
  expect(screen.getByTestId('manga-overlay')).toHaveTextContent(/coming soon/i);
});

test('shows language options when mint clicked', () => {
  render(<Manga />);
  fireEvent.click(screen.getByRole('button', { name: /mint manga/i }));
  expect(screen.getByRole('button', { name: /mint english/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /mint spanish/i })).toBeInTheDocument();
});

test('shows message after choosing language', () => {
  render(<Manga />);
  fireEvent.click(screen.getByRole('button', { name: /mint manga/i }));
  fireEvent.click(screen.getByRole('button', { name: /mint english/i }));
  expect(screen.getByTestId('mint-message')).toBeInTheDocument();
});
