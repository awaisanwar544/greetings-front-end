import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/reducer';

const store = configureStore({ reducer: greetingReducer });

export default store;
