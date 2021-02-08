import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

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
  // const data = await axios.delete(`/contacts/${id}`);
  // return data;
}
