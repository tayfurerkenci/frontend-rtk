import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { simpleBankApi } from './store/simpleBankApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer
    [simpleBankApi.reducerPath]: simpleBankApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(simpleBankApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
