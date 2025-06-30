import { render, screen } from '@testing-library/react';
import Manga from './Manga';
import '../i18n';

test('renders pen icon', () => {
  render(<Manga />);
  const icon = document.querySelector('.writing-icon');
  expect(icon).toBeInTheDocument();
});
