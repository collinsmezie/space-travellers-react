import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rocketsReducer from './Rockets/rockets';

const rootReducer = combineReducers({
    rocketsReducer,

})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store