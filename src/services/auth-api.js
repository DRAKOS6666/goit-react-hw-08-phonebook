import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

export async function getCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
export async function loginUser(userData) {
  const { data } = await axios.post('/users/login', userData);
  return data;
}
export async function logoutUser() {
  const { data } = await axios.post('/users/logout');
  return data;
}
export async function signupUser(contact) {
  const { data } = await axios.post('/users/signup', contact);
  return data;
}
