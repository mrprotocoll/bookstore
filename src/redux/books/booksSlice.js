import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const APIKEY = 'DZhozfmIef5jvfNuBg7r';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APIKEY}/books/`;

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    return fetch(URL)
      .then((res) => res.json());
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk('book/addBook', async (data, thumkAPI) => {
  try {
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => data);
  } catch (error) {
    return thumkAPI.rejectWithValue('Oops! something went wrong');
  }
});

export const removeBook = createAsyncThunk('book/removeBook', async (id, thumkAPI) => {
  try {
    return fetch(URL + id, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => id);
  } catch (error) {
    return thumkAPI.rejectWithValue('Oops! something went wrong');
  }
});

const initialState = {
  books: [],
  error: false,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.error = true;
    },
    [addBook.fulfilled]: (state, { payload }) => {
      const {
        title, author, category,
      } = payload;
      state.books[payload.item_id] = [{
        title,
        author,
        category,
      }];
    },
    [removeBook.fulfilled]: (state, { payload }) => {
      delete state.books[payload];
    },
  },
});

export default booksSlice.reducer;
