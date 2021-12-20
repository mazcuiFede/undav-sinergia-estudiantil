import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL;

export const sessionService = {
  login,
  register,
  logout
};

async function login(documento, clave) {
  const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
  };
  let url = `${baseUrl}/users?documento=${documento}&password=${clave}`

  const data = await fetch(url, requestOptions)
  const result = await data.json();

  return result[0]

}

async function register(estudiante){
  
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(estudiante)
  };
  
  let url = `${baseUrl}/users`
  const data = await fetch(url, requestOptions)
  const result = await data.json();

  return result
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('token');
}

export default sessionService 