import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions';
import store from '../redux/configureStore';
import { joinMission, leaveMission, loadMission } from '../redux/missions/missions';

describe('Tests: Missions', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type \'missions/loaded\'', () => {
    const data = [
      {
        mission_id: 1,
        mission_name: 'test mission',
        description: 'test description',
        mission_status: false,
      },
    ];
    const action = loadMission(data);
    expect(action.type).toBe('missions/loaded');
  });

  it('should return an action with payload of mission object array with mission_name test mission', () => {
    const data = [
      {
        mission_id: 1,
        mission_name: 'test mission',
        description: 'test description',
        mission_status: false,
      },
    ];
    const action = loadMission(data);
    expect(action.payload).toEqual(expect.arrayContaining([data[0]]));
    expect(action.payload[0].mission_name).toBe('test mission');
  });

  it('should return an action with type missions/join_mission', () => {
    const id = 1;
    const action = joinMission(id);
    expect(action.type).toBe('missions/join_mission');
  });

  it('should return an action with payload id = 1', () => {
    const id = 1;
    const action = joinMission(id);
    expect(action.payload).toBe(1);
  });

  it('should should return an action with type missions/leave_mission', () => {
    const id = 1;
    const action = leaveMission(id);
    expect(action.type).toBe('missions/leave_mission');
  });

  it('should return an action with payload id = 1', () => {
    const id = 1;
    const action = leaveMission(id);
    expect(action.payload).toBe(1);
  });
});
