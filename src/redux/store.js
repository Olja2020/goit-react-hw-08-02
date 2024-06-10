import { configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
//import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { authReducer } from "./auth/slice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

//export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import tasksReducer from "./tasksSlice";

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//   },
// });
