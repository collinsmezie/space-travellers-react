import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../components/Profile';
import store from '../redux/configureStore';

describe('Test: Profile Component', () => {
  test('should render', () => {
    const profile = renderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });
});
