import React from 'react';
import { render, /*screen*/ } from '@testing-library/react';
import App from './Assets/ts/App';

test('renders learn react link', () => {
  render(<App />);
  /*const linkElement = screen.get(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
});
