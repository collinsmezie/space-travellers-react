/* eslint-disable import/extensions */
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';
import { reserveRocket, cancelReservation, loadCompletedAction } from '../redux/Rockets/rockets';

describe('Tests: Rockets', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type \'LOADED\'', () => {
    const data = [
      {
        id: 1,
        name: 'sample rocket',
        description: 'sample description',
        images: 'sample image',
        rocketid: 'sample rocket id',
        reserved: false,
      },
    ];
    const action = loadCompletedAction(data);
    expect(action.type).toBe('LOADED');
  });

  it('should return an action with payload of rocket object array with name test rocket', () => {
    const data = [
      {
        id: 1,
        name: 'test rocket',
        description: 'sample description',
        images: 'sample image',
        rocketid: 'sample rocket id',
        reserved: false,
      },
    ];
    const action = loadCompletedAction(data);
    expect(action.payload).toEqual(expect.arrayContaining([data[0]]));
    expect(action.payload[0].name).toBe('test rocket');
  });

  it('should return an action of type RESERVATION', () => {
    const id = 1;
    const action = reserveRocket(id);
    expect(action.type).toBe('RESERVATION');
  });

  it('should return an action with payload id = 1', () => {
    const id = 1;
    const action = reserveRocket(id);
    expect(action.payload).toBe(1);
  });

  it('should should return an action of type CANCEL_RESERVATION', () => {
    const id = 1;
    const action = cancelReservation(id);
    expect(action.type).toBe('CANCEL_RESERVATION');
  });

  it('should return an action with payload id = 1', () => {
    const id = 1;
    const action = cancelReservation(id);
    expect(action.payload).toBe(1);
  });
});
