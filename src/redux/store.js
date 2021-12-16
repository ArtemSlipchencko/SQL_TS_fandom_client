import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import auth from "./reducers/userReducer";
import posts from "./reducers/dataReducer";

const authPersistConfig = { key: "auth", storage, whitelist: ["token"] };

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  posts,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const exportedStore = {
  store,
  persistor,
};

export default exportedStore;
