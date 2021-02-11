import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(id) {
  const result = await axios.delete(`/contacts/${id}`);
  return result;
}

export async function changeContact(id) {
  const result = await axios.patch(`/contacts/${id}`);
  return result;
}
