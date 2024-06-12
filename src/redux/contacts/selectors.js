import { createSelector } from "@reduxjs/toolkit";

import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectVisibleName = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilters.toLowerCase())
    );
  }
);
