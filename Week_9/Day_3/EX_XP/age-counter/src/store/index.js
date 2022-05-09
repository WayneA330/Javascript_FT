import { createStore, applyMiddleware } from "redux";
import { reducer } from '../reducers';

const initialState = {
    age: 20
}

const logAction = (store) => (next) => (action) => {
    console.log(`caught in the middleware ${JSON.stringify(store.getState())}`);
    next(action);
}

export const store = createStore(reducer, initialState, applyMiddleware(logAction));