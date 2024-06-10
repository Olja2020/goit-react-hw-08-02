// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "./contactsOps";

// const initialState = {
//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// export const authSlice = createSlice({
//   name: "user",
//   initialState,

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchContacts.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(addContact.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//         state.loading = false;
//       })
//       .addCase(addContact.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(deleteContact.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           (item) => item.id !== action.payload.id
//         );
//         state.loading = false;
//       })
//       .addCase(deleteContact.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       });
//   },
// });
import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
