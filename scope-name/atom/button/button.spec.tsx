import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

it('renders with the correct text', () => {
  const { getByText } = render(<Button type="button">hello world!</Button>);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});