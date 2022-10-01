import { baseApi } from "@app/api";
import { profileMiddleware } from "@features/profile/profile-middleware";
import { profileReducer } from "@features/profile/profile-state";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  profile: profileReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware, profileMiddleware),
  });

export const storeWrapper = createWrapper(makeStore);
