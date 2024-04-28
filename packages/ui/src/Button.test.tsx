import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Button } from './Button';

test('Button should be rendered', () => {
  render(<Button>Hello</Button>);
  expect(screen.getByText(/Hello/)).toBeInTheDocument();
});
