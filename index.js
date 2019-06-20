import { createStore } from '../node_modules/redux/es/redux.mjs';
import { reducer } from './redux/reducer.js';
import { CHANGE_RADIUS, changeRange } from './redux/action.js';

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState())
});

document.getElementById('number').addEventListener('change', (event) => {
  store.dispatch(changeRange(event.target.value));
})

