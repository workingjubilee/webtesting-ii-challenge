import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders successfully', () => {
  render(<Display />);
})

it('should display strikes', () => {
  const { getByText } = render(<Display />);

  getByText(/strike/i);
})

it('should display hits', () => {
  const { getByText } = render(<Display />);

  getByText(/hit/i);
})

it('should display balls', () => {
  const { getByText } = render(<Display />);

  getByText(/ball/i);
})

it('should display numbers', () => {
  const { getByText } = render(<Display />);

  getByText(/\d/i);
})