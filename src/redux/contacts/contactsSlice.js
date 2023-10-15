import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';
import { handlePending, handleRejected } from './helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);

    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(payload);
    });
    builder.addCase(addContact.rejected, handleRejected);

    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    });
    builder.addCase(deleteContact.rejected, handleRejected);
  },
});

const contactsSliceReducer = contactsSlice.reducer;
export default contactsSliceReducer;
