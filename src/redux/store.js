import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/authSlice";

const combinedReducer = combineReducers({
  auth: authReducer,
  // ... more reducers
});

const rootReducer = (state, action) => {
  if (action.type === "logout") {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
