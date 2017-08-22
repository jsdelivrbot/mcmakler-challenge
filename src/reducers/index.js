import { combineReducers } from 'redux';
import apartmentReducer from './apartment'

const rootReducer = combineReducers({
  apartment: apartmentReducer
});

export default rootReducer;
