import { useMemo } from 'react';

export const getContacts = state => state.contacts.items;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;

// export const filteredContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getContacts(state);

//   return filter
//     ? contacts.filter(contact => {
//         if (contact.name) {
//           return (
//             contact.name.toLowerCase().includes(filter) ||
//             contact.number.toLowerCase().includes(filter)
//           );
//         }
//         return false;
//       })
//     : contacts;
// };

const contacts = getContacts();
export const filteredContactsMemo = useMemo(
  state => {
    const filter = getFilter(state);

    return filter
      ? contacts.filter(contact => {
          if (contact.name) {
            return (
              contact.name.toLowerCase().includes(filter) ||
              contact.number.toLowerCase().includes(filter)
            );
          }
          return false;
        })
      : contacts;
  },
  [contacts],
);
