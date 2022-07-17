import { combineReducers } from 'redux';
import balance from './balance.reducer';
import user from './user.reducer';

export const reducers = combineReducers({ balance, user });
