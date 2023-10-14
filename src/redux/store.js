import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsSliceReducer from './contacts/contactsSlice';
import filterSliceReducer from './filterSlice.js/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSliceReducer,
  filter: filterSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
