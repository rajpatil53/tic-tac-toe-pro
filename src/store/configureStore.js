import { createStore, combineReducers } from 'redux';

import Reducer from './reducers/reducer';

const rootReducer = combineReducers({
    reducer: Reducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;