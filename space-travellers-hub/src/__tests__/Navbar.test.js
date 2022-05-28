import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Tests: Navbar', () => {
  it('render test', () => {
    const navBar = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(navBar).toMatchSnapshot();
  });
});
