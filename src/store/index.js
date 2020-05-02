import {
    createStore,
    applyMiddleware
} from 'redux'
import Reducers from './reducer';
import thunk from 'redux-thunk'
export default createStore(Reducers,applyMiddleware(thunk))