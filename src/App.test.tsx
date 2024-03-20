import { render } from '~/utils/test-utils';

import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<App>Test</App>);
    const titleElement = getByText(/Hello/i);
    expect(titleElement).toBeInTheDocument();
  });
});
