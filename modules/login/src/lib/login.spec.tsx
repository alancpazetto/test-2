import { render } from '@testing-library/react';

import { Login } from './login.component';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });
});
