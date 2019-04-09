import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders successfully', () => {
  render(<Dashboard />);
})

it('updates when the buttons are pushed', () => {
  const { getByText } = render(<Dashboard />);

  const button = getByText(/greet/i);

  fireEvent.click(button);
  getByText(/hello web xvii/i);
});