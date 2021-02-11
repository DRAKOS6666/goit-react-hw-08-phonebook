import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

export async function getCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
export async function loginUser() {
  const { data } = await axios.post('/users/login');
  return data;
}
export async function logoutUser() {
  const { data } = await axios.post('/users/logout');
  return data;
}
export async function signupUser() {
  const { data } = await axios.post('/users/signup');
  return data;
}
