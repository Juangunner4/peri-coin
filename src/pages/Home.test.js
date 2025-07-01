import { render, screen } from '@testing-library/react';
import Home from './Home';
import '../i18n';

test('renders contract address', () => {
  render(<Home />);
  expect(
    screen.getByText(/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd/)
  ).toBeInTheDocument();
});
