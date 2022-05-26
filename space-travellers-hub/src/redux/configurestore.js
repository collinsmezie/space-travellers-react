import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rocketsReducer from './Rockets/rockets';
import missionReducer from './Missions/missions';

const rootReducer = combineReducers({
    rocketsReducer,
    missionReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store