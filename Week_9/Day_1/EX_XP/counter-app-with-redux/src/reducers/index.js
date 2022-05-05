import { increase, decrease } from './actions';
import { store } from './store';

const reducer = (state, action) => {
    switch(action.type) {
        case increase.INCREASE_COUNT:
            return store.getState().count + 1
        case decrease.DECREASE_COUNT:
            return store.getState().count - 1
        default:
            return state;
    }
}

export { reducer };