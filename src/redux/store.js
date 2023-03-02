import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice'
import categoryReducer from './features/modal/modalSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
