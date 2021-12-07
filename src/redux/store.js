import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import auth from "./reducers/userReducer";

const authPersistConfig = { key: "auth", storage, whitelist: ["token"] };

const middleware = [];

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const exportedStore = {
  store,
  persistor,
};

export default exportedStore;
