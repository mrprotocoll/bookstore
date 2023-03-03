import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const APIKEY = 'DZhozfmIef5jvfNuBg7r';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APIKEY}/books`;

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
    const addNewBook = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (addNewBook.status === 201) {
      return data;
    }
    return {};
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
  reducers: {
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.item_id !== payload);
    },
  },
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
    [addBook.rejected]: (state) => {
      state.error = true;
      console.log('rejected');
    },
  },
});

export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
