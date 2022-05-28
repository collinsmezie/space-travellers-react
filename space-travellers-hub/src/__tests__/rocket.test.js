import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Rockets from '../components/Rockets';

describe('Rockets description and booking page of the App', () => {
  test('Builds the snapshot of the Rockets component safely', () => {
    const rend = renderer.create(<Rockets />);
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Rockets component safely', () => {
    render(<Rockets />);
  });
}); 